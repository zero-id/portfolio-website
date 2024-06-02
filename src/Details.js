// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import typescript from "./assets/techstack/ts.svg";
import nestjs from "./assets/techstack/nestjs.svg";
import go from "./assets/techstack/go.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import housy from "./assets/projects/housy.png";
import wayshub from "./assets/projects/wayshub.png";
import circle from "./assets/projects/circle.png";
import traveldiary from "./assets/projects/traveldiary.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Abdul Latif F",
  tagline: "Fullstack Web Developer",
  img: profile,
  about: `Hello, I am Abdul Latif Faturahman, I am a Fullstack Developer, I have approximately 1 year of Web developer experience and I have attended and graduated from the Fullstack Developer Bootcamp at Dumbways for approximately 6 months, there I worked on a lot of Fullstack Developer projects. I am someone who likes new things.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abdullatif-faturahman/",
  github: "https://www.github.com/zero-id/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/abdullatiff_official",
  cv: "https://drive.google.com/file/d/1pUZeDAyKvre9a6kusMMOUaDBRWdFBNL0/view?usp=sharing",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Fullstack Develover",
    Company: "PT. Dumbways Indonesian Technology",
    Location: "Sawangan, Depok",
    Type: "Full Time",
    Duration: "Desember 2023 - Juni 2024",
  },
  {
    Position: "Computer & Network Engineering",
    Company: `SMK Karya Nasional Kuningan`,
    Location: "Kuningan, West Java",
    Type: "Full Time",
    Duration: "2015 - 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  typescript: typescript,
  nestjs: nestjs,
  go,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Circle",
    image: circle,
    description: `Circle is a social media website like Twitter, which includes post threads, replies, likes, follows and so on.`,
    techstack: " React Js, Typescript Chara UI, Axios, ExpressJs, PostgreSQL, Prisma ORM, JWT token, Cloudinary",
    previewLink: "https://wayshub-deployment.vercel.app",
    githubLink: "https://github.com/zero-id/circle-app.git",
  },
  {
    title: "Travel Diary",
    image: traveldiary,
    description: `Travel diary is a website created with the aim of allowing users to share their holiday travel experiences.`,
    techstack: " React Js, Typescript Chara UI, Axios, NestJs, PostgreSQL, Prisma ORM, JWT token, Cloudinary",
    previewLink: "https://wayshub-deployment.vercel.app",
    githubLink: "https://github.com/zero-id/travel-diary.git",
  },
  {
    title: "Wayshhub",
    image: wayshub,
    description: `A simple web video similiar like
    youtube`,
    techstack: " React Js, Bootstrap, Axios, Golang, PostgreSQL, GORM, JWT token, Cloudinary",
    previewLink: "https://wayshub-deployment.vercel.app",
    githubLink: "https://github.com/zero-id/WayshubDeployment",
  },
  {
    title: "Housy",
    image: housy,
    description: `Housy is an online property booking site. where everyone can register to become a tenant or owner
    `,
    techstack: " React Js, Bootstrap, Axios, Midtrans Payment, Golang, PostgreSQL, GORM, JWT token, Cloudinary ",
    previewLink: "https://housy-ruby.vercel.app/",
    githubLink: "https://github.com/zero-id/Housy",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abdullatiffebriliana15@gmail.com",
  phone: "+62 8234727079",
};
