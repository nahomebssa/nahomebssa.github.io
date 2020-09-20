import React from "react";
import styled from "styled-components";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Navbar,
    Nav,
    NavLink,
    NavDropdown,
    Jumbotron,
} from "react-bootstrap";
import "./smooth-scroll.css";
// import { B } from 'react-icons/bs'
import {
    FaLinkedin,
    FaGithub,
    FaGithubAlt,
    FaGithubSquare,
} from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

export default function App() {
    return (
        <Container>
            <GlobalNavigation />
            <MyHero />
            {/* <AboutSection /> */}
            <WorkSection />
            <ContactSection />
        </Container>
    );
}

const GlobalNavigation = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">Nahom Ebssa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/* <Nav.Link href="#about">About</Nav.Link> */}
                    <Nav.Link href="#work">Work</Nav.Link>
                    {/* <NavDropdown title="Work" id="basic-nav-dropdown">
						<NavDropdown.Item href="#work/work-1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#work/work-2">
							Another action
						</NavDropdown.Item>
						<NavDropdown.Item href="#work/work-3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#work/work-4">
							Separated link
						</NavDropdown.Item>
					</NavDropdown> */}
                </Nav>
                <NavLink href="#contact-me">
                    <Button>Contact Me</Button>
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};
const MyHero = () => {
    const { Section } = StyledComponents;
    return (
        <>
            <Section style={{ display: "flex", alignItems: "center" }}>
                <Container>
                    <Jumbotron>
                        <Row>
                            <Col sm>
                                <h1>Hi I'm Nahom!</h1>
                                <p>
                                    I am a computer science student at George
                                    Mason University. I am passionate about
                                    artificial intelligence and enjoy creating
                                    personal projects using my programming
                                    skills
                                </p>
                            </Col>
                            <Col sm>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                        display: "none",
                                    }}
                                >
                                    <div style={{ paddingRight: "20px" }}>
                                        <h3>Recent</h3>
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Img
                                                variant="top"
                                                src="https://fakeimg.pl/180x100"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    Card Title
                                                </Card.Title>
                                                <Card.Text>
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card's content.
                                                </Card.Text>
                                                <Button variant="primary">
                                                    Go somewhere
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </Section>
        </>
    );
};
const AboutSection = () => {
    const { Section, SectionSubtitle } = StyledComponents;
    return (
        <Section id="about">
            <Heading>About Me</Heading>
            <SectionSubtitle>Hi, I'm Nahom!</SectionSubtitle>
            <p>
                I am a computer science student at George Mason University. I am
                passionate about artificial intelligence and enjoy creating
                personal projects using my programming skills.
            </p>
        </Section>
    );
};
const WorkSection = () => {
    const works = [
        {
            title: "Mentor App",
            link: "https://nahomebssa.github.io/mentor-app",
            ghLink: "https://github.com/nahomebssa/mentor-app",
            description: `Your mentor search ends here.`,
        },
        {
            title: "Unsplash Daily Wallpaper",
            // link: 'https://nahomebssa.github.io/unsplash-daily-wallpaper',
            ghLink: "https://github.com/nahomebssa/unsplash-daily-wallpaper",
            description: `Getting tired of seeing the same thing on your desktop every day? Now you can renew your desktop with some view goals from Unsplash's wealth of wallpapers!`,
        },
        {
            title: "Github Issues in Pictures",
            link: "https://github.com/nahomebssa/gh-image-crawler",
            ghLink: "https://github.com/nahomebssa/gh-image-crawler",
            description: `A picture is a thousand words, or actually a thousand lines of code. This neat little script fetches all the images from issues in a repo and bundles them in an html page to envision the project's future.`,
        },
    ];
    const { Section, SectionSubtitle } = StyledComponents;
    return (
        <Section id="work">
            <Heading>My Work</Heading>
            <SectionSubtitle>Projects I'm working on...</SectionSubtitle>
            <Container>
                <Row>
                    {works.map(
                        (
                            {
                                link = "#",
                                title,
                                description,
                                ghLink = "https://github.com/nahomebssa?tab=repositories",
                            },
                            i
                        ) => (
                            <Col sm>
                                <RepoCard key={i} style={{ width: "100%" }}>
                                    <RepoCard.Img href={link}>
                                        <Card.Img src="#" alt="" />
                                    </RepoCard.Img>
                                    <RepoCard.Content>
                                        <Card.Title>
                                            <Button variant="link" href={link}>
                                                <h3>{title}</h3>
                                            </Button>
                                        </Card.Title>
                                        <Card.Text>{description}</Card.Text>
                                    </RepoCard.Content>
                                    <div
                                        style={{
                                            display: "flex",
                                            padding: "20px",
                                        }}
                                    >
                                        <Button variant="link" href={ghLink}>
                                            <FaGithub size={24} />
                                        </Button>
                                    </div>
                                </RepoCard>
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </Section>
    );
};
const ContactSection = () => {
    const socials = [
        {
            icon: BsEnvelope,
            href: "mailto:enahom13@gmail.com",
            title: "Email",
        },
        {
            icon: FaGithub,
            href: "https://github.com/nahomebssa",
            title: "Github",
        },
        {
            icon: FaLinkedin,
            href: "https://linkedin.com/nahomebssa",
            title: "LinkedIn",
        },
    ];

    const {
        Section,
        SectionSubtitle,
        UList,
        SocialItem,
        SocialItemTitle,
    } = StyledComponents;
    return (
        <Section id="contact-me">
            <Heading>Contact Me</Heading>
            <SectionSubtitle>Talk to me!</SectionSubtitle>
            <UList>
                {socials.map(({ href, icon: MSocialIcon, title }, i) => {
                    return (
                        <SocialItem key={i}>
                            <Button variant="link" href={href}>
                                <MSocialIcon />
                                <SocialItemTitle>{title}</SocialItemTitle>
                            </Button>
                        </SocialItem>
                    );
                })}
            </UList>
        </Section>
    );
};

const Heading = (props) => {
    const { H1, H2, H3, H4, H5, H6, HDiv } = StyledComponents;
    if (props.h1) return <H1 {...props} />;
    if (props.h2) return <H2 {...props} />;
    if (props.h3) return <H3 {...props} />;
    if (props.h4) return <H4 {...props} />;
    if (props.h5) return <H5 {...props} />;
    if (props.h6) return <H6 {...props} />;
    return <HDiv {...props} />;
};
const StyledComponents = {
    H1: styled.h1`
        color: inherit;
    `,
    H2: styled.h2`
        color: inherit;
    `,
    H3: styled.h3`
        color: inherit;
    `,
    H4: styled.h4`
        color: inherit;
    `,
    H5: styled.h5`
        color: inherit;
    `,
    H6: styled.h6`
        color: inherit;
    `,
    HDiv: styled.div`
        color: inherit;
    `,
    Section: styled.div`
        background: #0000;
        min-height: 100vh;
        padding: 50px 0;
        /* padding: 20px 20px; */
        /* margin: 20px 0; */
        /* border: 1px solid #CCC; */
        /* border-radius: 3px; */
        /* box-shadow: 0 2px 10px 0 #0002; */
    `,
    SectionSubtitle: styled.h2``,
    UList: styled.ul`
        padding: 20px;
        list-style: none;
    `,
    SocialItem: styled.li`
        margin: 10px;
    `,
    SocialItemTitle: styled.span`
        margin-left: 10px;
    `,
};
const RepoCard = styled(Card)`
    width: 29%;
    height: 100%;
    max-height: 70vh;
    margin: 20% 2%;
    box-shadow: 0 2px 10px 0 #0004;
`;
RepoCard.Img = styled.div`
    height: 30vh;
    background: slategray;
`;
RepoCard.Content = styled.div`
    padding: 20px;
    height: 100%;
`;
