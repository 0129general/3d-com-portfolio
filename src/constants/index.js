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
  carrent,
  jobit,
  tripguide,
  threejs,
  abaut,
  geeks,
  gps,
  lanet,
  angular,
  flask,
  python,
  chatgpt,
  spplstm,
  geeksacademy,
  icr,
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
    icon: abaut,
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
    icon: geeks,
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
    icon: gps,
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
    icon: gps,
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
    designation: "Electrical Engineer",
    company: "eReM",
    image:
      "https://media.licdn.com/dms/image/D4D03AQEO1P7quIcbyg/profile-displayphoto-shrink_100_100/0/1683222236604?e=1710979200&v=beta&t=Azg5LCvfTo1FJrazWYxuBiXYgYW2mdvjKPsRp1RXHX8",
  },
  {
    testimonial:
      "I have no doubt that Victor would be a valuable asset to any team. He is a highly skilled, motivated, and dedicated individual with a passion for software development. I highly recommend him for any software development position.",
    name: "Keyur Vadodariya",
    designation: "Full Stack Developer",
    company: "La Net Team",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFFzcff-Vsnsg/profile-displayphoto-shrink_200_200/0/1695226357503?e=1710979200&v=beta&t=vu4xC8vs5rCpvXNI_scAHYUXGTT8SskT9PRS1YTChlI",
  },
  {
    testimonial:
      "Victor was a mentor and a guide who played a pivotal role in shaping our journey as Full Stack Web Developers. I am grateful for his impactful teaching style, support, and the valuable lessons that will undoubtedly resonate throughout my career.",
    name: "Lucia Mackova",
    designation: "Full Stack Developer",
    company: "Just Imagine",
    image:
      "https://media.licdn.com/dms/image/D4D35AQGCReQRV9Vpwg/profile-framedphoto-shrink_200_200/0/1697097930914?e=1705838400&v=beta&t=kwqV_q5iPmwhV09rKBh-dFRO6e24xEvAcEmgCE4Hslk",
  },
];

const projects = [
  {
    name: "Stock price prediction with LSTM",
    description:
      "Stock Price Prediction with LSTM (Long Short Term Memory) is a machine learning project that uses LSTM, a type of recurrent neural network, to predict stock prices. The model takes historical stock price data as input and outputs the predicted future prices. This project demonstrates the application of deep learning techniques in financial markets for making informed trading decisions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "LSTM",
        color: "green-text-gradient",
      },
      {
        name: "yfinance",
        color: "pink-text-gradient",
      },
    ],
    image: spplstm,
    source_code_link:
      "https://github.com/parth-ghinaiya/stock-price-prediction-with-lstm",
  },
  {
    name: "Full Stack Developer Course",
    description:
      "Full Stack Development Course with React, Flask, Python, and SQLAlchemy. This course is designed to teach you the fundamentals of full-stack development. You will learn how to build a REST API with Flask, a web framework for Python. You will also learn how to build a web application with React, a JavaScript library for building user interfaces. Finally, you will learn how to connect your web application to your REST API using SQLAlchemy, an object-relational mapper for Python.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "pink-text-gradient",
      },
    ],
    image: geeksacademy,
    source_code_link:
      "https://www.youtube.com/playlist?list=PLjMIC_h0rNV1GmEoxd_7C77CJlbv_sHun",
  },
  {
    name: "Image Classification Using Resnet-50",
    description:
      "Image Classification Using Resnet-50 is a machine learning project that uses Resnet-50, a type of convolutional neural network, to classify images. The model takes an image as input and outputs the predicted class of the image. This project demonstrates the application of deep learning techniques in computer vision for making informed decisions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "matlab",
        color: "green-text-gradient",
      },
      {
        name: "resnet-50",
        color: "pink-text-gradient",
      },
    ],
    image: icr,
    source_code_link:
      "https://github.com/VictorWang/image_classification_resnet50",
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
