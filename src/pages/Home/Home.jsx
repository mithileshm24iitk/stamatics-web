import homeBg from "../../assets/home_background.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        color: "white",
      }}
      className="pt-32 px-6 py-10"
    >
      <section className="text-center py-20 backdrop-blur-sm bg-black/40 rounded-xl mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Statamatics IIT Kanpur
        </h1>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Explore Mathematics, Statistics, and Beyond through competitions,
          events, and student-led initiatives at IIT Kanpur.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition">
          Explore Competitions
        </button>
      </section>
    </div>
  );
}

export default Home;
