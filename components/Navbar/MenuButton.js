import { Button, Typography, IconButton, Divider } from "@mui/material";
import { Twirl as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import black from "../../public/images/c-black.png";
import white from "../../public/images/c-white.png";
import { Box } from "@mui/system";

export const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
`;
export const StyledIconButton = styled(IconButton)`
  border-radius: 8px;
  &:hover {
    background: none;
  }
`;
export const LogoButtonWhite = (props) => {
  return (
    <StyledIconButton className={styles.logo} size="medium" edge="start">
      <Image
        height={props.height}
        width={props.width}
        layout="intrinsic"
        src={white}
        alt="/"
      />
    </StyledIconButton>
  );
};
export const LogoButtonBlack = (props) => {
  return (
    <StyledIconButton className={styles.logo} size="medium" edge="start">
      <Image
        height={props.height}
        width={props.width}
        layout="intrinsic"
        src={black}
        alt="/"
      />
    </StyledIconButton>
  );
};

export const BackButton = () => {
  const router = useRouter();

  return (
    <StyledButton disableRipple onClick={() => router.back({ scroll: false })}>
      <ArrowBackIosNewIcon />
      <Typography fontWeight={400} fontSize={16}>
        Go Back
      </Typography>
    </StyledButton>
  );
};
