import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import useCompetitions from "../hooks/useCompetitions";
import CompetitionCard from "../components/CompetitionCard";
import Loader from "../components/Loader";

const Home = () => {
  const { data, isLoading } = useCompetitions(1);

  if (isLoading) return <Loader />;

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#0A1F44]"
          >
            Unlock Your Potential with Competitions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[#4B5563] max-w-xl mx-auto"
          >
            Discover global opportunities, apply easily, and showcase your talent to the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <Link to="/competitions" className="btn bg-[#FFB800] text-black border-none">
              Apply Competition
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-16 max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-[#0A1F44] mb-8 text-center">
          Featured Competitions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.data?.slice(0, 6).map((competition, index) => (
            <motion.div
              key={competition._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CompetitionCard competition={competition} />
            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-10">
            What Our Users Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                name: "Ayesha Rahman",
                text: "BrainBeex helped me win my first international competition!",
              },
              {
                name: "Imran Hossain",
                text: "Super smooth experience applying to multiple competitions.",
              },
              {
                name: "Tanvir Ahmed",
                text: "The platform is clean, fast, and very professional.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow border border-[#E5E7EB]"
              >
                <p className="text-[#4B5563]">"{item.text}"</p>
                <h4 className="mt-4 font-bold text-[#0A1F44]">{item.name}</h4>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div className="collapse collapse-arrow border border-[#E5E7EB] bg-white">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title font-medium text-[#0A1F44]">
              How do I apply for a competition?
            </div>
            <div className="collapse-content text-[#4B5563]">
              Browse competitions, open details, and click apply.
            </div>
          </div>

          <div className="collapse collapse-arrow border border-[#E5E7EB] bg-white">
            <input type="radio" name="faq" />
            <div className="collapse-title font-medium text-[#0A1F44]">
              Is BrainBeex free to use?
            </div>
            <div className="collapse-content text-[#4B5563]">
              Yes, applying and browsing competitions is completely free.
            </div>
          </div>

          <div className="collapse collapse-arrow border border-[#E5E7EB] bg-white">
            <input type="radio" name="faq" />
            <div className="collapse-title font-medium text-[#0A1F44]">
              Can I track my applications?
            </div>
            <div className="collapse-content text-[#4B5563]">
              Yes, from your dashboard you can track application status.
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;