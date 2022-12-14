import "../styles/globals.css";
import React, { useState, useEffect, useContext } from "react";
import LoaderConfig from "../components/Loader/loader-config";
import Layout from "../components/layout/layout";
import ThemeToggler from "../components/lib/theme";
import { CssBaseline } from "@mui/material";
import WorkContext from "../components/context";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../components/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
  router,
}) {
  //emotionCache helps MaterialUI sx CSS to run correctly

  const [value, setValue] = useState();
  const context = useContext(WorkContext);
  //Works page toggler
  const [toggle, setToggle] = useState(true);
  //Theme toggler
  const [loading, setLoading] = useState(true);
  //loading handler
  const [page, setPage] = useState(false);
  //Navbar/footer toggler

  useEffect(() => {
    const handleComplete = () => {
      if (window.location.href.indexOf("slick") > -1) {
        setTimeout(() => {
          document.querySelector(".preloader").classList.add("hidden");
        }, 5000);
      }
      if (window.location.href.indexOf("takeover-pods") > -1) {
        setTimeout(() => {
          document.querySelector(".preloader").classList.add("hidden");
        }, 5000);
      }
      if (window.location.href.indexOf("podcast") > -1) {
        setTimeout(() => {
          document.querySelector(".preloader").classList.add("hidden");
        }, 5000);
      }
    };
    router.events.on("routeChangeComplete", handleComplete());
    router.events.on("routeChangeError", handleComplete());
    return () => {
      router.events.off("routeChangeComplete", handleComplete());
      router.events.off("routeChangeError", handleComplete());
    };
  }, [router.asPath, router.events]);
  // runs whenever a router event occurs

  return (
    <>
      <LoaderConfig loading={loading} />
      <CacheProvider value={emotionCache}>
        <ThemeToggler toggle={toggle} setToggle={setToggle}>
          <CssBaseline />
          <Layout
            toggle={toggle}
            setToggle={setToggle}
            page={page}
            router={router}
          >
            <WorkContext.Provider value={{ value, setValue }}>
              <Component
                path={router.asPath}
                router={router}
                setPage={setPage}
                toggle={toggle}
                setToggle={setToggle}
                {...pageProps}
                key={router.route}
              />
            </WorkContext.Provider>
          </Layout>
        </ThemeToggler>
      </CacheProvider>
    </>
  );
}

export default MyApp;
