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

// export const MenuButton = ({ setOpenNav, open, setOpen, openNav }) => {
//   const theme = useTheme;
//   return (
//     <Box
//       color="divider"
//       sx={{
//         height: "2.5rem",
//         padding: "0 1rem 0 0",
//         display: "flex",
//         justifyContent: "center",
//         borderRight: "0.07rem solid ",
//       }}
//     >
//       <StyledButton
//         sx={{
//           color: "text.primary",
//           borderRadius: "8px",
//         }}
//         onClick={() => {
//           setOpen(true);
//           setOpenNav(!openNav);
//         }}
//       >
//         <Hamburger
//           styles={{ color: "inherit" }}
//           direction="left"
//           size={18}
//           duration={0.6}
//           rounded
//           toggled={open}
//           toggle={setOpen}
//         />
//         <Typography color="text.primary" fontWeight={100} fontSize={16}>
//           MENU
//         </Typography>
//       </StyledButton>
//     </Box>
//   );
// };

// export const CloseButton = ({ setOpenNav, open, setOpen, openNav }) => {
//   return (
//     <StyledButton
//       sx={{ margin: "0.5rem 1rem 0.5rem auto", color: "text.primary" }}
//       disableRipple
//       onClick={() => {
//         setOpen(false);
//         setOpenNav(!openNav);
//       }}
//     >
//       <Typography fontSize={12} fontWeight={400} pr={0}>
//         CLOSE
//       </Typography>
//       <CloseIcon />
//     </StyledButton>
//   );
// };

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
