import useMyApplications from "../hooks/useMyApplications";

function MyApplications() {

  const { data, isLoading } = useMyApplications();

  if (isLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const applications = data?.data || [];

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Applications
      </h1>

      <div className="overflow-x-auto">

        <table className="table w-full">

          <thead>
            <tr className="bg-gray-200">
              <th>Competition</th>
              <th>Submission</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {applications.map((app) => (

              <tr key={app._id}>

                <td>
                  {app.competition?.title}
                </td>

                <td>
                  <a
                    href={app.submissionLink}
                    target="_blank"
                    className="text-blue-500"
                  >
                    View
                  </a>
                </td>

                <td>
                  <span className="badge badge-warning">
                    {app.status}
                  </span>
                </td>

                <td>
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default MyApplications;