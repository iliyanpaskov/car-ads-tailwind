import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center flex-col font-sans">
        <Header />
      <main className="w-11/12 max-w-7xl">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

    
      </main>
    </div>
  );
}

export default App;
