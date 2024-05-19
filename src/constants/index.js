import {
  react_native,
  mern_stack,
  spring_stack,
  laravel_vue,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  docker,
  threejs,
  angular,
  python,
  chatgpt,
  spring_project,
  symphony_solutions,
  it_test,
  pyco,
  amazon,
  exoworlds_project,
  react_native_project,
  avatar1,
  avatar2,
  avatar3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Laravel Vue Developer",
    icon: laravel_vue,
  },
  {
    title: "MERN Stack Developer",
    icon: mern_stack,
  },
  {
    title: "React Native Expert",
    icon: react_native,
  },
  {
    title: "Java Spring Stack Expert",
    icon: spring_stack,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Chat GPT",
    icon: chatgpt,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Symphony Solutions",
    icon: symphony_solutions,
    iconBg: "#ffffff",
    date: "Nov 2022 - Present",
    points: [
      `Spearheaded the migration of monolithic applications to a microservices architecture using Spring Boot, resulting in a 27% improvement in scalability and performance. This transformation enabled the organization to achieve greater
      scalability, and time-to-market, aligning with industry trends and best practices.`,
      `Offered experience with Java, Java Spring, TypeScript, Angular, Docker and GCP.`,
      `Improved internal core library used by web and mobile platforms.`,
      `Implemented CI/CD pipelines using Git, Jenkins, and GitHub Actions to automate software delivery processes.`,
    ],
  },
  {
    title: "Software Engineer",
    company_name: "IT Test",
    icon: it_test,
    iconBg: "#000000",
    date: "Mar 2019 - Oct 2022",
    points: [
      `Launched internal order management system utilizing React.js and Node.js.`,
      `Developed robust, scalable, modular and API-centric infrastructures with GCP, AWS and GitHub Actions.`,
      `Updated old React.js code to modern development standards, improving functionality and performance.`,
      `Worked with project managers, developers, quality assurance and customers to create an employee training mobile application.`,
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "PYCO",
    icon: pyco,
    iconBg: "#FAF9F6",
    date: "Aug 2016 - Feb 2019",
    points: [
      `Developed software components in JavaScript based on functional requirements and specifications.`,
      `Efficiently deployed and integrated software engineered by team and updated integration/deployment scripts to improve continuous integration practices.`,
      `Defined feature sets into well-scoped user stories for individual team members based on MVP requirements.`,
      `Wrote technical documentation to support the maintenance team.`,
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#FAF9F6",
    date: "Dec 2015 - Jul 2016",
    points: [
      `Assisted in maintenance of software for advertising platform.`,
      `Documented and tested new web applications in JavaScript.`,
      `Performed competitor research to fuel new feature development.`,
      `Collaborated with members of software development team.`,
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Victor, as all the features, of a highly skilled, guide, mentor and professional in the web development world. his technical abilities, he always encouraged students to work on a independent way, and face the coding challenges head on",
    name: "Luís Miguel Lopes Santos",
    designation: "Software Engineer",
    company: "Symphony Solutions",
    image:avatar1
  },
  {
    testimonial:
      "I have no doubt that Victor would be a valuable asset to any team. He is a highly skilled, motivated, and dedicated individual with a passion for software development. I highly recommend him for any software development position.",
    name: "Keyur Vadodariya",
    designation: "Full Stack Developer",
    company: "IT TEST",
    image:avatar2
  },
  {
    testimonial:
      "Victor was a mentor and a guide who played a pivotal role in shaping our journey as Full Stack Web Developers. I am grateful for his impactful teaching style, support, and the valuable lessons that will undoubtedly resonate throughout my career.",
    name: "Lucia Mackova",
    designation: "Full Stack Developer",
    company: "PYCO",
    image:avatar3
  },
];

const projects = [
  {
    name: "React Native Project",
    description:
      `Mobile social coordination prototype built with React Native and Firebase. React Native's advantages include cross-platform development, performance and efficiency, code reusability, community support and flexibility, and live reloading features. These advantages make React Native a popular choice for mobile app development, especially in scenarios where time-to-market and code efficiency are crucial factors.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: react_native_project,
    source_code_link:
      `https://github.com/0129general/react_native_project.git`,
  },
  {
    name: "Exo Worlds Project",
    description:
      `ExoWorlds is a Sci-Fi NFT blockchain MMORPG built on the Elysium Blockchain. The MERN stack's advantages include a full JavaScript stack, MVC architecture, open-source components, unified language base, streamlined development, a comprehensive suite of tools, and cost-effectiveness. These advantages make the MERN stack a popular choice for modern web and mobile app development`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      }
    ],
    image: exoworlds_project,
    source_code_link:
      `https://exoworlds.io/`,
  },
  {
    name: "Spring Stack Project",
    description:
      `Java open source e-commerce software. The Spring Stack offers advantages such as container-based deployment, scalability options, extensive infrastructure support, testable code through dependency injection, comprehensive features, and simplified deployment, making it a popular choice for developers and applications.`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: spring_project,
    source_code_link:
      `https://github.com/0129general/java_spring_project.git`,
  },
];

const position = {
  developer: "Full Stack Developer",
  expert: "Java Spring Expert",
};
const personalInfo = {
  name: { first_name: "Victor", last_name: "Wang", full_name: "Victor Wang" },
  email: "joinforcompanygrowth@gmail.com",
};

const summery = `Dynamic and results-driven professional with a solid foundation in full-stack web development, backed by comprehensive expertise in Laravel, Vue.js, React.js, Angular.js, Node.js, MongoDB, Java Spring, and Java Spring Boot. Proven ability to design, develop, and deploy robust and scalable web applications, drawing on a strong command of modern programming languages and frameworks. Adept at collaborating with cross-functional teams to deliver high-quality, efficient, and innovative solutions that exceed client expectations. Seeking to leverage technical acumen and passion for cutting-edge technologies to drive impactful projects and contribute to the success of a forward-thinking organization.`;

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  position,
  personalInfo,
  summery,
};
