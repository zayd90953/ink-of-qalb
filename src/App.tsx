import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationWrapper from "./components/NavigationWrapper";
import Home from "./components/Home";
import BooksPage from "./components/BooksPage";
import WallpapersPage from "./components/WallpapersPage";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Cookies from "./components/Cookies";
import RefundPolicy from "./components/RefundPolicy";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <div className="bg-black text-offwhite antialiased min-h-screen flex flex-col">
      <NavigationWrapper />
      <ScrollToTop />

      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/wallpapers" element={<WallpapersPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/refund" element={<RefundPolicy />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;