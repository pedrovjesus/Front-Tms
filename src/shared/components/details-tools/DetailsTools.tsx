import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SplitButton from "../split-button/SplitButton";
import { useMemo } from "react";

interface IDetailsTools {
  textNewButton?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndBackButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;
  showSaveAndBackButtonLoading?: boolean;

  onClickNewButton?: () => void;
  onClickSaveButton?: () => void;
  onClickBackButton?: () => void;
  onClickDeleteButton?: () => void;
  onClickSaveAndBackButton?: () => void;
}

const DetailsTools: React.FC<IDetailsTools> = ({
  textNewButton = "Novo",
  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveAndBackButton = false,
  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveAndBackButtonLoading = false,
  onClickNewButton,
  onClickSaveButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickSaveAndBackButton,
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const splitButtonOptions = useMemo(() => {
    const optionsArray = [];

    if (showNewButton) {
      optionsArray.push({
        id: "new",
        text: textNewButton,
        action:
          onClickNewButton ||
          (() => console.log("Novo (default) from SplitButton")),
        loading: showNewButtonLoading,
      });
    }
    if (showSaveButton) {
      optionsArray.push({
        id: "save",
        text: "Salvar",
        action:
          onClickSaveButton ||
          (() => console.log("Salvar (default) from SplitButton")),
        loading: showSaveButtonLoading,
      });
    }
    if (showSaveAndBackButton) {
      optionsArray.push({
        id: "saveAndBack",
        text: "Salvar e voltar",
        action:
          onClickSaveAndBackButton ||
          (() => console.log("Salvar e voltar (default) from SplitButton")),
        loading: showSaveAndBackButtonLoading,
      });
    }
    if (showDeleteButton) {
      optionsArray.push({
        id: "delete",
        text: "Apagar",
        action:
          onClickDeleteButton ||
          (() => console.log("Deletar (default) from SplitButton")),
        loading: showDeleteButtonLoading,
      });
    }
    if (showBackButton) {
      optionsArray.push({
        id: "back",
        text: "Voltar",
        action:
          onClickBackButton ||
          (() => console.log("Voltar (default) from SplitButton")),
        loading: showBackButtonLoading,
      });
    }
    return optionsArray;
  }, [
    textNewButton,
    showNewButton,
    showSaveButton,
    showSaveAndBackButton,
    showDeleteButton,
    showBackButton,
    showNewButtonLoading,
    showSaveButtonLoading,
    showSaveAndBackButtonLoading,
    showDeleteButtonLoading,
    showBackButtonLoading,
    onClickNewButton,
    onClickSaveButton,
    onClickSaveAndBackButton,
    onClickDeleteButton,
    onClickBackButton,
  ]);

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
      {showSaveButton && !showSaveButtonLoading && !mdDown && (
        <Button
          variant="contained"
          color="primary"
          onClick={onClickSaveButton}
          disableElevation
          endIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Salva
          </Typography>
        </Button>
      )}
      {showSaveButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {showSaveAndBackButton && !showSaveAndBackButtonLoading && !mdDown && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickSaveAndBackButton}
          disableElevation
          endIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Salvar e voltar
          </Typography>
        </Button>
      )}
      {showSaveAndBackButtonLoading && (
        <Skeleton width={"150px"} height={"60px"} />
      )}
      {showNewButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {showNewButton && !showNewButtonLoading && !mdDown && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickNewButton}
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            {textNewButton}
          </Typography>
        </Button>
      )}
      {showDeleteButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {showDeleteButton && !showDeleteButtonLoading && !mdDown && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickDeleteButton}
          disableElevation
          endIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Apagar
          </Typography>
        </Button>
      )}
      {showBackButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {!mdDown && <Divider variant="middle" orientation="vertical" />}
      {showBackButton && !showBackButtonLoading && !mdDown && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickBackButton}
          disableElevation
          endIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            Voltar
          </Typography>
        </Button>
      )}

      {mdDown && (
        <SplitButton options={splitButtonOptions} initialSelectedIndex={0} />
      )}
    </Box>
  );
};

export default DetailsTools;
