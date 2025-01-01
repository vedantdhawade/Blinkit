import toast from "react-hot-toast";

const AxiosErrorToast = (error) => {
  toast.error(
    error.response?.data?.message || "Something went wrong. Please try again"
  );
};

export default AxiosErrorToast;
