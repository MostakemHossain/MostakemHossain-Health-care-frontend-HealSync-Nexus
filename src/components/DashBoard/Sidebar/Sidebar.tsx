import { userRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const Sidebar = () => {
  const drawer = (
    <div>
      <List>
        {drawerItems("admin" as userRole).map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box>
      <Typography variant="h5" p={2} component={Link} href="/" fontWeight={600}>
        Heal{" "}
        <Box component={"span"} color={"primary.main"}>
          Sync
        </Box>{" "}
        Nexus
      </Typography>
      {drawer}
    </Box>
  );
};

export default Sidebar;
