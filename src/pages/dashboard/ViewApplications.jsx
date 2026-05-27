import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const ViewApplications = () => {

    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {

        try {

            const res = await axiosInstance.get(
                "/applications"
            );

            setApplications(res.data.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const updateStatus = async (id, status) => {

        try {

            await axiosInstance.patch(
                `/applications/${id}`,
                { status }
            );

            fetchApplications();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                View Applications
            </h1>

            <div className="grid gap-4">

                {applications.map((app) => (

                    <div
                        key={app._id}
                        className="border p-4 rounded-lg"
                    >

                        <p>
                            <strong>Competition:</strong>
                            {" "}
                            {app.competitionId?.title}
                        </p>

                        <p>
                            <strong>Category:</strong>
                            {" "}
                            {app.competitionId?.category}
                        </p>

                        <p>
                            <strong>Organizer:</strong>
                            {" "}
                            {app.competitionId?.organizer}
                        </p>

                        <p>
                            Deadline:
                            {" "}
                            {new Date(
                                app.competitionId?.deadline
                            ).toLocaleDateString()}
                        </p>

                        <p>
                            <strong>User:</strong>
                            {" "}
                            {app.userEmail}
                        </p>

                        <p>
                            <strong>Status:</strong>
                            {" "}
                            {app.status}
                        </p>

                        <a
                            href={app.submissionLink}
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            View Submission
                        </a>

                        <div className="flex gap-3 mt-4">

                            <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                    updateStatus(app._id, "accepted")
                                }
                            >
                                Accept
                            </button>

                            <button
                                className="btn btn-error btn-sm"
                                onClick={() =>
                                    updateStatus(app._id, "rejected")
                                }
                            >
                                Reject
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ViewApplications;