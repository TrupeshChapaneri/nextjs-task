import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React from "react";

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Box
        width="100%"
        height="calc(100vh - 128px)"
        p="6"
        overflowX="hidden"
        overflowY="auto"
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
}

export { AppLayout };
