import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "dark" ? "#333333" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#333333",
    minHeight: "100vh",
    padding: "24px",
  };

  return (
    <div style={style}>
      <h1>Welcome to My App</h1>
      <p>
        This app uses React Router to switch between pages, a counter built
        with state and props, and a theme context to toggle light and dark mode.
      </p>
    </div>
  );
}

export default Home;
