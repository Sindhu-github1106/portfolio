import { InlineCode } from "@/once-ui/components";

// Add this audio player component at the top of your file
const VinylPlayer = () => {
  if (typeof window !== 'undefined') {
    const audio = new Audio('/sounds/vinyl-scratch.mp3'); // You'll need to add this sound file
    audio.volume = 0.3; // Lower volume so it's not too intrusive
    audio.play().catch(e => console.log("Auto-play prevented:", e));
  }
  return null;
};

const person = {
  firstName: "V. S. S.",
  lastName: "Sindhu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SWE & Designer",
  avatar: "/images/giphy.gif",
  avatarClickable: true,
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sindhu-github1106",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/sai-sindhu-rachapudi-50a51426a/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sindhu.rvsssb@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>SWE & Designer</>,
  subline: (
    <>
      I'm Sindhu, a CS student at <InlineCode>IIIT Delhi</InlineCode>, Welcome to my
      <br /> portfolio. It's nice to meet you.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science and Design student skilled in Python, Java, and C++ with a focus on AI, machine
        learning, and data-driven decision-making. I've applied my expertise to projects like interactive simulations
        and web applications. I can also solve a rubik's cube in less than a minute .
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company: "Angry Birds",
        timeframe: "Aug,24 to Nov,24",
        role: " Self-Directed",
        achievements: [
          <>
            Developed a 2D physics-based game using Java, libGDX, and Gradle with interactive sprites and collision
            mechanics.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Astronomy Application",
        timeframe: "Jan,23 to Feb,23",
        role: " Guide: Mrs. Leena Kurian",
        achievements: [
          <>
            Developed an interactive solar system simulation with elliptical orbit visuals, educational content, and
            database management using Tkinter and MySQL.
          </>,
        ],
        images: [],
      },
      {
        company: "Self Driving Robot",
        timeframe: "Apr,22 to Jun,22",
        role: " Guide: Mrs. Leena Kurian",
        achievements: [
          <>
            Designed an autonomous robotic vehicle for parkour navigation using Python and Scratch GUIs. Achieved
            4th place at the World Robotics Olympiad Nationals 2022.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indraprastha Institute of Information Technology, Delhi",
        description: <>Currently Majoring in Computer Science and Design.</>,
      },
      {
        name: "Abu Dhabi Indian School",
        description: <>High school Diploma.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Certifications",
    skills: [
      {
        title: " Massachusetts Institute of Technology",
        description: <>Data Science and Machine Learning: Making Data-Driven Decisions. May, 2023</>,
        // optional: leave the array empty if you don't want to display images
        
      },
      {
        title: " National Institute of Technology Warangal",
        description: <> Artificial Intelligence Machine Learning and Deep Learning Applications. Dec, 2022</>,
        // optional: leave the array empty if you don't want to display images
        
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Journaling about me...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
