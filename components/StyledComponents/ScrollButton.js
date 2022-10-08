import { Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ScrollButton = () => {
  return (
    <Button>
      <Typography className="scroll-text">
        Scroll Down <KeyboardArrowDownIcon />
      </Typography>
    </Button>
  );
};
export default ScrollButton;
