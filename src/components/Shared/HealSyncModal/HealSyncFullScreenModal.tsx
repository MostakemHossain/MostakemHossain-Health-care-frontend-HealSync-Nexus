import CloseIcon from "@mui/icons-material/Close";
import { Box, SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { BootstrapDialog } from "./HealSyncModal";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HealSyncFullScreenModal({
  open = false,
  setOpen,
  children,
  sx,
  title = "",
}: TModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleClose}
              aria-label="close"
            ></IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create A Doctor
            </Typography>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            p: 2,
          }}
        >
          {children}
        </Box>
      </BootstrapDialog>
    </React.Fragment>
  );
}
