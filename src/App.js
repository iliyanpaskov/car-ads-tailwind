import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import WhyMustang from "./components/WhyMustang";
import GetNotifications from "./components/GetNotifications";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center flex-col font-sans">
      <Header />
      <main className="w-11/12 max-w-7xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mustang" element={<WhyMustang />} />
          <Route path="//get-notifications" element={<GetNotifications />} />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
