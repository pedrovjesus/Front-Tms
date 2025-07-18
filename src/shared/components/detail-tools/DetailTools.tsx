import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

const DetailTools: React.FC = () => {
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
      <Button
        variant="contained"
        color="primary"
        disableElevation
        endIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        endIcon={<Icon>save</Icon>}
      >
        Salvar e voltar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        endIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        endIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>
      <Divider variant="middle" orientation="vertical"/>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        endIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>
    </Box>
  );
};

export default DetailTools;
