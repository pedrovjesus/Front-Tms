import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IListToolsProps {
  searchText?: string;
  showSearchInput?: boolean;
  onChangeSearchText?: (newText: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  onClickNewButton?: () => void;
}

const ListTools: React.FC<IListToolsProps> = ({
  onChangeSearchText,
  searchText = "",
  showSearchInput = false,
  textNewButton = "Novo",
  showNewButton = true,
  onClickNewButton,
}) => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display={"flex"}
      flex={1}
      gap={1}
      alignItems={"center"}
      component={Paper}
    >
      {showSearchInput && (
        <TextField
          size="small"
          value={searchText}
          onChange={(e) => onChangeSearchText?.(e.target.value)}
          placeholder="Pesquisar..."
        />
      )}
      <Box flex={1} display={"flex"} justifyContent={"end"}>
        {showNewButton && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={onClickNewButton}
            endIcon={<Icon>add</Icon>}
          >
            {textNewButton}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ListTools;
