import useCompetitions from "../hooks/useCompetitions";
import CompetitionCard from "../components/CompetitionCard";

function Competitions() {

  const { data, isLoading } = useCompetitions();

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        Loading competitions...
      </div>
    );
  }

  const competitions = data?.data || [];

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Competitions
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {competitions.map((competition) => (
          <CompetitionCard
            key={competition._id}
            competition={competition}
          />
        ))}

      </div>

    </div>
  );

}

export default Competitions;