import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <header className="bg-yellow-500  top-0 h-full py-2 flex items-center">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
