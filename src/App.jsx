import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Competitions from "./pages/Competitions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import MyApplications from "./pages/MyApplications";
import CompetitionDetails from "./pages/CompetitionDetails";
// import AdminRoute from "./routes/AdminRoute";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
// import AdminRoute from "./AdminRoute";
import AdminRoute from "./routes/AdminRoute";
import CreateCompetition from "./pages/dashboard/CreateCompetition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competitions/:id" element={<CompetitionDetails />} />

        <Route
          path="/my-applications"
          element={
            <PrivateRoute>
              <MyApplications />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard/create-competition"
          element={
            <AdminRoute>
              <CreateCompetition />
            </AdminRoute>
          }
        />

      </Route>

    </Routes>


  );
}

export default App;





