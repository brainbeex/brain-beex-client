import { Link } from "react-router";

function CompetitionCard({ competition }) {

  const { title, description, deadline, _id } = competition;

  return (
    <div className="border rounded-xl p-5 shadow hover:shadow-lg">

      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">
        {description?.slice(0, 120)}...
      </p>

      <p className="text-sm text-red-500 mb-4">
        Deadline: {new Date(deadline).toLocaleDateString()}
      </p>

      <Link
        to={`/competitions/${_id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>

    </div>
  );

}

export default CompetitionCard;