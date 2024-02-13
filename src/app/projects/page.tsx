"use client";

import Image from "next/image";
import { FiGithub, FiLink } from "react-icons/fi";
import Card from "../card";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="flex flex-col items-start justify-between py-20 px-32 pt-40  gap-10 font-black text-5xl text-left text-zinc-400">
        <h2 className=" max-w-4xl leading-[1.3]">
          As a <span className="text-white">student</span>, Ive built and deployed <span className="text-white">6 projects</span> with over{" "}
          <span className="text-white">7,500 users</span>.{" "}
        </h2>
      </div>

      {/* Divider */}
      <div className="flex  items-start justify-center py-12 pt-40  ">
        <div className="w-10/12 bg-zinc-600 h-[1px]"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {/* LGDA */}
          <Card
            src="/v3LGDA.jpg"
            alt="LGDA Platform"
            title="LGDA Platform"
            description="A full-stack web platform for the Local Government Directors Association. Features secure user-authentication, resource library and custom CMS. Built with NextJS, Tailwind and  ShadcnUI.  "
            githubLink="https://github.com/sheeehy/LGDA"
            projectLink="https://lgda.ie"
          />
          {/* GEOGIT */}
          <Card
            src="/v3Geogit.jpg"
            alt="GeoGit"
            title="GeoGit"
            description="A full-stack web app that ranks the top GitHub users by location. Utilises the GitHub API and Developer Program. Reached 4,000 users after Product Hunt and Hacker News launch. "
            githubLink="https://github.com/sheeehy/geogit"
            projectLink="https://geogit.tech/"
          />
          {/* SNKRS */}
          <Card
            src="/v3SNKRS.jpg"
            alt="SNKRS"
            title="SNKRS App Monitor"
            description="Building a free alternative to paid SNKRS monitors, allowing users to recieve instant alerts on rare sneaker drops. Accumulated 1,500 users on the waitlist and aim to release this year. "
            githubLink="https://github.com/sheeehy/SNKRS-Monitor"
            projectLink="https://snkrs-monitor.vercel.app/"
          />
          {/* INDEX */}
          <Card
            src="/v3Index.jpg"
            alt="Index Concept"
            title="INDEX Concept"
            description="A concept site built for INDEX Nightclub. Allowed me to try 3D modelling and animation in a web context and learn the NextJS App Router. Built with Spline, NextJS, Tailwind and ShadcnUI."
            githubLink="https://github.com/sheeehy/index"
            projectLink="https://index-livid-nu.vercel.app/"
          />
          {/* SAAS Template */}
          <Card
            src="/v3ACME.jpg"
            alt="Saas Template"
            title="SaaS Template"
            description="A SaaS landing page template. Improved my UI and UX skills as well as building interactive components with Typescript. Built with NextJS, Spline, Tailwind and ShadcnUI. "
            githubLink="https://github.com/sheeehy/saas-template"
            projectLink="https://saas-template-seven-pi.vercel.app/"
          />
          {/* v2 Portfolio */}
          <Card
            src="/v3Portfolio.jpg"
            alt="v2"
            title="Personal Portfolio v2"
            description="My second attempt at a personal Portfolio. Improved my design skills, UI, UX, and learned how to use tools such as Figma and Vite. Built with NextJS and Tailwind."
            githubLink="https://github.com/sheeehy/v2"
            projectLink="https://v2-sheeehy.vercel.app/"
          />
        </div>
      </div>
      {/* Divider */}
      <div className="flex  items-start justify-center py-12   ">
        <div className="w-10/12 bg-zinc-600 h-[1px]"></div>
      </div>
    </main>
  );
}
