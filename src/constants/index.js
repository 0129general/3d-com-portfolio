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
    title: "Software Developer",
    company_name: "Abaut",
    icon: abaut,
    iconBg: "#ffffff",
    date: "May 2022 - Present",
    points: [
      "Achieved a 50% increase in product performance and scalability through optimization and code refactoring.",
      "Developed and Optimized Complex DS Algorithm for Labeling in Siteview Product.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked on Scalability & UX features for Siteview.",
    ],
  },
  {
    title: "Main Coding Instructor",
    company_name: "4Geeks Academy",
    icon: geeks,
    iconBg: "#000000",
    date: "Apr 2023 - Aug 2023",
    points: [
      "I was primarily tasked with instructing students in an extensive Full-Stack Developer Bootcamp.",
      "The curriculum focused on teaching coding in Python and Javascript, understanding REST APIs, constructing backend structures using Flask and Postgresql, and developing impressive web applications with React.",
      "My main role involved guiding students through these aspects to ensure a thorough understanding of the material.",
      "The emphasis was on providing a comprehensive education in full-stack development.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Lanet Team",
    icon: lanet,
    iconBg: "#FAF9F6",
    date: "Aug 2020 - Feb 2022",
    points: [
      "I specialized in React JS, React Native, and Node JS development. Utilized React Hooks, React Routers, and Redux for enhanced functionality",
      "Implemented strict lint checks with TypeScript in Node JS projects. Contributed to diverse, large-scale applications, including e-commerce and social media platforms",
      "Established professional workflows for React Native and Node JS development. Implemented CI/CD pipelines with tools like Travis and Github.",
      "Proficient in working with databases like MongoDB, MySQL, and Postgres. Experienced with Docker, AWS, GCP, and Firebase for efficient deployment and scalability in the cloud.",
    ],
  },
  {
    title: "Website & App Developer",
    company_name: "GPS Gangadhara",
    icon: gps,
    iconBg: "#FAF9F6",
    date: "May 2020 - Aug 2020",
    points: [
      "Developed a tailored website and application for a school during the COVID period.",
      "Created a basic online learning platform using HTML, JS (frontend), and PHP, SQL (backend).",
      "Led the design and implementation of graphic layouts and communication materials.",
      "Managed multimedia initiatives, producing educational videos and maintaining school web services.",
    ],
  },
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
