import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="hero" />
        </Box>
        <Box>
          <Typography variant="h3" component={"h1"} fontWeight={600}>
            Healthier Hearts
          </Typography>
          <Typography variant="h3" component={"h1"} fontWeight={600}>
            Come From
          </Typography>
          <Typography
            color={"primary.main"}
            variant="h3"
            component={"h1"}
            fontWeight={600}
          >
            Preventive Care
          </Typography>
          <Typography variant="h6" component={"p"} fontWeight={400} py={2}>
            Regular check-ups and early detection are key to maintaining a
            healthy heart. Our comprehensive preventive care services are
            designed to help you stay ahead of potential health issues and lead
            a healthier life.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button>Make Appointment</Button>
            <Button variant="outlined">Contact Us</Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          position: "relative",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              height={380}
              width={240}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              height={350}
              width={240}
              alt="doctor2"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "220px",
              left: "150px",
            }}
          >
            <Image
              src={assets.images.doctor3}
              height={240}
              width={240}
              alt="doctor3"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-50px",
              right: 0,
              zIndex: "-1",
            }}
          >
            <Image
              src={assets.images.stethoscope}
              height={180}
              width={180}
              alt="doctor3"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
