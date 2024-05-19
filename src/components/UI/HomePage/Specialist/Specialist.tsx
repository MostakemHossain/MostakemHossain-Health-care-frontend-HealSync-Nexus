import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:4000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore treatments Across Specialtits
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={"18px"}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>
        <Stack direction={"row"} mt={5} gap={4}>
          {specialties.map((specility: any) => (
            <Box
              key={specility.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                  borderRadius: "10px",
                },
              }}
            >
              <Image
                src={specility.icon}
                height={100}
                width={100}
                alt="speciality"
              />
              <Typography
                component="p"
                fontWeight={600}
                fontSize={"18px"}
                mt={2}
              >
                {specility.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Box mt={3}>
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
