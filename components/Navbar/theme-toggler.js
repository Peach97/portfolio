import { IconButton } from "@mui/material";
import { StyledIconButton } from "./MenuButton";
import { AnimatePresence, motion } from "framer-motion";
import night from "../../public/images/night (1).png";
import light from "../../public/images/sunny (1).png";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledToggle = styled(IconButton)`
  &:hover {
    background: none;
  }
`;

export default function ToggleButton({ toggle, setToggle }) {
  return (
    <div style={{ marginLeft: "auto" }} className="toggle-button">
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={toggle}
          style={{ marginLeft: "auto" }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <StyledIconButton
            sx={{ border: "2px solid" }}
            disableRipple
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {!toggle ? (
              <Image
                layout="intrinsic"
                src={night}
                alt="/"
                height={20}
                width={20}
              />
            ) : (
              <Image
                layout="intrinsic"
                height={20}
                width={20}
                src={light}
                alt="/"
              />
            )}
          </StyledIconButton>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
