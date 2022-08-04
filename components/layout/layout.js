import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { Container, Box } from "@mui/system";
import Particles from "../ParticlesBackground";
import styles from "../../styles/Home.module.css";

const Main = ({ children, router }) => {
  return (
    <Box pb={8}>
      <Head>
        <title>Cameron Petrie - Home</title>
      </Head>
      <Particles />
      <Navbar path={router.asPath} />
      <Box id="home-container" className={styles.container}>
        <Box className={styles.background} />
        {children}
      </Box>
    </Box>
  );
};
export default Main;
