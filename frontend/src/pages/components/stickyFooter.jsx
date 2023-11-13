import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

//maybe add to footer so it has site-map or other navigation elements

//returns the underlined text for our website name, work on fixing link reference
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit">Stardew</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "0 auto",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 3,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            marginTop: "auto", // Adjusted the margin-top property
            position: "sticky", // Added position: sticky
            bottom: 0, // Stick to the bottom of the viewport
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">All Rights Reserved.</Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
