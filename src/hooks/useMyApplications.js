import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const useMyApplications = () => {

  return useQuery({
    queryKey: ["my-applications"],
    queryFn: async () => {

      const res = await axiosInstance.get("/applications/my");

      return res.data;

    }
  });

};

export default useMyApplications;