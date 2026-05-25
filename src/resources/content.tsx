import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shabad",
  lastName: "Vaswani",
  name: `Shabad Vaswani`,
  role: "Software Engineer",
  avatar: "/images/shabad-avatar.jpeg",
  email: "example@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about AI research, systems engineering, and what I'm building. Coming soon 🚀!</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shabadvaswani",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shabadvaswani",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/shabadvaswani",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.net/@shabadvaswani",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer and builder</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Shabad, a software engineer, I craft intuitive <br /> user experiences and <Text as="span" size="xl" weight="strong">Systems 🚀</Text>. After hours, I like building my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/shabadvaswani",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Shabad, a New York-based engineer with a passion for transforming complex challenges
        into simple, elegant engineering solutions. My work spans through Systems, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IAppSolutions",
        timeframe: "September 2025 - December 2025",
        role: "Software Development Engineer Intern",
        achievements: [
          <>
            Built a serverless unified API platform on Google Cloud Platform (GCP) using Cloud Run, ensuring scalable video generation across multiple AI providers (Veo, Sora, Kling).
          </>,
          <>
            Dockerized multi-agent Python applications (FastAPI) and implemented CI/CD workflows; managed container registries and orchestrated deployments to ensure consistent production environments.
          </>,
          <>
            Implemented JWT authentication and integrated GCP Secret Manager to securely rotate and manage API credentials for user-specific infrastructure.
          </>,
        ],
        images: [],
      },
      {
        company: "Tiny Archives",
        timeframe: "June 2025 - August 2025",
        role: "Software Development Intern",
        achievements: [
          <>
            Contributed to FACTool through structured PR workflow: wrote comprehensive PR descriptions, participated in code reviews, and tracked issues to maintain code quality standards.
          </>,
          <>
            Developed and maintained features in Django and React stack, including PDF and HTML export of metadata-rich content.
          </>,
        ],
        images: [],
      },
      {
        company: "Arrow Company",
        timeframe: "January 2024 - May 2024",
        role: "Project Trainee",
        achievements: [
          <>
            Reduced manual financial tracking effort by 80% through automation of income, expense recording, and budget alerts.
          </>,
          <>
            Improved user engagement by 30% via interactive dashboards and real-time analytics using React.js.
          </>,
          <>
            Achieved 99.9% uptime and low-latency user experience by deploying frontend on Vercel and backend services on Render.
          </>,
        ],
        images: [],
      },
      {
        company: "IAppSolutions",
        timeframe: "January 2023 - May 2023",
        role: "Software Development Intern",
        achievements: [
          <>
            Integrated GPT-3 API into a SaaS customer support dashboard, automating ticket resolution suggestions and reducing average response time by 25%.
          </>,
          <>
            Engineered context-aware prompts to improve AI response accuracy for technical support queries, directly impacting customer satisfaction scores.
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
        name: "New York University",
        description: <>Master's in Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python & AI Tooling",
        description: (
          <>Building ML pipelines, integrating LLMs, and crafting automation scripts with Python and FastAPI.</>
        ),
        tags: [
          {
            name: "Cloud Run",
            icon: "rocket",
          },
        ],
        images: [],
      },
      {
        title: "React & Next.js",
        description: (
          <>Building scalable frontend applications and dashboards with modern React and Next.js.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts on AI, systems, and building...",
  description: `Writing on AI research, engineering deep-dives, and what ${person.name} has been exploring`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Building modern systems and experiences...",
  description: `Explore the projects and case studies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        title: "Develop GenAI Apps with Gemini and Streamlit",
        issuer: "Google",
        issuedAt: "May 2026",
        summary:
          "Skill badge for building generative AI applications with the Gemini API, Streamlit UIs, and Google Cloud–backed workflows.",
        link: "https://www.credly.com/badges/408bcb8e-8b79-46fb-a6bc-579df7c4f7eb/public_url",
        tags: ["Gemini", "Streamlit", "GenAI", "Google Cloud"],
      },
    ],
  },
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
