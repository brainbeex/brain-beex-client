function AdminDashboard() {

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <a
          href="/admin/create-competition"
          className="border p-6 rounded"
        >
          Create Competition
        </a>

        <a
          href="/admin/manage-competitions"
          className="border p-6 rounded"
        >
          Manage Competitions
        </a>

        <a
          href="/admin/applications"
          className="border p-6 rounded"
        >
          View Applications
        </a>

      </div>

    </div>

  );

}

export default AdminDashboard;