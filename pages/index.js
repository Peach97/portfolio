import { Box } from "@mui/system";
import React from "react";
import HeroSection from "./home";
import Footer from "../components/footer/footer";

export default function Home({ toggle, path, setPage }) {
  return (
    <>
      <Box width="100%">
        <HeroSection path={path} toggle={toggle} setPage={setPage} />
      </Box>
      <Footer />
    </>
  );
}
