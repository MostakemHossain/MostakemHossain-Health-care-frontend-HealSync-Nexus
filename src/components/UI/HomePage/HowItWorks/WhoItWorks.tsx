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
            Access to expert physicians and surgeons, advanced technologies,
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            and top-quality medical care from the comfort of your home.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} mt={5}>
            <Grid item xs={12} md={6}>
              <Image src={femaleDocImg} alt="doctor image" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {[
                  {
                    icon: searchIcon,
                    title: "Search for a Doctor",
                    description:
                      "Find experienced doctors from our comprehensive database based on your health needs.",
                  },
                  {
                    icon: doctorIcon,
                    title: "Check Doctor Profiles",
                    description:
                      "Review qualifications, specialties, and patient feedback to choose the best doctor for you.",
                  },
                  {
                    icon: appointmentIcon,
                    title: "Schedule an Appointment",
                    description:
                      "Easily book an appointment at a time that suits your schedule.",
                  },
                  {
                    icon: charityIcon,
                    title: "Receive Your Treatment",
                    description:
                      "Get the medical advice and treatment you need through a video consultation.",
                  },
                ].map((step, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#fff",
                        border: "1px solid lightgray",
                        borderRadius: "10px",
                        padding: "20px",
                        height: "100%", // Ensuring equal height for all cards
                      }}
                    >
                      <Image
                        src={step.icon}
                        alt={`${step.title.toLowerCase()}-icon`}
                      />
                      <Typography
                        variant="h6"
                        component="h2"
                        fontWeight={500}
                        mt={3}
                        textAlign="center"
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={14}
                        fontWeight={400}
                        mt={1}
                        textAlign="center"
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
