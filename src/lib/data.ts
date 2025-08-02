export const personalInfo = {
  name: "Antonio Arteaga",
  location: "Mexico City, Mexico",
  email: "cruz.antonio.a.e@gmail.com",
  github: "https://github.com/arteaga7",
  linkedin: "https://www.linkedin.com/in/antonioarteaga-datascientist/",
};

export const workExperience = [
  {
    company: "Ford Motor Company (ALTEN Group)",
    location: "Naucalpan, Estado de México",
    position: "HIL Test Intermediate Engineer",
    period: "Jan 2023 - Jul 2025",
    achievements: [
      "Create Python scripts to automate tests and save their respective evidence.",
      "Create machine learning models to automatically validate testing evidence (photos and videos).",
      "Design test cases implementing the ISTQB methodology.",
    ],
  },
  {
    company: "Inbiodroid",
    location: "Irapuato, Guanajuato",
    position: "Control and Software Embedded Engineer",
    period: "May 2021 - Jan 2023",
    achievements: [
      "Design and implement advanced robust controllers for humanoid robot components.",
      "Program embedded systems such as Teensy, ESP32, and Arduino.",
    ],
  },
  {
    company: "Tecnológico Nacional de México Campus Zitácuaro",
    location: "Zitácuaro, Michoacán",
    position: "Professor",
    period: "Jan 2023 - Mar 2023",
    achievements: [
      "Teach classes on: Differential, integral, and vectorial calculus; Analysis of alternating and direct current electrical circuits; Differential equations; Dynamics; Linear algebra; Research Workshop I-II; Modeling of dynamic systems; Robotics; Linear and nonlinear control.",
    ],
  },
];

export const education = [
  {
    institution: "TripleTen (Bootcamp Online)",
    location: "Remote",
    degree: "Data Scientist & Data Analyst Certification",
    period: "Jan 2025 - Aug 2025",
    achievements: [
      "President of the Department of Information Technology",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
  ],
  frontendDevelopment: [
    "ROS",
    "Reactjs",
  ],
  backendDevelopment: ["Nodejs", "Expressjs"],
  databaseAndStorage: ["PostgreSQL", "Drizzle (ORM)"],
  cloudAndDevOps: ["AWS"],
  toolsAndServices: [
    "Clerk (Auth)",

  ],
};

export const projects = [
  {
    title: "YouTube Channel: Robotica",
    github: "https://www.youtube.com/@robotica9066",
    description: [
      "Description: YouTube channel about advanced mathematics, mechatronics, control, and robotics.",
      "Technologies Used: Python, ROS, Gazebo Simulator, Matlab/Simulink, C/C++.",
      "Key Responsibilities: Creation of the YouTube Channel with 38 videos.",
      "Impact/Achievements: 935 subscribers.",
    ],
  },
  {
    title: "Machine-Learning: Binary classifier",
    github: "https://github.com/arteaga7/Machine-Learning",
    description: [
      "This project analyzes the dataset of 10000 electric grids with 12 features.",
      "Objective: To determine if the electric stability of the grid is stable (class 1) or inestable (class 0). This is, the binary classification problem is adressed in this document.",
      "First, the exploratory data analysis (EDA) is performed to show the data features in the non-cleaned dataset.",
      "Second, the data preprocessing is performed, which consist of filling null values and dropping duplicates, processing outliers and multicollinearity, converting categorical variables into binary ones and scaling the data.",
      "Third, the training and validation of the performance of 4 different ML algorithms are compared to solve the binary classification problem. The ML models are: Logistic Regression, Decision Tree Classifier, Random Forest Classifier, Gradient Boosting Classifier.",
      "Finally, the best algorithim is selected for this particular dataset.",
    ],
  },
  {
    title: "Machine-Learning: Multi-class classifier",
    github: "https://github.com/arteaga7/Machine-Learning",
    description: [
      "This project studies the dataset of 1800 data matrices (small pictures representing a digit) with 64 features.",
      "Objective: To solve the multi-class classification problem, which consist of determining what category the digit belongs to. There are 10 categories, corresponding to every digit (from 0 to 9).",
      "The dataset is imported from the sklearn library, hence, the exploratory data analysis (EDA) is ommited. Then, the performance of 3 different ML algorithms are compared: KNeighborsClassifier, SVC, GaussianNB.",
      "Finally, the best algorithim is selected for this particular dataset.",
    ],
  },
  {
    title: "Machine-Learning: Regressor",
    github: "https://github.com/arteaga7/Machine-Learning",
    description: [
      "This projects analyzes the dataset of cars with 7 features (weight, acceleration, origin, engine power, number of cylinders, year and engine displacement).",
      "First, the exploratory data analysis (EDA) is performed to show the content of the raw dataset.",
      "Second, the data preprocessing is performed, which consist of filling null values and dropping duplicates, processing outliers and multicollinearity, converting categorical variables into binary ones and standarizating the data.",
      "Third, the training and validation of the performance of 5 different ML algorithms are compared. The ML models are: Lasso (Linear regression with L1 regularization), Ridge (Linear regression with L2 regularization), DecisionTreeRegressor, RandomForestRegressor and GradientBoostingRegressor.",
      "Finally, the best algorithim is selected for this particular dataset.",
    ],
  },
];

export const awards = [
  {
    name: "ANA Avatar XPRIZE global competition",
    issuer: "ANA Avatar XPRIZE",
    date: "Nov 2023",
    type: "International",
    position: "7-th Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  
];
