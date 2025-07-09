import NavBar from "../components/NavBar";

const About = () => {
  const githubRepo = 'https://github.com/vishwaravi/slinky'
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex-1 items-center justify-center w-screen h-screen">
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our URL shortener! Our mission is to make links cleaner, shorter, and easier to share.
          Whether you're sharing on social media, email, or print, our tool helps you keep it neat and trackable.
        </p>
        <p className="text-md text-gray-600">
          Built with love using React, Express, and MongoDB.
        </p>
        <p className="my-5 text-lg text-slate-800">Checkout the Source : <span><a target="_blank" href={githubRepo}>here</a></span></p>
      </div>
    </div>

    </div>
    
  );
};

export default About