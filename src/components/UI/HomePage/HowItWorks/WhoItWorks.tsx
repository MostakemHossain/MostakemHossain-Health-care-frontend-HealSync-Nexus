"use client";
import femaleDocImg from "@/assets/how-it-works-img.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import searchIcon from "@/assets/icons/search-icon.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <Container>
      <Box my={10}>
        <Box>
          <Typography
            component="p"
            fontSize={20}
            fontWeight={400}
            color="#1586FD"
            sx={{ mb: 1.3 }}
          >
            How it Works
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={600}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Access to expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            and top-quality medical care from the comfort of your home.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} mt={5}>
            <Grid item xs={6}>
              <Image src={femaleDocImg} alt="doctor image" />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={searchIcon} alt="search-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Search for a Doctor
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Find experienced doctors from our comprehensive database
                      based on your health needs.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={doctorIcon} alt="doctor-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Check Doctor Profiles
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Review qualifications, specialties, and patient feedback
                      to choose the best doctor for you.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={appointmentIcon} alt="appointment-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Schedule an Appointment
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Easily book an appointment at a time that suits your
                      schedule.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={charityIcon} alt="solution-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Receive Your Treatment
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Get the medical advice and treatment you need through a
                      video consultation.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
