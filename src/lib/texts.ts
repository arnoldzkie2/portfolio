import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBrain, faPuzzlePiece, faCode, faGlobe, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faDatabase, faTachometerAlt, faGraduationCap, faBug } from '@fortawesome/free-solid-svg-icons';

const email = 'arnoldzkie22@gmail.com'

const navigation = [
    { id: 'Projects', label: 'Work' },
    { id: 'Introduction', label: 'About' },
    { id: 'Expertise', label: 'Toolkit' },
    { id: 'Service', label: 'Services' },
]

const socialLinks = [
    {
        label: 'Facebook',
        icon: faFacebook,
        link: 'https://web.facebook.com/arnoldzkie2'
    },
    {
        label: 'GitHub',
        icon: faGithub,
        link: 'https://github.com/facelessuum'
    },
    {
        label: 'LinkedIn',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/arnold-nillas-924132268/'
    }
]

const serviceTexts = {
    services: [
        {
            icon: faGlobe,
            title: 'A website that feels like your business.',
            category: 'Websites & landing pages',
            description: 'Give people a clear picture of what you do and an easy way to take the next step.',
            deliverables: ['Responsive layouts', 'Clear content & navigation', 'Contact & enquiry flows'],
            projectName: 'Image Edits',
        },
        {
            icon: faCode,
            title: 'Your workflow. Your web app.',
            category: 'Full stack applications',
            description: 'Turn your idea into an application with thoughtful interfaces and the systems to support them.',
            deliverables: ['Interactive interfaces', 'API & database integration', 'Maintainable application code'],
            projectName: 'Stylus',
        },
        {
            icon: faPuzzlePiece,
            title: 'Less repetitive work. More possibility.',
            category: 'Custom tools & integrations',
            description: 'Connect systems, convert files, and build a simpler way to get the difficult things done.',
            deliverables: ['File conversion tools', 'Custom APIs', 'Workflow automation'],
            projectName: 'Oraxen2Bedrock',
        },
    ],
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
                    title: "Python",
                    icon: "/icons/python.svg",
                    description: "Proficient in Python for backend development, automation, data processing, and building reliable conversion tools."
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
                    title: "Turborepo",
                    icon: "/icons/turborepo.svg",
                    description: "Experience using Turborepo to organize and optimize monorepo development with shared packages, efficient task pipelines, and caching."
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

const projectTexts = {
    h1: "Featured Projects",
    projects: [
        {
            name: "Oraxen2Bedrock",
            description: "A Turborepo monorepo for converting Oraxen resource packs to Bedrock for Geyser support, with a Next.js frontend, FastAPI backend, Python conversion engine, and PostgreSQL database.",
            image: '/projects/oraxen2bedrock.png',
            used: ["/icons/turborepo.svg", "/icons/nextjs.svg", "/icons/python.svg", "/icons/postgresql.svg"],
            links: {
                web: 'https://oraxen2bedrock-zeta.vercel.app/',
                github: 'https://github.com/facelessuum/oraxen2bedrockScript'
            }
        },
        {
            name: "Stylus",
            description: "A modern DeFi platform focused on making growth predictable through simple, accessible, and transparent financial products.",
            image: '/projects/stylus.png',
            used: ["/icons/nextjs.svg", "/icons/typescript.svg", "/icons/tailwind.svg", '/icons/mysql.svg', '/icons/turborepo.svg'],
            links: {
                web: 'https://stylus-homepage.vercel.app/',
                github: 'https://stylus-homepage.vercel.app/'
            }
        },

        {
            name: "Image Edits",
            description: "Professional real estate photo editing, virtual staging, day-to-dusk, and floorplan services for photographers, agents, and property marketers who need fast, consistent delivery.",
            image: '/projects/imageedits.png',
            used: ["/icons/nextjs.svg", "/icons/tailwind.svg", '/icons/postgresql.svg', "/icons/typescript.svg",],
            links: {
                web: 'https://imageedits.com',
                github: 'https://imageedits.com'
            }
        },
        {
            name: "SonicNode",
            description: "A reliable Minecraft server hosting in Philippines. (built by me)",
            image: '/projects/sonicnode.png',
            used: ["/icons/nextjs.svg", "/icons/tailwind.svg", '/icons/mysql.svg', "/icons/typescript.svg",],
            links: {
                web: 'https://sonicnode.xyz/',
                github: 'https://github.com/facelessuum/sonicnode'
            }
        },
        {
            name: "Verbalace",
            description: "Portfolio website for language and verbal skill enhancement.",
            image: '/projects/verbalace.png',
            used: ["/icons/nextjs.svg", "/icons/typescript.svg", "/icons/tailwind.svg", '/icons/mysql.svg'],
            links: {
                web: 'https://www.verbalace.com/',
                github: 'https://github.com/facelessuum/verbalace'
            }
        },
    ]
}

export {
    navigation,
    email,
    serviceTexts,
    socialLinks,
    expertiseTexts,
    projectTexts,
}
