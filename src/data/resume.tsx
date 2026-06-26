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
    "Javascript",
    "TypeScript",
    "Golang",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Socket.io",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "WebRTC",
    "CSS",
    "Tailwind",
    "MaterialUI",
    "Redux Toolkit",
    "Shadcn UI",
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
      company: "KubeStellar",
      href: "https://kubestellar.io/",
      badges: ["CNCF Sandbox"],
      location: "Remote",
      title: "Open Source Maintainer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQGd7cY1Rrk-Rg/company-logo_200_200/company-logo_200_200/0/1706622981215/kubestellar_logo?e=1756339200&v=beta&t=GfYp665dSgO-MGVLia8UH5_N16uxuKV377QxEzs3Ydc",
      start: "Nov 2025",
      end: "Feb 2026",
      description:
        "Help onboard new contributors. Added GitHub workflow automating release of kubectl-multi.",
    },
    {
      company: "KubeStellar",
      href: "https://kubestellar.io/",
      badges: ["CNCF Sandbox"],
      location: "Remote",
      title: "Linux Foundation Mentee",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQGd7cY1Rrk-Rg/company-logo_200_200/company-logo_200_200/0/1706622981215/kubestellar_logo?e=1756339200&v=beta&t=GfYp665dSgO-MGVLia8UH5_N16uxuKV377QxEzs3Ydc",
      start: "Sep 2025",
      end: "Nov 2025",
      description:
        "Implemented multi-cluster status aggregation, enabling real-time health monitoring for distributed Kubernetes workloads. Designed KubeStellar API extension to enable multi-cluster aggregation feature. Troubleshot and fixed existing issues related to singleton status API.",
    },
    {
      company: "KubeStellar",
      href: "https://kubestellar.io/",
      badges: ["CNCF Sandbox"],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQGd7cY1Rrk-Rg/company-logo_200_200/company-logo_200_200/0/1706622981215/kubestellar_logo?e=1756339200&v=beta&t=GfYp665dSgO-MGVLia8UH5_N16uxuKV377QxEzs3Ydc",
      start: "Jun 2025",
      end: "Aug 2025",
      description:
        "Designed and implemented DB schema for the Plugin system. Used WASI for instantiating plugins where required. Added migration support using go-migrate. Implemented frontend UI to support backend APIs. Collaborated with mentors and other mentees on the Plugin system. Demonstrated a simple Plugin system for mid-term evaluation. Integrated Plugin Frontend System enabling dynamic plugins to load on the host frontend. Fixed minor bugs and raised help-wanted/good-first-issue tickets to onboard new contributors.",
    },
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
        "Created the overall frontend UI. Developed an end-to-end scalable chat application using SignalR and integrated APIs for proper connection establishment. Implemented a video call system using WebRTC with SignalR as the signaling server. Established connections between random users for successful communication over text and video chat.",
    },
    {
      company: "HUNCHHA DIGITAL",
      badges: [],
      href: "https://hunchhadigital.com/",
      location: "Remote",
      title: "Junior Frontend Developer",
      logoUrl: "/hunchha.png",
      start: "April 2024",
      end: "Jul 2024",
      description:
        "Designed and implemented UI components for the E-Parliament Web App and a SaaS-based Payroll system. Developed and maintained the E-Parliament Web App for the Nepal Government, with a focus on secure document handling and real-time collaboration features. Integrated APIs for the Seamless Payroll and Attendance System. Automated reporting features, resulting in a 40% reduction in manual work. Collaborated with cross-functional teams to ensure seamless integration of front-end components with backend services. Projects: shaasan2.vercel.app, hajirkhata.com.",
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
        "Worked with the team to integrate a complete authentication system consuming backend APIs. Built responsive UI with a major focus on state management using Redux Toolkit. Integrated ApexCharts for data visualization and Leaflet to implement maps. Improved frontend application efficiency using React memoization techniques. Contributed to a public issue management system for the Government of Nepal. Project: shaasan.vercel.app.",
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
    {
      title: "MeetUp",
      href: "https://meetup.gaurabkhanal.tech/",
      dates: " ",
      active: true,
      description:
        "A full-stack live video chat web application using Next.js, Node.js, Socket.io, and WebRTC. Implemented peer-to-peer video chat with features to create and join rooms.",
      technologies: [
        "Next.js",
        "WebRTC",
        "PeerJs",
        "Socket.IO",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://meetup.gaurabkhanal.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/gaurab-khanal/meetUp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/meetup.mkv",
    },
    {
      title: "Whiteboard App",
      href: "https://whiteboard-nine-xi.vercel.app/",
      dates: " ",
      active: true,
      description:
        "A full-stack web application using Next.js, Canvas API, Node.js, Express, and Socket.io. Features include drawing on canvas, erasing, undo/redo, and live collaboration.",
      technologies: [
        "Next.js",
        "Canvas API",
        "Node.js",
        "Express",
        "Socket.io",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://whiteboard-nine-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/gaurab-khanal/whiteboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
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
