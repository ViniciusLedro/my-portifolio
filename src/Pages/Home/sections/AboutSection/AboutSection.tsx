import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const StyledCard2 = styled(Card)(({ theme }) => ({
  width: "100%",     
  height: "100%",
  padding: "10px 10px",
  textAlign: "center",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "Bootstrap",
    "Node.js",
    "Git",
    "HTML",
    "CSS",
    "SQL",
    "PostgreSQL",
    "Material UI",
    "Figma",
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={8}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid item xs={9} md={5}>
            <AnimationComponent moveDirection="right">
              <StyledCard2 variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Experiência
                </Typography>
                <Typography textAlign="center">+2 anos</Typography>
                <Typography textAlign="center">Software Engineering</Typography>
              </StyledCard2>
            </AnimationComponent>
          </Grid>
          <Grid item xs={9} md={5}>
            <AnimationComponent moveDirection="left">
              <StyledCard2 variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Formação
                </Typography>
                <Typography textAlign="center">Cursando Desenvolvimento de Software Multiplataforma - FATEC Jacareí</Typography>
              </StyledCard2>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            Profissional em início de carreira com sólida formação acadêmica,
            cursando Desenvolvimento de Software Multiplataforma na FATEC e
            recém-graduado como Técnico em Tecnologia da Informação. <br></br> Atualmente,
            participo do programa Oracle Next Education para aprofundar meus
            conhecimentos em tecnologias de ponta. Minha trajetória inclui uma
            experiência como Jovem Aprendiz de Analista de Negócios na Embraer ,
            onde colaborei no levantamento de requisitos e na estruturação de
            projetos de TI com metodologias ágeis e a ferramenta JIRA. <br></br>Em
            projetos práticos, liderei como Product Owner o desenvolvimento do
            "Fatreck", um sistema de gestão acadêmica. Minhas responsabilidades
            incluíram a prototipagem da interface, a validação dos requisitos de
            negócio e a facilitação das cerimônias do SCRUM. Estou preparado para agregar valor a uma
            equipe de desenvolvimento de software e aprimorar ainda mais minhas habilidades e conhecimento.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
        <hr />
      </Container>
    </>
  );
};

export default AboutSection;
