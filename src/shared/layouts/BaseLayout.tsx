import type { ReactNode } from "react";
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
  toolBar?: ReactNode;
}
const BaseLayout: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  title,
  toolBar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        padding={1}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
        >
          {title}
        </Typography>
      </Box>
      {toolBar && <Box>{toolBar}</Box>}
      <Box flex={1} overflow={"auto"}>
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
