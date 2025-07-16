import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import type { IReactChildren } from "../../interfaces/IReactChildren";
import { deepOrange } from "@mui/material/colors";

export const SideMenu: React.FC<IReactChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          display={"flex"}
          flexDirection={"column"}
          height="100%"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                height: theme.spacing(12),
                width: theme.spacing(12),
                fontSize: theme.spacing(4),
              }}
            >
              P
            </Avatar>
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}></Box>
      {children}
    </>
  );
};
