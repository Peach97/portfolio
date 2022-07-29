import Head from "next/head";

const Layout = ({ children, title }) => {
  const t = `${title} - Cameron Petrie`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
        </Head>
      )}{" "}
      {children}
    </>
  );
};
