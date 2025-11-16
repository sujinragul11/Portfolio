const experiences = [
  {
    company: 'Cognizant, Mumbai',
    period: 'Sep 2016- July 2020',
    role: 'Experience Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales',
    isOrange: true,
  },
  {
    company: 'Sugee Pvt limited, Mumbai',
    period: 'Sep 2020- July 2023',
    role: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales',
    isOrange: false,
  },
  {
    company: 'Cinetstox, Mumbai',
    period: 'Sep 2023',
    role: 'Lead UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales',
    isOrange: true,
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-orange-500">Work Experience</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side */}
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 mb-4">{exp.period}</p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className={`w-6 h-6 rounded-full border-4 ${exp.isOrange ? 'bg-orange-500 border-orange-200' : 'bg-gray-900 border-gray-300'}`}></div>
                </div>

                {/* Right Side */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}