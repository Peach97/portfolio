import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { Container, Box } from "@mui/system";
import Particles from "../ParticlesBackground";
import styles from "../../styles/Home.module.css";
import dynamic from "next/dynamic";
import Background from "../Three/background";

const Main = ({ children, router }) => {
  return (
    <Box pb={8}>
      <Head>
        <title>Cameron Petrie - Home</title>
      </Head>

      <Navbar path={router.asPath} />
      <Background />
      <Box className={styles.container}>{children}</Box>
    </Box>
  );
};
export default Main;
