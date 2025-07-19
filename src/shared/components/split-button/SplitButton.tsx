import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  CircularProgress,
  Icon,
} from "@mui/material";

interface ISplitButtonProps {
  options: {
    id: string;
    text: string;
    action: () => void;
    loading?: boolean;
  }[];
  initialSelectedIndex?: number;
}

const SplitButton: React.FC<ISplitButtonProps> = ({
  options,
  initialSelectedIndex = 0,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  useEffect(() => {
    if (options.length > 0 && selectedIndex >= options.length) {
      setSelectedIndex(0);
    } else if (options.length === 0) {
      setSelectedIndex(-1);
    }
  }, [options, selectedIndex]);

  if (options.length === 0) {
    return null;
  }
  const currentSelectedOption = options[selectedIndex];

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);

    const clickedOption = options[index];
    if (clickedOption && clickedOption.action) {
      clickedOption.action();
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box display={"flex"} flex={1} justifyContent="flex-end">
      <ButtonGroup
        variant="contained"
        color="primary"
        disableElevation
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          onClick={currentSelectedOption.action}
          disabled={currentSelectedOption.loading}
        >
          {currentSelectedOption.text}
          {currentSelectedOption.loading && (
            <CircularProgress size={16} color="inherit" sx={{ ml: 1 }} />
          )}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          disabled={currentSelectedOption.loading}
        >
          <Icon>arrow_drop_down</Icon>
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.id || option.text}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      disabled={option.loading}
                    >
                      {option.text}
                      {option.loading && (
                        <CircularProgress
                          size={16}
                          color="inherit"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default SplitButton;
