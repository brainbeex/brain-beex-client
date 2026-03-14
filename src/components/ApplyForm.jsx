import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function ApplyForm({ competitionId }) {

  const [submissionLink, setSubmissionLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const applicationData = {
        competitionId,
        submissionLink,
        message
      };

      await axiosInstance.post("/applications", applicationData);

      alert("Application submitted successfully!");

      setSubmissionLink("");
      setMessage("");

    } catch (error) {

      alert(error.response?.data?.message || "Application failed");

    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-6 rounded-lg"
    >

      <h2 className="text-xl font-bold mb-4">
        Apply to this competition
      </h2>

      <input
        type="text"
        placeholder="Project / GitHub Link"
        value={submissionLink}
        onChange={(e) => setSubmissionLink(e.target.value)}
        className="w-full border p-2 mb-4"
        required
      />

      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-5 py-2 rounded"
      >
        Submit Application
      </button>

    </form>
  );
}

export default ApplyForm;