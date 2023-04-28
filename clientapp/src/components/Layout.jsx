import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6995C2",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: `"Microsoft Sans Serif", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontFamily: `"Calibri", sans-serif`,
    },
    h2: { fontFamily: `"Calibri", sans-serif` },
    h3: { fontFamily: `"Calibri", sans-serif` },
    h4: { fontFamily: `"Calibri", sans-serif` },
    h5: { fontFamily: `"Calibri", sans-serif` },
    h6: { fontFamily: `"Calibri", sans-serif` },
  },
});
const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col min-h-screen">
        {props.header ? <Header title={props.headerTitle} /> : ""}
        <Container
          className="flex-grow flex flex-col"
          maxWidth="xl"
        >
          <Outlet />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export { Layout };
