import { BatteryCharging, BotMessageSquare, Fingerprint, GlobeLock, PlugZap, ShieldHalf } from "lucide-react";

import user1 from "@/public/user1.jpg";
import user2 from "@/public/user2.jpg";
import user3 from "@/public/user3.jpg";
import user4 from "@/public/user4.jpg";
import user5 from "@/public/user5.jpg";
import user6 from "@/public/user6.jpg";

export const navItems = [
  { label: "Features", href: "/" ,id:1},
  { label: "Workflow", href: "workflow",id:2 },
  { label: "Pricing", href: "/pricing",id:3 },
  { label: "Testimonials", href: "/testimonials",id:4 },
];

export const testimonials = [
  {
    id:18,
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {   id:19,
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    id:20,
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    id:21,
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    id:22,
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    id:23,
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    id:5,
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    id:6,
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    id:7,
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    id:8,
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    id:9,
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    id:10,
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    id:11,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id:12,
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id:13,
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id:14,
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    id:15,
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {  id:16,
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    id:17,
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started",id:24},
  { href: "#", text: "Documentation",id:25 },
  { href: "#", text: "Tutorials" ,id:26},
  { href: "#", text: "API Reference",id:27 },
  { href: "#", text: "Community Forums",id:28 },
];

export const platformLinks = [
  { href: "#", text: "Features",id:29 },
  { href: "#", text: "Supported Devices",id:30 },
  { href: "#", text: "System Requirements",id:31 },
  { href: "#", text: "Downloads",id:32 },
  { href: "#", text: "Release Notes" ,id:33},
];

export const communityLinks = [
  { href: "#", text: "Events",id:34 },
  { href: "#", text: "Meetups" ,id:35},
  { href: "#", text: "Conferences",id:36 },
  { href: "#", text: "Hackathons" ,id:37},
  { href: "#", text: "Jobs" ,id:38},
];