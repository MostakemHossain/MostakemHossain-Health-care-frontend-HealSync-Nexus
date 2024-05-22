"use client";
import assets from "@/assets";
import HealthSyncInput from "@/components/Forms/HealthSyncInput";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import { storeUserInfo } from "@/services/auth.service";
import { registerPatient } from "@/services/registerPatient";
import { userLogin } from "@/services/userLogin";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please Enter your name"),
  email: z.string().email("Please enter a valid email Address"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please Provide a valid phone number"),
  address: z.string().min(1, "Please Enter your Address!!"),
});

export const patientRegistrationvalidationSchema = z.object({
  password: z.string().min(1, "Password must be 6 Characters"),
  patient: patientValidationSchema,
});

export const defaultvalues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState("");
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
          router.push("/dashboard");
        }
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      console.error(error.message);
      console.log(error);
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
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "3px",
                  borderRadius: "4px",
                  color: "#fff",
                  marginTop: "2px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <HealthSyncForm
            onSubmit={handleRegister}
            resolver={zodResolver(patientRegistrationvalidationSchema)}
            defaultValues={defaultvalues}
          >
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item xs={12}>
                  <HealthSyncInput
                    name="patient.name"
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth
                    name="patient.email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth
                    name="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Contact Number"
                    type="text"
                    name="patient.contactNumber"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <HealthSyncInput
                    label="Address"
                    type="text"
                    size="small"
                    fullWidth
                    name="patient.address"
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
