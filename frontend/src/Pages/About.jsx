import NavBar from "../components/NavBar";
import { Link as LinkIcon, Github, Heart, Code } from 'lucide-react';

const About = () => {
  const githubRepo = 'https://github.com/vishwaravi/slinky'
  
  const techStack = [
    { name: "React", description: "Modern UI framework for interactive components" },
    { name: "Express.js", description: "Fast, minimalist web framework for Node.js" },
    { name: "MongoDB", description: "Flexible NoSQL database for scalable data storage" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid styling" }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <NavBar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl">
                <LinkIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Slinky
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to make the web more accessible by transforming long, 
              complex URLs into clean, shareable links that work everywhere.
            </p>
          </div>

          {/* Story Section */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Born from the frustration of sharing unwieldy URLs that broke in emails and 
                looked unprofessional in presentations, Slinky was created to solve a simple 
                but important problem: making links beautiful and manageable.
              </p>
              <p>
                What started as a weekend project has grown into a reliable service trusted 
                by thousands of users worldwide. We believe that great tools should be simple, 
                fast, and accessible to everyone.
              </p>
              <p>
                Whether you're a content creator, marketer, developer, or just someone who 
                shares links regularly, Slinky is designed to make your digital life a 
                little bit easier.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Built With Modern Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center fade-in">
            <Heart className="w-12 h-12 mx-auto mb-4 text-pink-300" />
            <h2 className="text-3xl font-bold mb-4">Open Source & Free</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Slinky is completely open source and free to use. We believe in transparency 
              and community-driven development. Check out our code, contribute, or fork it 
              for your own projects!
            </p>
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions or Feedback?
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Reach out through GitHub issues or contribute to make Slinky even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${githubRepo}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>Report Issues</span>
              </a>
              <a
                href={`${githubRepo}/pulls`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-200"
              >
                <Code className="w-5 h-5" />
                <span>Contribute Code</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About