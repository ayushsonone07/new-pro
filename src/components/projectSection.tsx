import React from 'react';
import Project from '@/components/Projects';
import projectList from '@/Data/projects.json'; // 👈 adjust path as needed

export default function ProjectsSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full overflow-y-scroll max-h-[450px] sm:max-h-[320px]">
      {projectList.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}
