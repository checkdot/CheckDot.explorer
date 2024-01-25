import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer";
import {
  GlobalStateProvider,
  useGlobalState,
} from "../../global-config/GlobalConfig";
import {ProvideColorMode} from "../../context";

// Statically initialize wallets that don't change for the network

interface LayoutProps {
  children: React.ReactNode;
}

export default function ExplorerLayout({children}: LayoutProps) {
  return (
    <ProvideColorMode>
      <CssBaseline />
      <GlobalStateProvider>
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            backgroundColor: "transparent",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Container maxWidth="xl" sx={{flexGrow: 4, paddingTop: "2rem"}}>
            {children}
          </Container>
          <Footer />
        </Box>
      </GlobalStateProvider>
    </ProvideColorMode>
  );
}
