import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const ManageCompetitions = () => {

  const [competitions, setCompetitions] = useState([]);

  const fetchCompetitions = async () => {
    try {

      const res = await axiosInstance.get("/competitions");

      setCompetitions(res.data.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCompetitions();
  }, []);

  const handleDelete = async (id) => {

    const confirmDelete = confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {

      await axiosInstance.delete(`/competitions/${id}`);

      alert("Competition deleted");

      fetchCompetitions();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Manage Competitions
      </h1>

      <div className="grid gap-4">

        {competitions.map((competition) => (

          <div
            key={competition._id}
            className="border p-4 rounded-lg"
          >

            <h2 className="text-xl font-bold">
              {competition.title}
            </h2>

            <p>{competition.category}</p>

            <p>
              Deadline:
              {" "}
              {new Date(
                competition.deadline
              ).toLocaleDateString()}
            </p>

            <div className="flex gap-3 mt-4">

              <button
                className="btn btn-error btn-sm"
                onClick={() =>
                  handleDelete(competition._id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ManageCompetitions;