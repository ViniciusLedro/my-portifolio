import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        overflow: "hidden"

    }));

    const projects = [
        {
            title: "Project Fatrek",
            subtitle: "Fev 2025 - Jul 2025",
            srcImg: "/src/assets/images/projectFatrek.png",
            description: "Fatreck é uma aplicação web, desenvolvida para auxiliar o corpo docente da FATEC Jacareí a disponibilizar os horários de aula de cada curso e em qual sala sera ministrada a respectiva aula de acordo com os cursos. Os alunos podem acessar essa página web e utiliza-lo para localização dentro da unidade e checar os horários de aula.",
            technologies: "Tecnologias: JavaScript, Node.js, HTML, CSS, Figma",
            websiteURL: "https://fatreck.ct.ws",
            codeURL: "https://github.com/CRIMS0NC0DE/abp-2025-1",
        },
        {
            title: "Project Megasena",
            subtitle: "Fev 2025 - Jul 2025",
            srcImg: "/src/assets/images/projectMega.jpg",
            description: "Aplicação web full-stack desenvolvida para a consulta de resultados da Mega-Sena. O projeto consome uma API REST própria, construída com Node.js e Express, que serve os dados a partir de um banco de dados PostgreSQL. O Front-end foi desenvolvidocom foco em uma experiência de usuário limpa e responsiva.",
            technologies: "Tecnologias: JavaScript, Node.js, HTML, CSS",
            websiteURL: "https://project-megasena.vercel.app/",
            codeURL: "https://github.com/ViniciusLedro/projectMegasena/tree/main/server%26FrontMegasena/data",
        },
        {
            title: "Project Jogo do Número Secreto",
            subtitle: "Jun 2025 - Jul 2025",
            srcImg: "/src/assets/images/projectJogoNumeros.png",
            description: "Este projeto foi desenvolvido como um exercício prático durante a formação Oracle Next Education (ONE). Trata-se de um jogo de adivinhação onde o objetivo do jogador é descobrir um número secreto, gerado aleatoriamente entre 1 e 10, no menor número de tentativas possível. A aplicação foi criada utilizando tecnologias web fundamentais, com toda a lógica de validação de entradas, comparação de números e feedback ao usuário implementada em JavaScript puro.",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: "https://secret-number-game-iota-five.vercel.app/",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Project Challenge Amigo Secreto",
            subtitle: "Aug 2025 - Aug 2025",
            srcImg: "/src/assets/images/projectChallengeAmigoSecreto.png",
            description: "Aplicação desenvolvida como parte de um desafio prático da formação Oracle Next Education (ONE), criada para simplificar a organização do tradicional jogo de Amigo Secreto. O projeto foi inteiramente construído com HTML, CSS e JavaScript puro, focando na manipulação do DOM e na lógica de programação. O usuário pode adicionar os nomes dos participantes dinamicamente e, com um clique, o sistema realiza o sorteio de forma aleatória e exibe os resultados.",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: "https://challenge-amigo-secreto-woad-xi.vercel.app/",
            codeURL: "https://github.com/ViniciusLedro/challengeAmigoSecreto",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
