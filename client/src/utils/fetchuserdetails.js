import SummaryApi from "../common/SummaryApi";
import Axios from "./Axios";

const GetUserDetatils = async () => {
  try {
    const response = await Axios({
      ...SummaryApi.getUserdetails,
    });
    return response;
  } catch (error) {
    console.log("Login");
  }
};

export default GetUserDetatils;
