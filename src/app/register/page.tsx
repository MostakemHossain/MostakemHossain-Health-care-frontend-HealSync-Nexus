"use client";
import assets from "@/assets";
import HealthSyncInput from "@/components/Forms/HealthSyncInput";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import { storeUserInfo } from "@/services/auth.service";
import { registerPatient } from "@/services/registerPatient";
import { userLogin } from "@/services/userLogin";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
const Register = () => {
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
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
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <HealthSyncForm onSubmit={handleRegister}>
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item xs={12}>
                  <HealthSyncInput
                    name="patient.name"
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth
                    name="patient.email"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth
                    name="password"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Contact Number"
                    type="text"
                    name="patient.contactNumber"
                    size="small"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Address"
                    type="text"
                    size="small"
                    fullWidth
                    name="patient.address"
                    required={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={400}>
                Do you already have an account?{" "}
                <Link href="/login" passHref>
                  <span
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </span>
                </Link>
              </Typography>
            </Box>
          </HealthSyncForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
