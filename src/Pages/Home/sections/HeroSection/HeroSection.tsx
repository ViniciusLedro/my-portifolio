import React from "react";
import Avatar from "../../../../assets/images/avatar.jpg";
import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";

import CV from "../../../../assets/pdfs/meu-curriculo.pdf"
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "50%",
        position: "relative",
        zIndex: 1
    }));

    const StyledHero = styled("div")(({ theme }) => ({
         backgroundColor: "black",
         height: "100vh",
         display: "flex",
         alignItems: "center",
         position: "relative", 
         zIndex: 1,
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'ViniciusLedro_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'ledro.ledro16@gmail.com';
        const subject = 'Assunto';
        const body = 'Olá! Eu olhei seu Portifolio...';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    return (
        <>
            <StyledHero>
                <AnimatedBackground />
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="secondary" variant="h1" pb={2} textAlign="center">
                               Vinícius Lêdro
                            </Typography>
                            <Typewriter text="I'm Software Developer" delay={120} variant="h2" color="primary" />
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>
                                                Contact me
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection
