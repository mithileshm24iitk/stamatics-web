import homeBg from "../../assets/home_background.jpg";

function Home() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-10 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* LEFT SECTION — HERO TEXT */}
        <div className="max-w-2xl mt-32 md:mt-0">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
            Statamatics IIT Kanpur
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Inspiring mathematical thinking and problem-solving for the next generation.
          </p>

          <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
            Enroll Now
          </button>
        </div>

        {/* RIGHT SECTION — MAILING LIST */}
        <div className="mt-16 md:mt-0 bg-black/40 backdrop-blur-md p-6 rounded-lg max-w-md w-full">
          <h3 className="text-white text-xl font-semibold mb-4">
            Subscribe to our Mailing List
          </h3>

          <p className="text-gray-300 mb-4">Enter your email here</p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 rounded-l-md bg-black/50 border border-gray-400 text-white focus:outline-none"
            />
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-md transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL DOWN ARROW */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce">
        ↓
      </div>
    </div>
  );
}

export default Home;
