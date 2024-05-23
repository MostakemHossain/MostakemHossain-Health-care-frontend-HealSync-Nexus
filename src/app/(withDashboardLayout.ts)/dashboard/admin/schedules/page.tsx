"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display ScheduleS</Box>
    </Box>
  );
};

export default SchedulePage;
