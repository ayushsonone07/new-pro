import certifications from '@/Data/certificates.json';

export default function Certifications() {
  return (
    <section className="p-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-scroll max-h-[600px] sm:max-h-[300px]">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
