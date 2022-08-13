import { forwardRef } from "react";
import { Box, CircularProgress } from "@mui/material";

export const RoomSpinner = () => (
  <CircularProgress sx={{ position: "absolute", top: "50%", left: "50%" }} />
);
// eslint-disable-next-line react/display-name
export const RoomContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    sx={{
      margin: "auto",
      width: "60vw",
      height: "100vh",
      position: "relative",
      zIndex: "3",
    }}
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <RoomContainer>
      <RoomSpinner />
    </RoomContainer>
  );
};

export default Loader;
