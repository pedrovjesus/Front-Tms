import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { IReactChildren } from "../interfaces/IReactChildren";
import { useDrawerContext } from "../contexts/DrawerContext";
interface ILayoutBaseDePaginaProps extends IReactChildren {
  title: string;
}
const BaseLayout: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  title,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        padding={1}
        height={theme.spacing(10)}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default BaseLayout;
