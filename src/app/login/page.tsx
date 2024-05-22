"use client";
import assets from "@/assets";
import HealthSyncInput from "@/components/Forms/HealthSyncInput";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import { storeUserInfo } from "@/services/auth.service";
import { userLogin } from "@/services/userLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email Address"),
  password: z.string().min(1, "Password must required"),
});

const Login = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);

      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Box
          sx={{
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography
                variant="h5"
                component={Link}
                href="/"
                fontWeight={600}
              >
                Login Heal{" "}
                <Box component={"span"} color={"primary.main"}>
                  Sync
                </Box>{" "}
                Nexus
              </Typography>
            </Box>
          </Stack>
          <HealthSyncForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Typography
                textAlign={"end"}
                mb={1}
                component="p"
                fontWeight={300}
              >
                Forgot Password?
              </Typography>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={400}>
                Dont&apos; have an account?{" "}
                <Link href="/register" passHref>
                  <Typography
                    component="a"
                    sx={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Create an account
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </HealthSyncForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
