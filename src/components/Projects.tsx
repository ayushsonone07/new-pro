
type ProjectProps = {
  head: string;
  desc: string;
  bgImage: string;
  github: string;
  live: string;
};

export default function Project({ head, desc, bgImage, github, live }: ProjectProps) {
  return (
    <div
      className="w-full h-54 rounded-lg relative group shadow-lg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#333', // 👈 fallback to help you debug
      }}
    >
      <div className="absolute inset-0 bg-transparent transition-opacity duration-300 p-6 flex flex-col justify-end space-y-4">
        <p className="text-white text-xl font-bold text-white">{head}</p>
        <p className="text-white">{desc}</p>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 font-medium"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 font-medium"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
