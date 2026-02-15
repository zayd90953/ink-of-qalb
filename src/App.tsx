import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationWrapper from "./components/NavigationWrapper";
import Home from "./components/Home";
import BooksPage from "./components/BooksPage";
import WallpapersPage from "./components/WallpapersPage";

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

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/wallpapers" element={<WallpapersPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;