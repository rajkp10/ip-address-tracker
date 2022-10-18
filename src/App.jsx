import "./App.css";
import SearchComponent from "./components/SearchComponent";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <main className="min-h-screen min-w-full flex-col">
      <SearchComponent />
      <MapComponent />
    </main>
  );
}

export default App;
