"use client";
import assets from "@/assets";
import { registerPatient } from "@/services/registerPatient";
import { modifyPayload } from "@/utils/modifyPayload";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}
interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.name", { required: true })}
                  />
                  {errors.patient?.name && (
                    <Typography color="error">Name is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.email", { required: true })}
                  />
                  {errors.patient?.email && (
                    <Typography color="error">Email is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <Typography color="error">Password is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Contact Number"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.contactNumber", { required: true })}
                  />
                  {errors.patient?.contactNumber && (
                    <Typography color="error">
                      Contact Number is required
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.address", { required: true })}
                  />
                  {errors.patient?.address && (
                    <Typography color="error">Address is required</Typography>
                  )}
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
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
