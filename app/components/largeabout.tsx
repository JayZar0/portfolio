import { Avatar, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2"; // ✅ Correct Grid2 import
import { ContactMail, Phone } from "@mui/icons-material";
import { styled } from "@mui/system";
import * as React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
}))

export default function About() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center" component="div">

        {/* Left Section */}
        <Grid container direction="column" spacing={2} sx={{ flex: { xs: "100%", sm: "33%" } }} component="div">
          <Grid component="div">
            <Item>
              <Avatar
                src="john.png"
                sx={{
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
                  margin: "auto",
                }}
              />
              <Typography variant="h6">John Lazaro</Typography>
              <Typography variant="body1">
                <ContactMail fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                john.e.lazaro@gmail.com
              </Typography>
              <Typography variant="body1">
                <Phone fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                (306) 850-8737
              </Typography>
            </Item>
          </Grid>

          <Grid component="div">
            <Item>
              <Typography variant="h6">Skills and Experience</Typography>
              <Typography variant="body1">...</Typography>
            </Item>
          </Grid>
        </Grid>

        {/* Right Section */}
        <Grid sx={{ flex: { xs: "100%", sm: "67%" } }} component="div">
          <Item sx={{ textAlign: "left" }}>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1">
              I started off as a student in electronics engineering with an interest in developing
              robotics. However, I found myself struggling with hardware development. Eventually,
              I shifted toward software development due to its similarities with engineering and the
              significant role programming plays in electronics. Since then, I have enjoyed my time
              studying networking, operating systems, software development, database management, and
              project management in the Computer Systems Technology program.
            </Typography>
          </Item>
        </Grid>

      </Grid>
    </Container>
  )
}
