import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gaurab Khanal",
  initials: "GK",
  url: "http://gaurabkhanal.tech/",
  location: "Itahari, Nepal",
  avatarUrl: "/me.jpeg",
  description: "Software developer learning and building solutions.",
  summary:
    "As a software developer, I’ve built dynamic web applications with the MERN stack and Next.js. Now, I’m diving into DevOps, exploring tools like Docker, Kubernetes, and CI/CD pipelines. Along the way, I’ve competed in hackathons, focusing on real-world impact. My goal is to bridge development and operations, creating scalable systems while growing as a developer and DevOps engineer.",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "Postgres",
    "Docker",
    "MongoDB",
    "WebRTC",
    "Socket.io",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://dub.sh/D3npolT",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "khanalgaurab98@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/F446hBm",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/d8a2eeM",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/qkDkvXm",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:khanalgaurab98@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "EasyBit Software Solutions",
      href: "https://easybit.tech/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/easybit.png",
      start: "Oct 2024",
      end: "Feb 2025",
      description:
        "Developed a real-time chat application with integrated API support using SignalR for messaging and signaling. Implemented a video calling system using WebRTC, enabling seamless text and video communication between random users. Designed and built the overall frontend UI for optimal user experience",
    },
    {
      company: "HUNCHHA DIGITAL",
      badges: [],
      href: "https://hunchhadigital.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/hunchha.png",
      start: "April 2024",
      end: "Jul 2024",
      description:
        "Designed and implemented UI components for the E-Parliament Web App and SaaS Payroll system, integrated APIs, automated reporting, and collaborated with cross-functional teams to streamline development and enhance efficiency.",
    },
    {
      company: "HUNCHHA DIGITAL",
      badges: [],
      href: "https://hunchhadigital.com/",
      location: "Remote",
      title: "Frontend Intern",
      logoUrl: "/hunchha.png",
      start: "Dec 2023",
      end: "Mar 2024",
      description:
        "Worked on integrating a complete authentication system, improving frontend efficiency with React memoization, and contributing to a public issue management system for the Government of Nepal.",
    },
  ],
  education: [
    {
      school: "Tribhuvan University",
      href: "https://tu.edu.np/",
      degree:
        "Bachelor's Degree of Computer Science and Information Technology (BSc.CSIT)",
      logoUrl: "/TULogo.webp",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "ACES TECHFEST 7.0 ( Winner )",
      dates: "December 11th - 14th, 2024",
      location: "Dharan -14, Nepal",
      description:
        "Developed Sahara, a web application enabling live ambulance tracking and seamless coordination among ambulances, hospitals, and patients. The app ensures efficient communication and faster response times, earning us first place in the hackathon.",
      image: "/aces.webp",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aces-erc/aces_techfest_hackathon_v7_mind_forge",
        },
      ],
    },
    {
      title: "IIC QUEST 2024",
      dates: "June 14th - 12th, 2024",
      location: "Ithari, Nepal",
      description:
        "Developed a mental health-focused web app during IIC QUEST Fest. Built with Next.js, the app offers resources, self-assessment tools, and anonymous support for students.",
      image: "https://iic.edu.np/image/news-and-events-inner/iic-logo-sm.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/RohanKhanal14/teamcct_iicquest",
        },
      ],
    },
    {
      title: "Dristi 3.0",
      dates: "January 9th - 11th, 2025",
      location: "Kalimati, Kathmandu",
      description:
        "Developed Emergenix, a comprehensive emergency services web app that allows users to contact ambulances, fire brigades, and police as needed. Key features include real-time location sharing, triage tools, personalized hospital recommendations, and an SOS button for instant multi-agency notifications and coordination.",
      icon: "public",
      image: "/dristi.webp",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kecitclub/mindForge",
        },
      ],
    },
  ],
} as const;
