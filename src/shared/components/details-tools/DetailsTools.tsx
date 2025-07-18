import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from "@mui/material";

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
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          variant="contained"
          color="primary"
          onClick={onClickSaveButton}
          disableElevation
          endIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {showSaveButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {showSaveAndBackButton && !showSaveAndBackButtonLoading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickSaveAndBackButton}
          disableElevation
          endIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {showSaveAndBackButtonLoading && (
        <Skeleton width={"150px"} height={"60px"} />
      )}
      {showNewButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {showNewButton && !showNewButtonLoading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickNewButton}
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
          {textNewButton}
        </Button>
      )}
      {showDeleteButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      {showDeleteButton && !showDeleteButtonLoading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickDeleteButton}
          disableElevation
          endIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {showBackButtonLoading && <Skeleton width={"100px"} height={"60px"} />}

      <Divider variant="middle" orientation="vertical" />
      {showBackButton && !showBackButtonLoading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onClickBackButton}
          disableElevation
          endIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};

export default DetailsTools;
