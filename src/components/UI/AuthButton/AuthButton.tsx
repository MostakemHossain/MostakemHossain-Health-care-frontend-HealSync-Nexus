import { getUserInfo, removeUser } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleSignOut = () => {
    removeUser();
    toast.success("Logout Successfully");
    router.push("/");
    router.refresh();
    window.location.reload();
  };
  return (
    <>
      {userInfo?.email ? (
        <Button color="error" onClick={handleSignOut} component={Link} href="/">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
