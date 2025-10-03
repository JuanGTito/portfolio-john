"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Laravel & PHP</li>
        <li>JavaScript (ES6+)</li>
        <li>React & Next.js</li>
        <li>Node.js & Express</li>
        <li>Python</li>
        <li>PostgreSQL & MySQL</li>
        <li>APIs REST & GraphQL</li>
        <li>Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ingeniería de Software – Universidad de Juliaca</li>
        <li>Formación continua en desarrollo Full Stack</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
        <li>Certificación en Desarrollo Web Full Stack</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.jpg" 
          alt="about image" 
          width={500} 
          height={500} 
          className="rounded-2xl shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-base lg:text-lg leading-relaxed">
            Soy un <span className="font-semibold">desarrollador full stack</span> con pasión por 
            construir aplicaciones modernas, escalables y de alto impacto. 
            Trabajo con tecnologías como <span className="font-semibold">Laravel, PHP, JavaScript, Python y Next.js</span>, 
            desarrollando soluciones digitales que combinan innovación y funcionalidad.  
          </p>

          {/*
          <p className="text-base lg:text-lg mt-4 leading-relaxed">
            Actualmente estoy impulsando el crecimiento de mi propia 
            <span className="font-semibold"> startup de desarrollo de software</span>, 
            enfocada en brindar soluciones tecnológicas a empresas y personas, 
            optimizando sus procesos y ayudándolos a digitalizarse.  
            Mi objetivo es aportar valor con cada proyecto y seguir creciendo en el ecosistema tecnológico.
          </p>
          */}
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
