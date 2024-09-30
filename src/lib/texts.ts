import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBrain, faChartLine, faCode, faGlobe, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faDatabase, faTachometerAlt, faGraduationCap, faBug } from '@fortawesome/free-solid-svg-icons';

const logoText = 'A/N'
const email = 'arnoldzkie22@gmail.com'

const headerLinks = ['Projects', 'Introduction', 'Expertise', 'Service']

const mainText = {
    h1: 'Transforming Ideas into Functional Web Applications',
    h2: 'I develop user-friendly solutions that are easy to understand and implement. Experience the simplicity and reliability of straightforward software.',
    button: "Let's Work!"
}

const hiddenText = {
    h1: "You've Uncovered a Hidden Gem!",
    h2: 'This is where things get interesting. Take a look around and see what you find.',
    button: "Don't Click... Unless You Dare!",
    message: "Well spotted! Let's team up. Hire me!"
}

const socialLinks = [
    {
        icon: faFacebook,
        link: 'https://web.facebook.com/arnoldzkie2'
    },
    {
        icon: faGithub,
        link: 'https://github.com/arnoldzkie2'
    },
    {
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/arnold-nillas-924132268/'
    }
]

const introductionText = {
    h1: "Who Am I",
    text: {
        h1: "Hello World",
        paragraphs: {
            p1: "I'm Arnold Nillas, 21 years old, a developer who loves to solve problems.",
            p2: "I've been diving deep into web development, learning how to create awesome user interfaces and build strong server-side applications through self-teaching. It's been quite a journey, but I'm getting the hang of it!",
            p3: "Over the past year, I've really enjoyed solving coding puzzles and making ideas into real websites. I've been all in, from thinking up ideas to actually making them work online.",
            p4: "Click this button below :D"
        }
    }
}

const serviceTexts = {
    h1: 'What I Offer',
    services: [
        {
            icon: faCode,
            title: "Full Stack Development",
            description: "Crafting comprehensive solutions that cover both frontend and backend development, ensuring your project is built with versatility and expertise."
        },
        {
            icon: faGlobe,
            title: "Modern Web Application",
            description: "Building cutting-edge web applications using the latest technologies and best practices, guaranteeing a user-friendly and responsive experience for your users."
        },
        {
            icon: faChartLine,
            title: "Maintainable and Scalable",
            description: "Creating solutions that are easily maintainable and scalable, allowing your project to grow alongside your business needs without compromising performance or stability."
        }
    ]
}

const expertiseTexts = {
    h1: "What I'm good at",
    skills: {
        tech: {
            h1: 'Technical Skills',
            skills: [
                {
                    title: "Next.js",
                    icon: "/icons/nextjs.svg",
                    description: "Expertise in building fast, modern, scalable, and responsive web applications efficiently and elegantly leveraging Next.js capabilities."
                },
                {
                    title: "React",
                    icon: "/icons/react.svg",
                    description: "Proficiency in developing dynamic, interactive user interfaces, and robust, efficient single-page applications effortlessly using React."
                },
                {
                    title: "TypeScript",
                    icon: "/icons/typescript.svg",
                    description: "Extensive experience in writing scalable, maintainable JavaScript applications proficiently with TypeScript, ensuring efficiency and reliability."
                },
                {
                    title: "Tailwind CSS",
                    icon: "/icons/tailwind.svg",
                    description: "Proficient in Tailwind CSS, a utility-first framework for creating highly customized, responsive designs effortlessly and efficiently."
                },
                {
                    title: "MySQL",
                    icon: "/icons/mysql.svg",
                    description: "Skilled with MySQL, a trusted database management system, proficient at storing, managing, and querying relational data efficiently."
                },
                {
                    title: "PostgreSQL",
                    icon: "/icons/postgresql.svg",
                    description: "Experience with PostgreSQL relational database management system for scalable and reliable data storage."
                },
                {
                    title: "MongoDB",
                    icon: "/icons/mongodb.svg",
                    description: "Proficient with MongoDB, a NoSQL database prized for its flexibility and scalability in handling diverse data types."
                },
                {
                    title: "VS Code",
                    icon: "/icons/vscode.svg",
                    description: "Proficiency in using Visual Studio Code, a lightweight and powerful code editor for efficient development workflows."
                },
                {
                    title: "Postman",
                    icon: "/icons/postman.svg",
                    description: "Experience with Postman for API development, testing, and collaboration, streamlining the development process."
                },
                {
                    title: "GitHub",
                    icon: "/icons/github.svg",
                    description: "Proficiency in using GitHub for version control, collaboration, and project management in software development."
                }
            ]
        },
        programming: {
            h1: 'Programming Skills',
            skills: [
                {
                    icon: faBrain,
                    title: "Adaptable Programmer",
                    description: "Rapidly learning new languages, I adapt to diverse projects, mastering frameworks and syntaxes to deliver top-quality solutions across technologies."
                },
                {
                    icon: faLightbulb,
                    title: "Problem-Solving",
                    description: "Strong ability to analyze complex problems and devise effective solutions, leveraging various algorithms and techniques.",
                },
                {
                    icon: faDatabase,
                    title: "Data Structures",
                    description: "Proficiency in implementing and working with various data structures to efficiently organize, access, and manipulate data.",
                },
                {
                    icon: faTachometerAlt,
                    title: "Code Optimization",
                    description: "Skill in optimizing code for performance and efficiency, utilizing techniques to improve speed, memory usage, and resource utilization.",
                },
                {
                    icon: faGraduationCap,
                    title: "Continuous Learning",
                    description: "Committed to continuous learning and self-improvement, staying updated with the latest trends and best practices in software development."
                },
                {
                    icon: faBug,
                    title: "Troubleshooting",
                    description: "Expertise in identifying and resolving issues in code efficiently, using debugging tools and methodologies to diagnose and fix problems.",
                }
            ]
        }
    }

}

const contactTexts = {
    form: {
        h1: "Contact Me",
        p: "I just need a few quick details"
    },
    div: {
        h1: "Leave a message.",
        p: "Hey there! Whether you have a project idea, want to discuss collaboration opportunities, or simply want to say hello, I'm all ears! Feel free to drop me a message using the form below. I'm excited to hear from you and can't wait to chat!"
    }
}

const projectTexts = {
    h1: "Featured Projects",
    projects: [
        {
            name: "SonicNode",
            description: "A reliable Minecraft server hosting in Philippines. (built by me)",
            image: '/projects/sonicnode.png',
            used: ["/icons/nextjs.svg", "/icons/tailwind.svg", '/icons/mysql.svg', "/icons/typescript.svg",],
            links: {
                web: 'https://www.sonicnode.xyz/',
                github: 'https://github.com/arnoldzkie2/sonicnode'
            }
        },
        {
            name: "Verbalace",
            description: "Portfolio website for language and verbal skill enhancement.",
            image: '/projects/verbalace.png',
            used: ["/icons/nextjs.svg", "/icons/typescript.svg", "/icons/tailwind.svg", '/icons/mysql.svg'],
            links: {
                web: 'https://www.verbalace.com/',
                github: 'https://github.com/arnoldzkie2/verbalace'
            }
        },
    ]
}

export {
    logoText,
    headerLinks,
    introductionText,
    contactTexts,
    mainText,
    email,
    hiddenText,
    serviceTexts,
    socialLinks,
    expertiseTexts,
    projectTexts
}