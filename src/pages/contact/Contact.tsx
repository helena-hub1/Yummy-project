import { Typography } from "@mui/material";
import { Card } from "@material-ui/core";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Box } from "@mui/material";

import "./Contact.css";

const Contact = () => {
  return (
    <Card className="contact-card">
      <CardHeader
        className="header"
        title={
          <Typography variant="h5" sx={{ m: 0, p: 0 }}>
            Contact Us
          </Typography>
        }
      />
      <CardContent className="coontent">
        <Typography component="div">
          <Box
            sx={{
              mt: 0,
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            We love hearing from you! Please contact us via the email address or
            phone numbers below.
          </Box>
          <Box
            sx={{
              m: 1,
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            For answears to frequently asked questions about your subscription
            please check our frequently asked questions.
          </Box>
          <Box
            sx={{
              m: 1,
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            <b>Email address:</b>help@yummy.com
          </Box>
          <Box
            sx={{
              m: 1,
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            we will respond to your email with in 72 hours.
          </Box>
          <Box
            sx={{
              m: 1,
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            <b>Phone number1:</b>567-444444; phone number2:
          </Box>
          <Box
            sx={{
              m: 1,
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            <b>phone number2:</b>789-456789 Hours of operations through friday 9
            a.m. to 7p.m E.T
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contact;
