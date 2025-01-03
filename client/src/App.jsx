import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import GetUserDetatils from "./utils/fetchuserdetails";
import { useEffect } from "react";
import { setUser } from "./store/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const getuser = async () => {
    const userdata = await GetUserDetatils();
    dispatch(setUser(userdata.data.data));
  };

  useEffect(() => {
    getuser();
  }, [token]);

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
