import { getUserInfo } from "@/services/auth.service";
import { userRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  const userInfo = getUserInfo() as any;

  useEffect(() => {
    const { role } = userInfo;
    setUserRole(role);
  }, []);
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
        {drawerItems(userRole as userRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
