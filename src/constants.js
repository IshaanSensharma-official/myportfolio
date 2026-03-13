    // Skills Section Logo's
    import htmlLogo from './assets/tech_logo/html.png';
    import cssLogo from './assets/tech_logo/css.png';
    import sassLogo from './assets/tech_logo/sass.png';
    import javascriptLogo from './assets/tech_logo/javascript.png';
    import reactjsLogo from './assets/tech_logo/reactjs.png';
    import angularLogo from './assets/tech_logo/angular.png';
    import reduxLogo from './assets/tech_logo/redux.png';
    import nextjsLogo from './assets/tech_logo/nextjs.png';
    import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
    import gsapLogo from './assets/tech_logo/gsap.png';
    import materialuiLogo from './assets/tech_logo/materialui.png';
    import bootstrapLogo from './assets/tech_logo/bootstrap.png';
    import springbootLogo from './assets/tech_logo/springboot.png';
    import nodejsLogo from './assets/tech_logo/nodejs.png';
    import expressjsLogo from './assets/tech_logo/express.png';
    import mysqlLogo from './assets/tech_logo/mysql.png';
    import mongodbLogo from './assets/tech_logo/mongodb.png';
    import firebaseLogo from './assets/tech_logo/firebase.png';
    import cLogo from './assets/tech_logo/c.png';
    import cppLogo from './assets/tech_logo/cpp.png';
    import javaLogo from './assets/tech_logo/java.png';
    import pythonLogo from './assets/tech_logo/python.png';
    import typescriptLogo from './assets/tech_logo/typescript.png';
    import gitLogo from './assets/tech_logo/git.png';
    import githubLogo from './assets/tech_logo/github.png';
    import vscodeLogo from './assets/tech_logo/vscode.png';
    import postmanLogo from './assets/tech_logo/postman.png';
    import mcLogo from './assets/tech_logo/mc.png';
    import figmaLogo from './assets/tech_logo/figma.png';
    import netlifyLogo from './assets/tech_logo/netlify.png';
    import vercelLogo from './assets/tech_logo/vercel.png';
    import postgreLogo from './assets/tech_logo/postgre.png';
    import csharpLogo from './assets/tech_logo/csharp.png';
    import langchainLogo from './assets/tech_logo/langchain.png';
    import tensorflowLogo from './assets/tech_logo/tensorflow.jpg';
    import scikitlearnLogo from './assets/tech_logo/scikitlearn.png';
    import pytorchLogo from './assets/tech_logo/pytorch.png';
    import kerasLogo from './assets/tech_logo/keras.png';
    import numpyLogo from './assets/tech_logo/numpy.png';
    import seabornLogo from './assets/tech_logo/seaborn.png';
    import mlflowLogo from './assets/tech_logo/mlflow.png';
    import awsLogo from './assets/tech_logo/aws.jpg';
    import dockerLogo from './assets/tech_logo/docker.png';
    import jenkinsLogo from './assets/tech_logo/jenkins.png';
    import pandasLogo from './assets/tech_logo/pandas.png';
    import ollamaLogo from './assets/tech_logo/ollama.jpg';
    import huggingfaceLogo from './assets/tech_logo/huggingface.jpg';
    import onnxLogo from './assets/tech_logo/onnx.png';
    import drupalLogo from './assets/tech_logo/Drupal.png';

    // Experience Section Logo's
    import coeetLogo from './assets/company_logo/coeet.png';

    // Education Section Logo's
    import nuLogo from './assets/education_logo/NU.png';
    import stmarysLogo from './assets/education_logo/StMary.jpg';
    import nbcsLogo from './assets/education_logo/NBCS.jpg';

    // Project Section Logo's
    import ResumeBuilderLogo from './assets/work_logo/resume_builder.png';
    import ContactsOrganizerLogo from './assets/work_logo/contacts-organizer.png';
    import StockMarketPredictorLogo from './assets/work_logo/Stock_Price.png';

    export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Next JS', logo: nextjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
        { name: 'Node JS', logo: nodejsLogo },
        { name: 'Express JS', logo: expressjsLogo },
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'Firebase', logo: firebaseLogo },
        { name: 'PostgreSQL', logo: postgreLogo },
        { name: 'Drupal', logo: drupalLogo},
        ],
    },
    {
        title: 'Languages',
        skills: [
        { name: 'Java', logo: javaLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
        { name: 'Git', logo: gitLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'VS Code', logo: vscodeLogo },
        { name: 'Postman', logo: postmanLogo },
        { name: 'Compass', logo: mcLogo },
        { name: 'Vercel', logo: vercelLogo },
        { name: 'Netlify', logo: netlifyLogo },
        { name: 'Figma', logo: figmaLogo },
        ],
    },
    {
        title: 'AI / ML',
        skills: [
            {name: 'Langchain', logo: langchainLogo},
            {name: 'Scikit-learn', logo: scikitlearnLogo},
            {name: 'PyTorch', logo: pytorchLogo},
            {name: 'Tensorflow', logo: tensorflowLogo},
            {name: 'Keras', logo: kerasLogo},
            { name: 'Ollama', logo: ollamaLogo },
            { name: 'Huggingface', logo: huggingfaceLogo },
        ],
    },
    {
        title: 'Data Visualization and Analysis',
        skills: [
            { name: 'NumPy', logo: numpyLogo },
            { name: 'Seaborn', logo: seabornLogo },
            { name: 'Pandas', logo: pandasLogo},
        ],
    },
    {
        title: 'Cloud Services and Related Frameworks',
        skills: [
            { name: 'AWS', logo: awsLogo },
            { name: 'Docker', logo: dockerLogo },
            { name: 'Jenkins', logo: jenkinsLogo },
        ],
    },
    ];

    export const experiences = [
        {
        id: 0,
        img: coeetLogo,
        role: "Learning Assistant",
        company: "CoEET (Center of Excellence in Educational Technology)",
        date: "January 2025 - May 2025",
        desc: "Developed a scalable custome Content Management System (CMS) tailored to CoEET's project management requirements. The primary objective was to create a structured digital repository that could systematically store and manage all project related files and data with easy retreival of information.",
        skills: [
            "Drupal",
            "Islandora",
            "DSpace",
            "Ubuntu",
        ],
        },
        {
        id: 1,
        img: coeetLogo,
        role: "Teaching Assistant",
        company: "CoEET (Center of Excellence in Educational Technology)",
        date: "August 2026 - January 2026",
        desc: "Contributed to designing scalable workspaces on Asana with the help of Asana API in Python to ensure proper and efficient handling of project workflow and information is maintained in the correct order with specific designated timings and deadlines. I alloted each team workspaces to upload files, project information etc.,",
        skills: [
            "Python",
            "Asana API",
        ],
        },
    ];
    
    export const education = [
        {
        id: 0,
        img: nuLogo,
        school: "NIIT University, Neemrana",
        date: "August 2023 - May 2027",
        grade: "-",
        desc: "I will be completing my Bachelor's degree (B. Tech) in Computer Science and Engineering (AI / ML Specialization) from NIIT University, Neemrana. During my time at NIIT, I gained a strong foundation in programming, AI /ML, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, AI, ML, Deep Learning, NLP, CV, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NIIT University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "B. Tech in Computer Science and Engineering",
        },
        {
        id: 1,
        img: stmarysLogo,
        school: "St. Mary's ICSE School, Navi Mumbai",
        date: "April 2007 - March 2021",
        grade: "-",
        desc: "I completed my schooling from St. Mary's ICSE School, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of base subjects and Computer Applications. From exploring MS Word and Powerpoint to jumping into Python and Java, I gained practical insights into the world of beginner coding. My time at St. Mary's  allowed me to gain foundational knowledge that applied theoretical concepts to practical implementation.",
        degree: "High School in St. Mary's ICSE School, Navi Mumbai",
        },
        {
        id: 2,
        img: nbcsLogo,
        school: "New Bombay City School, Navi Mumbai",
        date: "May 2021 - March 2023",
        grade: "-",
        desc: "I completed my class 12 education from New Bombay City School, Navi Mumbai, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "CBSE(XII) - PCM with Computer Science",
        },
    ];
    
    export const projects = [
        {
        id: 0,
        title: "AI Resume Builder",
        description:
            "resume. is a powerful free tool designed to help job seekers create professional ATS friendly resumes in minutes. With the assistance of Artificial Intelligence, my platform tailors your resume to specific job descriptions, optimizes content with relevant keywords, and highlights your achievements with quantifiable results.",
        image: ResumeBuilderLogo,
        tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "API"],
        github: "https://github.com/IshaanSensharma-official/resume_builder.git",
        webapp: "https://github.com/IshaanSensharma-official/resume_builder.git",
        },
        {
        id: 1,
        title: "Contacts Organizer",
        description:
            "A contact managing assistant that keeps track of Birth dates, age, special dates, events and contact details of people having special importance in our users lives. This app keeps track of all those details and prevents the users from long tedious manual labour to search through the required person's person's details by just keeping everything at the touch of a finger.",
        image: ContactsOrganizerLogo,
        tags: ["JavaScript", "Next JS", "Tailwind CSS"],
        github: "https://github.com/IshaanSensharma-official/contacts-organizer.git",
        webapp: "https://github.com/IshaanSensharma-official/contacts-organizer.git",
        },
        {
        id: 2,
        title: "Stock Market Price Predictor",
        description:
            "This project implements a stacked LSTM neural network to predict stock prices using real-time data fetched from Yahoo Finance. What sets it apart is its multi-layered architecture with progressively increasing dropout rates (20-50%) specifically designed to prevent overfitting while capturing complex temporal patterns. The model automatically downloads 10 years of historical data for any valid ticker, processes it with MinMax scaling, and generates comprehensive visualizations including moving averages and prediction comparisons—all built as an educational tool to demonstrate deep learning's application to time series forecasting.",
        image: StockMarketPredictorLogo,
        tags: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
        github: "https://github.com/IshaanSensharma-official/Stock-Price-Prediction",
        webapp: "https://github.com/IshaanSensharma-official/Stock-Price-Prediction",
        },
    ];  
