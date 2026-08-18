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
        company: "Zendesk",
        timeframe: "August 2025 - Present | New York, USA",
        role: "Generative AI Engineer - AI Agents",
        achievements: [
          "Developed generative AI agents with LLMs, RAG, MCP, prompt engineering, tool calling, and context management, improving verified resolution rates by 12% across support conversations.",
          "Built knowledge workflows with embeddings, vector search, Elasticsearch, reranking, and retrieval pipelines, improving response relevance by 11% across customer interactions.",
          "Integrated generative procedures, API actions, MCP tools, LLM routing, and human handoffs, enabling 50+ AI agents to manage multi-step customer service requests.",
          "Created conversation workflows with structured outputs, memory, guardrails, and fallback handling, reducing unsupported or incomplete responses by 10%.",
          "Implemented GenAI inference services with Python, PyTorch, BentoML, Kubernetes, Docker, AWS, and LLM Proxy for reliable model deployment, routing, and scaling.",
          "Evaluated AI quality with Braintrust, MLflow, Datadog, CloudWatch, and custom suites covering resolution, relevance, latency, safety, cost, and regressions.",
        ],
        images: [],
      },
      {
        company: "S&P Global",
        timeframe: "March 2022 - May 2024 | Gujarat, India",
        role: "Machine Learning Engineer - Data Science & Engineering",
        achievements: [
          "Engineered a financial entity-resolution platform that improved entity-matching precision by 18% across high-volume financial data onboarding workflows.",
          "Developed hybrid NLP ranking models with PyTorch, Transformers, embeddings, semantic similarity, and gradient boosting, processing 2.4M records monthly and reaching 94% top-5 retrieval accuracy.",
          "Built distributed Python, PySpark, Spark, Azure Data Lake, and Databricks pipelines, reducing data-preparation time by 35% across 15M monthly records.",
          "Designed Dockerized REST inference services on Azure Kubernetes Service and PostgreSQL, achieving 120 ms p95 latency with production confidence scoring.",
          "Improved F1-score by 12% through evaluation, threshold tuning, candidate-retrieval optimization, error analysis, and model calibration.",
          "Operationalized training, inference, versioning, monitoring, drift detection, and retraining with Azure Machine Learning for entity intelligence services spanning 70M companies.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "New York University",
        description: "Master of Science in Computer Engineering, Merit Scholarship.",
      },
      {
        name: "Ganpat University",
        description: "Bachelor of Technology in Computer Engineering.",
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

const papershelf = {
  path: "/papershelf",
  label: "Papershelf",
  title: "Papershelf",
  description:
    "Research papers that shape how I think about AI, systems, and software engineering.",
};

const bookshelf = {
  path: "/bookshelf",
  label: "Bookshelf",
  title: "Bookshelf",
  description: "Books that have influenced how I build, learn, and solve problems.",
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
        title: "Environment Administrator",
        issuer: "Unqork",
        issuedAt: "2026",
        summary:
          "Credential recognizing skills in environmental program administration, compliance, and sustainable operations management.",
        link: "https://www.credly.com/badges/a3420ca4-4d61-4d6a-8fcd-61fb7595c6fb/public_url",
        tags: ["Environment", "Administration", "Sustainability"],
      },
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

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  papershelf,
  bookshelf,
  work,
  gallery,
};
