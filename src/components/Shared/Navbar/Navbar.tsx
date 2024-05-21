"use client";
import { getUserInfo, removeUser } from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleSignOut = () => {
    removeUser();
    toast.success("Logout Successfully");
    router.push("/");
    window.location.reload();
  };
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          Heal{" "}
          <Box component={"span"} color={"primary.main"}>
            Sync
          </Box>{" "}
          Nexus
        </Typography>
        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        {userInfo?.email ? (
          <Button
            color="error"
            onClick={handleSignOut}
            component={Link}
            href="/"
          >
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
