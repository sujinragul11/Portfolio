import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Cinetstox',
    location: 'Mumbai',
    period: 'Sep 2023 – Present',
    role: 'Lead UX Designer',
  },
  {
    company: 'Sugee Pvt Limited',
    location: 'Mumbai',
    period: 'Sep 2020 – July 2023',
    role: 'UI/UX Designer',
  },
  {
    company: 'Cognizant',
    location: 'Mumbai',
    period: 'Sep 2016 – July 2020',
    role: 'Experience Designer',
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 last:mb-0 group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-x-2 border-l-4 border-blue-600">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Briefcase className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="text-lg font-semibold text-blue-600">
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <span className="text-gray-600">{exp.location}</span>
                    </div>
                    <p className="text-gray-500">{exp.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
