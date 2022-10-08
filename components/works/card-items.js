import { Typography, Box } from "@mui/material";
import { Text } from "./card-summary";

export const Utilities = (props) => {
  return (
    <Box
      color="text.primary"
      sx={{
        width: "100%",
        margin: "1rem auto 0 0",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{ padding: "0.5rem", borderRadius: "16px" }}
        // bgcolor="background.text"
      >
        <Text fontWeight={600}>{props.first}</Text>
      </Box>
      <Box
        sx={{ padding: "0.5rem", borderRadius: "16px" }}
        // bgcolor="background.text"
      >
        <Text fontWeight={600}>{props.second}</Text>
      </Box>
      <Box
        sx={{ padding: "0.5rem", borderRadius: "16px" }}
        // bgcolor="background.text"
      >
        <Text fontWeight={600}>{props.third}</Text>
      </Box>
      <Box
        sx={{ padding: "0.5rem", borderRadius: "16px" }}
        // bgcolor="background.text"
      >
        <Text fontWeight={600}>{props.fourth}</Text>
      </Box>
    </Box>
  );
};
