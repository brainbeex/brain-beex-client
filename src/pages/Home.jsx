import { Link } from "react-router";
import useCompetitions from "../hooks/useCompetitions";
import CompetitionCard from "../components/CompetitionCard";
import Loader from "../components/Loader";

function Home() {

  const { data, 
    isLoading 
  } = useCompetitions();

  if (isLoading) return <Loader />;

  const competitions = data?.data?.slice(0, 6) || [];

  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-base-200 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Discover Competitions  
            <span className="text-primary"> Showcase Your Talent</span>
          </h1>

          <p className="text-lg text-gray-500 mb-8">
            Find exciting competitions around the world and apply easily.
            Build your profile and win opportunities.
          </p>

          <Link
            to="/competitions"
            className="btn btn-primary btn-lg"
          >
            Explore Competitions
          </Link>

        </div>

      </section>


      {/* FEATURED COMPETITIONS */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-3xl font-bold">
              Featured Competitions
            </h2>

            <Link
              to="/competitions"
              className="btn btn-outline btn-primary"
            >
              View All
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {competitions.map((competition) => (
              <CompetitionCard
                key={competition._id}
                competition={competition}
              />
            ))}

          </div>

        </div>

      </section>


      {/* CTA SECTION */}

      <section className="bg-primary text-white py-20">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Join a Competition?
          </h2>

          <p className="mb-8 text-lg">
            Register today and start applying to competitions worldwide.
          </p>

          <Link
            to="/register"
            className="btn btn-secondary btn-lg"
          >
            Create Free Account
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;