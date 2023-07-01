import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <main>
      <Weather />
      <p className="text-center link">
        This project is coded by{" "}
        <a href="https://www.shecodes.io/graduates/73791-san-san-thi">
          San San Thi
        </a>
        and is open-sourced on{" "}
        <a href="https://github.com/sansanthi/weather-app-react">GitHub</a>
      </p>
    </main>
  );
}

export default App;
