/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adam's Portfolio",
  description:
    "A passionate Full Stack Developer, Graphic Designer, and Instructor who thrives on building end-to-end products that create sustainable and scalable social and technical systems, combining technical expertise, creative design, and teaching to make a meaningful impact.",
  og: {
    title: "Adam Zaier Portfolio",
    type: "website",
    url: "http://adamzaier.me/",
  },
};

//Home Page
const greeting = {
  title: "Adam Zaier",
  logo_name: "AdamZaier",
  nickname: "Vantadam",
  subTitle:
    "A passionate Full Stack Developer, Graphic Designer, and Instructor who thrives on building end-to-end products that create sustainable and scalable social and technical systems, combining technical expertise, creative design, and teaching to make a meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1a2e3QT7gUfJ94gVv9vpMorG323fYjYaL/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/vantadam",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vantadam",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adam-zaier/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:adem.zaier.9@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/eyinzee/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vant.adam/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and Angular",
        "⚡ Developing mobile applications using Flutter, React Native and Ionic",
        "⚡ Creating application backend in Node, Express, Nest & Flask",
        "⚡ Managing database using MongoDB, MySQL & Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#c3002f",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Ionic",
          fontAwesomeClassname: "simple-icons:ionic",
          style: {
            color: "#498AFF",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },

        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#00000",
          },
        },
        {
          skillName: "MongoDb",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#4DB33D",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758f",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#f6820d",
          },
        },
      ],
    },
    {
      title: "AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning use cases",
        "⚡ Experience of working with Computer Vision projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Graphic Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Crafting visually compelling brand identities that resonate with target audiences",
        "⚡ Designing custom logos from scratch and refining existing ones to perfection",
        "⚡ Developing marketing materials and digital art to enhance brand visibility and engagement",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#0000FF",
          },
        },

        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Krita",
          fontAwesomeClassname: "simple-icons:krita",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "TEK-UP University",
      subtitle: "Engineering Degree in Computer Science",
      logo_path: "Tekup.png",
      alt_name: "TEK-UP University",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Studied advanced topics such as Design Patterns, Cloud Computing, DevOps, Agile Methods, and advanced Web and Mobile Development.",
        "⚡ Gained hands-on experience with multiple frameworks and tools to develop scalable and efficient software solutions.",
        "⚡ Completed specialized courses in Full Stack Development, Machine Learning, Big Data ... to further enhance technical expertise.",
      ],
      website_link: "https://tek-up.de/",
    },
    {
      title: "Higher Institute of Computer Science Mahdia",
      subtitle: "Bachelor's Degree in Computer Science",
      logo_path: "isima.png",
      alt_name: "Higher Institute of Computer Science Mahdia",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Studied core software engineering subjects such as Logic, Algorithms, Data Structures, Object-Oriented Programming (OOP), UML, and Databases.",
        "⚡ Learned foundational concepts in Big Data, Virtualization, Network Engineering, and Multimedia, including 3D modeling and graphic design projects.",
        "⚡ Acquired practical knowledge in Web and Mobile Development, exploring various technologies and frameworks.",
      ],
      website_link: "https://isima.rnu.tn/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked on various projects across web and mobile development, graphic design, and customer experience. My roles have involved building apps, designing user-friendly interfaces, and managing customer needs. I have also been active in community engagement and leadership roles in technology-focused clubs and events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Development Instructor",
          company: "GoMyCode",
          company_url: "https://gomycode.com/",
          logo_path: "gomycode.png",
          location: "Tunis",
          duration: "February 2023 - Present",
          description:
            "Taught essential and advanced web development skills to students, including HTML, CSS, JavaScript, advanced CSS, DOM manipulation, Git, GitHub, and web fundamentals like APIs and protocols. Focused on building strong foundations and practical projects for real-world applications.",
          color: "#FF5733",
        },
        {
          title: "Python Instructor",
          company: "GoMyCode",
          company_url: "https://gomycode.com/",
          logo_path: "gomycode.png",
          location: "Tunis",
          duration: "February 2023 - Present",
          description:
            "Conducted Python courses covering Python basics, data structures, object-oriented programming (OOP), exception handling, web scraping, and data analysis with Pandas and NumPy. Helped students apply their knowledge to solve complex problems and work on impactful projects.",
          color: "#33C1FF",
        },
        {
          title: "Graphic Design Instructor",
          company: "GoMyCode",
          company_url: "https://gomycode.com/",
          logo_path: "gomycode.png",
          location: "Tunis",
          duration: "February 2023 - Present",
          description:
            "Delivered training in graphic design, including Photoshop, Illustrator, typography, color theory, animation, logo design, brand guidelines, and creating mockups. Focused on teaching students the principles of effective design and fostering creativity.",
          color: "#FFC300",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development",
          company: "Seekmake",
          company_url: "https://seekmake.com",
          logo_path: "seekmake.png",
          duration: "July 2024 - September 2024",
          location: "Remote",
          description:
            "Frontend development using Angular and backend development using Nest.",
          color: "#000000",
        },
        {
          title: "Mobile Developer",
          company: "Evacom",
          company_url: "https://evacom.info",
          logo_path: "evacom.png",
          duration: "February 2022 - June 2022",
          location: "Tunis",
          description:
            "Designed an online booking mobile app using Photoshop and Illustrator. Developed the app using React Native and integrated it into their ecosystem.",
          color: "#000000",
        },
        {
          title: "Graphic Designer",
          company: "L'Expert",
          company_url: "https://expert.com.tn",
          logo_path: "lexpert.png",
          duration: "July 2021",
          location: "Gabes",
          description:
            "Worked on graphic design, customer experience, and brand planning.",
          color: "#000000",
        },
        {
          title: "Designer and Video Editor",
          company: "Radio Elyssa FM",
          company_url: "https://elyssafm.tn",
          logo_path: "ellysa.jpg",
          duration: "August 2021",
          location: "Gabes",
          description:
            "Worked in the digital department on content creation, design, and video editing.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "President",
          company: "Microsoft Technologies Club Tek-Up",
          company_url: "",
          logo_path: "mtctek.jpg",
          duration: "2022 - 2023",
          location: "Tunis",
          description:
            "Founded and helped launch the club. Organized events and worked to foster a learning environment for students to explore Microsoft technologies.",
          color: "#0078D7",
        },
        {
          title: "Planning Department Team Leader",
          company: "NMTC v3.0 (National Microsoft Technologies Camp)",
          company_url: "",
          logo_path: "nmtc.jpg",
          duration: "2022 - 2023",
          location: "Sousse",
          description:
            "Responsible for leading my team to devise and execute the event's plan, ensuring smooth operations and engaging experiences for participants.",
          color: "#00A4EF",
        },
        {
          title: "Content Manager",
          company: "Microsoft ISIMa Club",
          company_url: "",
          logo_path: "mic.jpg",
          duration: "2021 - 2022",
          location: "Mahdia",
          description:
            "Created designs, managed content, and organized events to promote Microsoft technologies.",
          color: "#F25022",
        },
        {
          title: "Organizer",
          company: "Google Developer Student Clubs (DSC) ISIMa",
          company_url: "",
          logo_path: "gdsc.jpg",
          duration: "2020 - 2021",
          location: "Mahdia",
          description:
            "Part of the core team, contributing to video editing, design, collaboration management, and event organization.",
          color: "#4285F4",
        },
        {
          title: "Executive Member",
          company: "ADESS FSEG Mahdia",
          company_url: "",
          logo_path: "adess.png",
          duration: "2019 - 2020",
          location: "Mahdia",
          description:
            "Worked in the media department, contributing to content creation and supporting the organization's initiatives.",
          color: "#FF4500",
        },
        {
          title: "Debater",
          company: "Young Mediterranean Voices",
          company_url: "",
          logo_path: "youngmed.jpg",
          duration: "2016 - 2018",
          location: "Tunisia",
          description:
            "Participated in regional and national debate festivals and competitions, developing public speaking and argumentation skills.",
          color: "#9400D3",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const devprojHeader = {
  title: "Dev Projects",
  description: "Some of my fullstack projects",
  avatar_image_path: "projects_image.svg",
};
const designprojHeader = {
  title: "Design Projects",
  description: "Some of my design projects",
  avatar_image_path: "projects_image.svg",
};

const devproj = {
  data: [
    {
      id: "socialite",
      name: "Socialite",
      createdAt: "2024-12-25T00:00:00Z",
      description: "Modern Social media web app created with React and Nest",
      tech: "ReactJS, NestJS",
      url: "https://github.com/vantadam/Social-react-nest",
    },
    {
      id: "evamobile",
      name: "EvaMobile",
      createdAt: "2022-06-22T00:00:00Z",
      description:
        "Cross-platform Mobile application for booking flights and trips",
      tech: "React Native, Expo, Firebase",
      url: "https://github.com/vantadam/Evamobile",
    },
    {
      id: "leafai",
      name: "LeafAI",
      createdAt: "2025-01-13T00:00:00Z",
      description: "Plant disease detection API using Machine Learning",
      tech: "Python, Flask, Tenserflow, Pandas, Seaborn",
      url: "https://github.com/vantadam/LeafAi",
    },
  ],
};

const designproj = {
  data: [
    {
      id: "tektopia",
      name: "TEKTOPIA",
      createdAt: "2024",
      description:
        "designs for digital and Print and the whole brand guideline for the event",
      url:
        "https://drive.google.com/drive/folders/1dSLCStEIKjo7og_UcrByCeNPOYAAd4no?usp=sharing",
    },
    {
      id: "mic",
      name: "Microsoft ISIMa Club Marketing",
      createdAt: "2023",
      description:
        "social media designs animated videos for events and marketing campaigns",
      url:
        "https://drive.google.com/drive/folders/1SskslGgDF5PsRA3bbscnz6IZ-mkhI5kL?usp=sharing",
    },
    {
      id: "lanui",
      name: "La nuit de l'info at TEK-UP",
      createdAt: "2023",
      description:
        "Marketing campaing that includes videos, digital posts and prints",
      url:
        "https://drive.google.com/drive/folders/1Fj3IRZofDPB_gSBZVtxXsQRgQcZdEP29?usp=sharing",
    },
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "I am available on most social media platforms. Feel free to message me, and I’ll respond within 24 hours. I can assist you with web and mobile development, Artificial Intelligence and graphic design.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  devproj,
  devprojHeader,
  designproj,
  designprojHeader,
};
