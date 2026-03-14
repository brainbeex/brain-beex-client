import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const useCompetitions = (page = 1) => {

  return useQuery({
    queryKey: ["competitions", page],
    queryFn: async () => {

      const res = await axiosInstance.get(`/competitions?page=${page}`);

      return res.data;
    },
  });

};

export default useCompetitions;