import React from 'react';

const skills = [
  {
    title: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    tools: ['Node.js', 'Django', 'Express.js', 'REST API'],
  },
  {
    title: 'Databases',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'NeonDB'],
  },
];

const Skills = () => {
  return (
    <section className="p-8 bg-black h-screen">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 overflow-y-scroll max-h-[450px] sm:max-h-[320px]">
        {skills.map((skill) => (
          <div key={skill.title} className="bg-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <img src={skill.logo} alt={skill.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
            <ul className="text-gray-600">
              {skill.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
