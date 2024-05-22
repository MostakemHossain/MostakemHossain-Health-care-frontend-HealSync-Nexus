import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../assets/landing_page/facebook.png";
import instagram from "../../../assets/landing_page/instagram.png";
import linkedin from "../../../assets/landing_page/linkedin.png";
import twitter from "../../../assets/landing_page/twitter.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={4} justifyContent={"center"} py={3}>
          <Image src={facebook} width={30} height={30} alt="facebook" />
          <Image src={linkedin} width={30} height={30} alt="linkedin" />
          <Image src={twitter} width={30} height={30} alt="twitter" />
          <Image src={instagram} width={30} height={30} alt="instagram" />
        </Stack>

        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction={"row"}
          gap={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
        >
          <Typography color={"white"} component={"p"}>
            © {currentYear} Health Sync nexus. All rights reserved.
          </Typography>
          <Typography
            color={"white"}
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            Heal{" "}
            <Box component={"span"} color={"primary.main"}>
              Sync
            </Box>{" "}
            Nexus
          </Typography>
          <Typography color={"white"} component={"p"}>
            privacy Policy || Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
