import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationWrapper from "./components/NavigationWrapper";
import Home from "./components/Home";
import BooksPage from "./components/BooksPage";
import WallpapersPage from "./components/WallpapersPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-offwhite min-h-screen flex flex-col">
        <NavigationWrapper />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/wallpapers" element={<WallpapersPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;