import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import GetUserDetatils from "./utils/fetchuserdetails";
import { useEffect, useState } from "react";
import { setUser } from "./store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Axios from "./utils/Axios";
import SummaryApi from "./common/SummaryApi";
import { setAllCategories, setSubCategories } from "./store/productSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true); // Add a loading state

  const getSubCategories = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getSubCategory,
      });
      const data = response.data.data;
      dispatch(setSubCategories(data));
    } catch (error) {
      toast.error("error.message" || "Failed to fetch categories");
    }
  };

  const getCategories = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getCategories,
      });
      const data = response.data.data;
      dispatch(setAllCategories(data));
    } catch (error) {
      toast.error("error.message" || "Failed to fetch categories");
    }
  };

  const getuser = async () => {
    try {
      if (!token) {
        navigate("/login"); // Redirect to login if no token exists
        return;
      }

      const userdata = await GetUserDetatils();

      if (userdata?.data?.data) {
        dispatch(setUser(userdata.data.data));
      } else {
        throw new Error("User data is undefined");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details. Please log in.");
      navigate("/login"); // Redirect to login on error
    } finally {
      setLoading(false); // Stop loading once the fetch is complete
    }
  };

  useEffect(() => {
    getuser();
    getCategories();
    getSubCategories();
  }, [token]);

  if (loading) {
    // Show a loading indicator while fetching user details
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <header className="bg-yellow-500 top-0 h-full py-3 shadow-md flex items-center">
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
