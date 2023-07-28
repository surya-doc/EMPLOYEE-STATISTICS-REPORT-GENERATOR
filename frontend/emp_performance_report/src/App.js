import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Landing from './Components/Body/Landing';
import EmpSignup from './Components/Authentication/Signup/EmpSignup';
import HrSignup from './Components/Authentication/Signup/HrSignup';
import MentorSignup from './Components/Authentication/Signup/MentorSignup';
import Login from './Components/Authentication/Login';
import Peerfeedback from './Components/FeedbackForm/Peerfeedback';
import MentorFeedback from './Components/FeedbackForm/MentorFeedback';
import CrossMentorFeedback from './Components/FeedbackForm/CrossMentorFeedback';
import HrFeedback from './Components/FeedbackForm/HrFeedback';
import PeerFeedbackOptions from './Components/FeedbackOptions/PeerFeedbackOptions';
import MentorFeedbackOptions from './Components/FeedbackOptions/MentorFeedbackOptions';
import MentorTeamFeedback from './Components/FeedbackOptions/MentorTeamFeedback';
import CrossMentorTeamFeedback from './Components/FeedbackOptions/CrossMentorTeamFeedback';
import HrFeedbackOptions from './Components/FeedbackOptions/HrFeedbackOptions';
import TeamsFeedback from './Components/FeedbackOptions/TeamsFeedback';
import OtherTeams from './Components/FeedbackOptions/OtherTeams';
import Manage from './Components/Manage/Manage';
import AddEmployee from './Components/Manage/AddEmployee';
import CreateTeam from './Components/Manage/CreateTeam';
import EmployeeDetails from './Components/DetailsForHr/EmployeeDetails';
import MentorDetails from './Components/DetailsForHr/MentorDetails';
import TeamDetails from './Components/DetailsForHr/TeamDetails';
import Details from './Components/DetailsForHr/Details';
import Members from './Components/Manage/Members';
import EmployeeUpdate from './Components/Update/EmployeeUpdate';
import EmployeeStat from './Components/Stat/EmployeeStat';
import TeamStat from './Components/TeamStat/TeamStat';

import { toast, ToastContainer } from 'react-toastify';
import PersonalUpdate from './Components/Update/PersonalUpdate';
import PasswordUpdate from './Components/Update/PasswordUpdate';
import GuardedRoute from './Components/GuardedRoute/GuardedRoute';
import AdminLogin from './Components/Admin/AdminLogin';
import Admin from './Components/Admin/Admin';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>

        {/* common routes */}
        <Route path='/' element={<Landing />} />

        <Route path='/signup/employee' element={<EmpSignup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/update' element={<PersonalUpdate />} />
        <Route path='/update/password' element={<PasswordUpdate />} />
        <Route path='/admin/login' element={<AdminLogin />} />

        {/* admin routes */}
          <Route path='/admin/addhr' element={<GuardedRoute type={"admin"} />} >
            <Route path='/admin/addhr' element={<HrSignup />} />
          </Route>
          <Route path='/admin' element={<GuardedRoute type={"admin"} />} >
            <Route path='/admin' element={<Admin />} />
          </Route>

        {/* hr routes */}

          {/* private route */}
          <Route path='/manage' element={<GuardedRoute type={"hr"} />} >
            <Route path='/manage' element={<Manage />} />
          </Route>
          <Route path='/manage/createteam' element={<GuardedRoute type={"hr"} />} >
            <Route path='/manage/createteam' element={<CreateTeam />} />
          </Route>
          <Route path='/manage/createemployee' element={<GuardedRoute type={"hr"} />} >
            <Route path='/manage/createemployee' element={<Members />} />
          </Route>
          <Route path='/manage/employeedetail' element={<GuardedRoute type={"hr"} />} >
            <Route path='/manage/employeedetail' element={<AddEmployee />} />
          </Route>
          <Route path='/hrfeedback' element={<GuardedRoute type={"hr"} />} >
            <Route path='/hrfeedback' element={<HrFeedbackOptions />} />
          </Route>
          <Route path='/feedback/hrfeedback' element={<GuardedRoute type={"hr"} />} >
            <Route path='/feedback/hrfeedback' element={<HrFeedback />} />
          </Route>
          <Route path='/hrfedback/team' element={<GuardedRoute type={"hr"} />} >
            <Route path='/hrfedback/team' element={<TeamsFeedback />} />
          </Route>
          <Route path='/hr/details' element={<GuardedRoute type={"hr"} />} >
            <Route path='/hr/details' element={<Details />} />
          </Route>
          <Route path='hr/mentordetails' element={<GuardedRoute type={"hr"} />}>
            <Route path='/hr/mentordetails' element={<MentorDetails />} />
          </Route>
          <Route path='/hr/employees' element={<GuardedRoute type={"hr"} />} >
            <Route path='/hr/employees' element={<EmployeeDetails />} />
          </Route>
          <Route path='/hr/teamdetails' element={<GuardedRoute type={"hr"} />} >
            <Route path='/hr/teamdetails' element={<TeamDetails />} />
          </Route>
          <Route path='/hr/update/employee' element={<GuardedRoute type={"hr"} />} >
            <Route path='/hr/update/employee' element={<EmployeeUpdate />} />
          </Route>

        {/* mentor routes */}
          {/* private route */}
          <Route path='/feedback/mentor' element={<GuardedRoute type={"mentor"} />} >
            <Route path='/feedback/mentor' element={<MentorFeedback />} />
          </Route>
          <Route path='/mentorfeedback' element={<GuardedRoute type={"mentor"} />} >
            <Route path='/mentorfeedback' element={<MentorFeedbackOptions />} />
          </Route>
          <Route path='/mentorfeedback/team' element={<GuardedRoute type={"mentor"} />} >
            <Route path='/mentorfeedback/team' element={<MentorTeamFeedback />} />
          </Route>
          <Route path='/mentorfeedback/crossteam' element={<GuardedRoute type={"mentor"} />} >
            <Route path='/mentorfeedback/crossteam' element={<CrossMentorTeamFeedback />} />
          </Route>
          <Route path='/mentorfeedback/crossteam/:crossteamid' element={<GuardedRoute type={"mentor"} />} >
            <Route path='/mentorfeedback/crossteam/:crossteamid' element={<OtherTeams />} />
          </Route>
          <Route path='/feedback/crossmentor' element={<GuardedRoute type={"mentor"} />} >
            <Route path='/feedback/crossmentor' element={<CrossMentorFeedback />} />
          </Route>

        {/* member routes */}
          {/* private route */}
          <Route path='/peerfeedback' element={<GuardedRoute type={"member"} />} >
            <Route path='/peerfeedback' element={<PeerFeedbackOptions />} />
          </Route>
          <Route path='/feedback/peer' element={<GuardedRoute type={"member"} />} >
            <Route path='/feedback/peer' element={<Peerfeedback />} />
          </Route>
          <Route path='/employee/statistics' element={<GuardedRoute type={"member"} />} >
            <Route path='/employee/statistics' element={<EmployeeStat />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
