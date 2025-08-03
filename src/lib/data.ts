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
    degree: "Data Scientist & Data Analyst Certificate",
    period: "Jan 2025 - Aug 2025",
    achievements: [
      "Machine Learning models.",
      "Visualizations and storytelling.",
      "Data cleaning."
    ],
  },
  {
    institution: "Centro de Investigación y de Estudios Avanzados del IPN",
    location: "Ciudad de México, México",
    degree: "Ph. D. in Electrical Engineering: Mechatronics",
    period: "Sep 2018 - Dec 2024",
    achievements: [
      "Published paper: C.A. Arteaga-Escamilla, R. Castro-Linares and J. Álvarez-Gallegos. Trajectory Tracking of Multiple Quadrotors While Maintaining Time-Varying Spatial Formations Via Synchronization. Latin American Symposium on Industrial and Robotic Systems. Springer, Cham. September 2019.",
    ],
  },
  {
    institution: "Centro de Investigación y de Estudios Avanzados del IPN",
    location: "Ciudad de México, México",
    degree: "Master’s Degree in Electrical Engineering: Mechatronics",
    period: "Sep 2013 - Feb 2016",
    achievements: [
      "Thesis: Modelado, simulación y control robusto de un robot tipo diferencial con carga no uniformemente distribuida.",
    ],
  },
  {
    institution: "Tecnológico Nacional de México Campus Ciudad Hidalgo",
    location: "Ciudad Hidalgo, Michoacán",
    degree: "Bachelor’s Degree in Mechatronics Engineering",
    period: "Aug 2008 - Sep 2013",
    achievements: [
      "Thesis: Diseño y control de una máquina-herramienta de dimensiones reducidas.",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python: Pandas, OpenCV, NumPy, Matplotlib, Seaborn, SciPy, Scikit-learn, TensorFlow, Keras, PyTorch",
    "C/C++","ROS",
  ],
  databaseAndCloud: ["PostgreSQL", "AWS"],
  otherTools: ["GitHub", "Linux", "Tableau", "Jira"],
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
    title: "Prediction of subscription cancelation and plan recommendation for Smart Fit: A Machine-Learning Solution",
    github: "https://github.com/arteaga7/Project13",
    description: [
      "This project analyzes the information of users in a gym (gender, location, group visits, age, lifetime, average additional charges, average class frecuency, etc.) to train machine learning models to make some predictions and clustering.",
      "Objective: To predict if users will cancel their subscription next month and to group customers with similar characteristics to design personalized strategies for each customer type.",
      "First, the exploratory data analysis (EDA) is performed to show the data features in the non-cleaned dataset.",
      "Second, the data preprocessing is made, which consist of filling null values, dropping duplicates, verifying if data format is correct and processing the outliers.",
      "Third, to create data from the previously cleaned one.",
      "Fourth, to determine whether there is multiple collinearity in the data and any outliers that could pertur the training of the machine learning (ML) algorithms. Three different models will be built: LogisticRegression and RandomForestClassifier to predict if users will cancel their subscription next month; for clustering, KMeans to group customers with similar characteristics to design personalized strategies for each customer type. The performance of the first two algorithms is evaluated using the metrics 'accuracy', 'precision', 'recall' and using the 'silhouette value' for the 'K-means' algorithm.",
      "Finally, conclusions are presented.",
    ],
  },
  {
    title: "Prediction of stability in electric grids in New York: A Machine-Learning Solution",
    github: "https://github.com/arteaga7/ML-Binary-Classifier",
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
    title: "Automatic classification of digits using Python and Machine-Learning",
    github: "https://github.com/arteaga7/ML-Multi-class-Classifier",
    description: [
      "This project studies the dataset of 1800 data matrices (small pictures representing a digit) with 64 features.",
      "Objective: To solve the multi-class classification problem, which consist of determining what category the digit belongs to. There are 10 categories, corresponding to every digit (from 0 to 9).",
      "The dataset is imported from the sklearn library, hence, the exploratory data analysis (EDA) is ommited. Then, the performance of 3 different ML algorithms are compared: KNeighborsClassifier, SVC, GaussianNB.",
      "Finally, the best algorithim is selected for this particular dataset.",
    ],
  },
  {
    title: "Estimation of fuel consumption in cars of London: A Machine-Learning Solution",
    github: "https://github.com/arteaga7/ML-Regressor",
    description: [
      "This projects analyzes the dataset of cars with 7 features (weight, acceleration, origin, engine power, number of cylinders, year and engine displacement).",
      "Objective: To predict the fuel consumption of the car. This is, the regression problem (to predict the value of a continuous variable) is adressed in this document.",
      "First, the exploratory data analysis (EDA) is performed to show the content of the raw dataset.",
      "Second, the data preprocessing is performed, which consist of filling null values and dropping duplicates, processing outliers and multicollinearity, converting categorical variables into binary ones and standarizating the data.",
      "Third, the training and validation of the performance of 5 different ML algorithms are compared. The ML models are: Lasso (Linear regression with L1 regularization), Ridge (Linear regression with L2 regularization), DecisionTreeRegressor, RandomForestRegressor and GradientBoostingRegressor.",
      "Finally, the best algorithim is selected for this particular dataset.",
    ],
  },
  {
    title: "The most sold video games from 1980 to 2015: Data Analysis and hypothesis test",
    github: "https://github.com/arteaga7/Project6",
    description: [
      "This project analyzes the information of many different video games of the last 35 years. The dataset contains more than 16500 rows and 11 columns. Visualizations and hypotheses tests are performed.",
      "Objective: To make an extensive data cleaning to perform hypotheses tests (Levene and T tests) to make decisions.",
      "First, the exploratory data analysis (EDA) is performed to show the data in the non-cleaned datasets.",
      "Second, the data preprocessing is made, which consist of changing the column names, filling null values, dropping duplicates, verifying if data format is correct and processing the outliers.",
      "Third, the formal Levene and T tests are performed to determine if the following hypotheses are true: 1)Users mean score of Xbox One = Users mean score of PC and 2)Users mean score of action games = Users mean score of sport games.",
      "Finally, some conclusions are given.",
    ],
  },
  {
    title: "Return On Marketing Investment (ROMI) analysis of sales in the Uber web site",
    github: "https://github.com/arteaga7/Project9",
    description: [
      "This project analyzes the information of 360000 clients about their visits and buys in the Uber web site.",
      "Objective: To make the Return On Marketing Investment (ROMI) analysis to determine how much revenue a marketing campaign is generating compared to the cost of running that campaign.",
      "First, the exploratory data analysis (EDA) is performed to show the data in the non-cleaned datasets.",
      "Second, the data preprocessing is made, which consist of filling null values, dropping duplicates, verifying if data format is correct and processing the outliers.",
      "Third, to create data from the previously cleaned one.",
      "Fourth, the Lifetime Value (LTV), the Client Acquisition Cost (CAC) and the ROMI analysis are made. The Lifetime Value to Cost of Acquisition (LTV/CAC) Ratio tells if the theoretical lifetime revenue you get from a customer is higher or lower than the sales and marketing costs needed to acquire that customer.",
      "Finally, some conclusions are given.",
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
    name: "Siemens Global Calendar 2011 & 2012",
    issuer: "Siemens",
    date: "2011 & 2012",
    type: "International",
    position: "Honorific Mention",
  },
  
];
