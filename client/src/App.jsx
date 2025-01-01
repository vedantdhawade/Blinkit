import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <header className="bg-yellow-500  top-0 h-full py-3 shadow-md flex items-center">
        <Navbar />
      </header>
      <main className="container-fluid mx-auto flex justify-center">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster />
    </>
  );
}

export default App;
