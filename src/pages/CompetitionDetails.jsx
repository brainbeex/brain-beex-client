import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import ApplyForm from "../components/ApplyForm";

function CompetitionDetails() {

  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["competition", id],
    queryFn: async () => {

      const res = await axiosInstance.get(`/competitions/${id}`);
      return res.data;

    }
  });

  if (isLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const competition = data?.data;

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-4">
        {competition.title}
      </h1>

      <p className="text-gray-600 mb-4">
        {competition.description}
      </p>

      <p className="text-red-500 mb-6">
        Deadline: {new Date(competition.deadline).toLocaleDateString()}
      </p>

      <ApplyForm competitionId={competition._id} />

    </div>
  );
}

export default CompetitionDetails;