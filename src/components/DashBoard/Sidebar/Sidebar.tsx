import { userRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Box>
      <Typography variant="h5" p={2} component={Link} href="/" fontWeight={600}>
        Heal{" "}
        <Box component={"span"} color={"primary.main"}>
          Sync
        </Box>{" "}
        Nexus
      </Typography>
      <List>
        {drawerItems("admin" as userRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
