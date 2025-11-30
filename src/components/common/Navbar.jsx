import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 py-4 shadow bg-nav text-navText flex justify-between items-center">
      <h1 className="text-xl font-bold">Statamatics IIT Kanpur</h1>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Competitions</a>
        <a href="#" className="hover:underline">Blogs</a>
        <a href="#" className="hover:underline">Contact</a>

        <button
          onClick={toggleTheme}
          className="p-2 rounded border hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
