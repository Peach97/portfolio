import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { Container, Box } from "@mui/system";
import Particles from "../ParticlesBackground";
import styles from "../../styles/Home.module.css";
import Scene from "../Three/scene";

const Main = ({ children, router }) => {
  return (
    <Box pb={8}>
      <Head>
        <title>Cameron Petrie - Home</title>
      </Head>
      {/* <Scene /> */}
      <Navbar path={router.asPath} />
      <Container className={styles.container}>{children}</Container>
    </Box>
  );
};
export default Main;
