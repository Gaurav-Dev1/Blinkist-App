import React from "react";
import { Box, Container, Typography, ThemeProvider } from "@mui/material";
import { flexbox, styled } from "@mui/system";
import theme from "../../../Themes/Theme";
import Logo from "../../atoms/Logo/Logo";
import { footerData } from "../../../Data/FooterData";
import BlinkistLogo from "../../atoms/Logo/BlinkistLogo.svg";

function FooterComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "24px 24px 24px 244px",
          width: "1440px",
          height: "370px",
          background: "#F1F6F4",
          bottom: "0px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box sx={{ marginTop: "14px" }}>
              <Logo src={BlinkistLogo} />
            </Box>
            <Box
              sx={{
                width: "378px",
                marginTop: "32px",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{
                  lineHeight: "32px",
                  fontWeight: "500px",
                  fontSize: "24px",
                }}
              >
                Big ideas in small packages<br></br>
                Start learning now
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyItems: "center",
              marginLeft: "32px",
              marginTop: "14px",
            }}
          >
            {footerData.map((curr, i) => {
              return (
                <Box
                  key={`footer-${i}`}
                  sx={{
                    margin: "0px 20px",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {curr.heading}
                  </Typography>
                  <Box sx={{ marginTop: "16px", justifyItes: "center" }}>
                    {curr.topics.map((currTopic) => {
                      return (
                        <Box sx={{ marginTop: "16px" }}>
                          <Typography
                            variant="body2"
                            sx={{ color: "#6D787E", lineHeight: "24px" }}
                          >
                            {currTopic}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            marginBottom: "38px",
            marginTop: "152px",
            width: "546px",
            height: "22px",
          }}
        >
          <Typography variant="caption1" color={"#6D787E"}>
            © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
            Policies
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default FooterComponent;
