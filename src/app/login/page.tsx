import assets from "@/assets";
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

const Login = () => {
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
          <form>
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
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
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
