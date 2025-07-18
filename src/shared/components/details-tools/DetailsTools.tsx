import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IDetailsTools {
  textNewButton?: string;
  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndBackButton?: boolean;

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
      {showSaveButton && (
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

      {showSaveAndBackButton && (
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

      {showNewButton && (
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
      {showDeleteButton && (
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

      <Divider variant="middle" orientation="vertical" />
      {showBackButton && (
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
