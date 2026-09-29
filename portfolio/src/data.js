// Edit this file to update the portfolio content. Replace "#" links with real URLs.
export const profile = {
  name: 'Umamaheswari A',
  headline: 'Software Engineer | AI & Full Stack Developer',
  sub: 'Building AI-powered applications, scalable web solutions, and automation systems using Java, Python, React, FastAPI, and modern AI technologies.',
  email: 'umamaheswaribtech06@gmail.com',
  phone: '+91 78240 47887',
  location: 'Salem, Tamil Nadu',
  github: 'https://github.com/umahh06',
  githubUser: 'umahh06',
  linkedin: 'https://in.linkedin.com/in/umamaheswari-btech06',
  resume: '/Umamaheswari_A_Resume.pdf',
}
export const stats = [
  ['2', 'Internships completed'], ['4', 'Projects built'],
  ['Java', 'LIVEWIRE certified'], ['National', 'Hackathon prize winner'],
]
export const about = [
  "I'm a final-year B.Tech student in Artificial Intelligence & Data Science at Knowledge Institute of Technology. Over the last year I've split my time between two internships and building projects that I could actually run and test.",
  "At Punchbiz AI Solutions I built a machine learning system that predicts cow heat cycles, with a React and Flask dashboard on MongoDB Atlas. At L&T Construction I worked on full-stack web applications and data dashboards for business reporting.",
  "I'm aiming for roles in AI engineering, full-stack development, software testing or data analytics. I like problems where a working system has to come out at the end, and I'm currently learning RAG and AI agents by building small applications with them.",
]
export const stack = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['FastAPI', 'Flask', 'REST APIs'],
  Programming: ['Java', 'Python', 'C', 'SQL'],
  Testing: ['Selenium WebDriver', 'TestNG', 'Maven', 'Jenkins', 'Cucumber'],
  'AI / ML': ['Scikit-learn', 'TensorFlow', 'NLP', 'Pandas', 'NumPy'],
  'AI Engineering (learning)': ['LLM Applications', 'Prompt Engineering', 'RAG Fundamentals', 'AI Agents Fundamentals', 'Vector Databases', 'Embeddings'],
  Data: ['Power BI', 'Tableau', 'Excel', 'MongoDB', 'MySQL'],
}
export const experience = [
  { role: 'Full Stack Intern', org: 'L&T Construction – Digital Team', when: 'June 2026 – September 2026',
    certificateUrl: '/Certificates/LT_Internship_Certificate_Umamaheswari.pdf',
    points: ['Built responsive full-stack web applications and interactive dashboards for data visualization and business reporting.',
      'Integrated frontend applications with REST APIs and databases while working through development, testing and deployment.',
      'Worked with Power BI dashboards, Power Automate workflows and Microsoft SQL for analysis and reporting.'] },
  { role: 'AI Solutions Intern', org: 'Punchbiz', when: 'September 2025 – April 2026',
    certificateUrl: '/Certificates/Ms.Umamaheswari%20A_Punchbiz_Letter_Sep_25.pdf',
    points: ['Built an AI system that predicts cow heat cycles to support farmer breeding decisions, using machine learning models.',
      'Developed a React and Flask dashboard integrated with MongoDB Atlas for data storage and real-time alerts.',
      'Designed and consumed REST APIs between the ML service, database and frontend.'] },
]
export const projects = [
  { name: 'SnapSpend AI', tag: 'AI + Full Stack', tech: ['React', 'FastAPI', 'MongoDB Atlas', 'JWT', 'NLP'], github: 'https://github.com/umahh06/Snapspend_AI',
    problem: 'Tracking expenses in spreadsheets is tedious, and most people never review where their money goes.',
    solution: 'A personal finance assistant where users log expenses in plain language, get transactions categorized, set budgets and ask questions about their spending.',
    challenges: 'Turning free-text messages into structured transactions, and keeping the chat responses consistent with the stored data.' },
  { name: 'Facial Lie Detection', tag: 'Computer Vision', tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'], github: 'https://github.com/umahh06/facial-lie-detection',
    problem: 'Recognizing useful facial signals in real time is difficult because expressions are subtle and change quickly.',
    solution: 'A computer-vision project that analyzes facial cues in real time to explore machine-learning-assisted lie detection.',
    challenges: 'Turning live visual signals into a consistent detection workflow while accounting for changes in lighting, movement, and facial expression.' },
  { name: 'Intelligent Student Performance Prediction', tag: 'AI / ML', tech: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI'], github: 'https://github.com/umahh06/IntelligentStudentPerformance',
    problem: 'Struggling students are usually identified after results are out, when it is too late to help.',
    solution: 'A model that predicts performance from academic indicators and flags students at early risk, served through a FastAPI endpoint.',
    challenges: 'Comparing classical models against a neural network and avoiding overfitting on a small dataset.' },
  { name: 'OrangeHRM Test Automation Framework', tag: 'Software Testing', tech: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'Surefire'], github: 'https://github.com/umahh06/OrangeHRM_Automation',
    problem: 'Repeating regression checks on an HR application by hand is slow and easy to get wrong.',
    solution: 'A Selenium framework in Java that automates 14 test cases on a live HRM application, run through Maven with TestNG and Surefire reports.',
    challenges: 'Handling dynamic elements and waits so tests stay stable, and keeping page logic separate from test logic.' },
]
export const learning = [
  ['AI Agents', 'Building autonomous workflows using LLM-powered agents.'],
  ['RAG Systems', 'Retrieval-Augmented Generation using vector databases and semantic search.'],
  ['LLM Applications', 'Prompt engineering, chatbot systems and AI assistants.'],
  ['NLP Projects', 'Intent recognition, text processing and conversational AI.'],
]
export const achievements = [
  ['1st Prize', 'Paper presentation on Natural Language Processing'],
  ['3rd Prize', '24-Hour Women\u2019s Hackathon'],
  ['Participant', 'National Level IEEE Conference'],
]
export const certs = [
  { title: 'Java Programming', issuer: 'LIVEWIRE Salem', url: '/Certificates/Course_on_JAVA_Umamaheswari.pdf' },
]
export const testTree = `orangehrm-automation/
├── pom.xml
├── testng.xml
└── src/
    ├── main/java/pages/     (page objects)
    └── test/java/tests/     (14 TestNG test cases)
target/surefire-reports/     (HTML reports)`
