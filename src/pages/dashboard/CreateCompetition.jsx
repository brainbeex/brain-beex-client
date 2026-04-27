import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const CreateCompetition = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    organizer: "",
    deadline: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/competitions", form);
      alert("Competition created!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-3">
      <input name="title" placeholder="Title" onChange={handleChange} className="input input-bordered w-full" />
      <input name="organizer" placeholder="Organizer" onChange={handleChange} className="input input-bordered w-full" />
      <input type="date" name="deadline" onChange={handleChange} className="input input-bordered w-full" />
      <input name="category" placeholder="Category" onChange={handleChange} className="input input-bordered w-full" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="textarea textarea-bordered w-full" />
      
      <button className="btn btn-primary w-full">Create</button>
    </form>
  );
};

export default CreateCompetition;