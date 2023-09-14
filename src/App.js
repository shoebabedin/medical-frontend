import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Layout from "./components/layout/Layout";
import AddReport from "./pages/AddReport";
import AllReport from "./pages/AllReport";
import CompleteReport from "./pages/CompleteReport";
import CompleteReportEdit from "./pages/CompleteReportEdit";
import CompleteReportView from "./pages/CompleteReportView";
import DoctorList from "./pages/DoctorList";
import EditAccess from "./pages/EditAccess";
import EditReport from "./pages/EditReport";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import HospitalList from "./pages/HospitalList";
import Login from "./pages/Login";
import NewReportEntry from "./pages/NewReportEntry";
import NewReportPrepare from "./pages/NewReportPrepare";
import NewUserRequest from "./pages/NewUserRequest";
import NoPage from "./pages/NoPage";
import ReceivedReport from "./pages/ReceivedReport";
import ReceivedReportView from "./pages/ReceivedReportView";
import ReportFormat from "./pages/ReportFormat";
import ReportFormatEdit from "./pages/ReportFormatEdit";
import ReportFormatView from "./pages/ReportFormatView";
import SendReport from "./pages/SendReport";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add-new-report" element={<AddReport />} />
            <Route path="sent-report" element={<SendReport />} />
            <Route path="complete-report" element={<CompleteReport />} />
            <Route
              path="complete-report-view"
              element={<CompleteReportView />}
            />
            <Route path="edit-report" element={<EditReport />} />
            <Route path="all-report" element={<AllReport />} />
            <Route path="doctor-list" element={<DoctorList />} />
            <Route path="hospital-list" element={<HospitalList />} />
            <Route path="new-user-request" element={<NewUserRequest />} />
            <Route path="report-format" element={<ReportFormat />} />
            <Route path="report-format-view" element={<ReportFormatView />} />
            <Route path="report-format-edit" element={<ReportFormatEdit />} />
            <Route path="edit-access" element={<EditAccess />} />
            <Route path="received-report" element={<ReceivedReport />} />
            <Route path="new-report-prepare" element={<NewReportPrepare />} />
            <Route path="new-report-entry" element={<NewReportEntry />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="complete-report-edit" element={<CompleteReportEdit />} />
          <Route path="received-report-view" element={<ReceivedReportView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
