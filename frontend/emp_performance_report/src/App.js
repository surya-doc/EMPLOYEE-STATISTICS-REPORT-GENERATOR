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
// import CreateMentor from './Components/Manage/CreateMentor';
import EmployeeDetails from './Components/DetailsForHr/EmployeeDetails';
import MentorDetails from './Components/DetailsForHr/MentorDetails';
import TeamDetails from './Components/DetailsForHr/TeamDetails';
import Details from './Components/DetailsForHr/Details';
import Members from './Components/Manage/Members';
import EmployeeUpdate from './Components/Update/EmployeeUpdate';
import EmployeeStat from './Components/Stat/EmployeeStat';

import { toast, ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup/employee' element={<EmpSignup />} />
        <Route path='/signup/hr' element={<HrSignup />} />
        <Route path='/signup/mentor' element={<MentorSignup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/peerfeedback' element={<PeerFeedbackOptions />} />
        <Route path='/mentorfeedback' element={<MentorFeedbackOptions />} />
        <Route path='/mentorfeedback/team' element={<MentorTeamFeedback />} />
        <Route path='/mentorfeedback/crossteam' element={<CrossMentorTeamFeedback />} />
        <Route path='/mentorfeedback/crossteam/:crossteamid' element={<OtherTeams />} />
        <Route path='/hrfeedback' element={<HrFeedbackOptions />} />
        <Route path='/feedback/peer' element={<Peerfeedback />} />
        <Route path='/feedback/mentor' element={<MentorFeedback />} />
        <Route path='/feedback/crossmentor' element={<CrossMentorFeedback />} />
        <Route path='/feedback/hrfeedback' element={<HrFeedback />} />
        <Route path='/hrfedback/team' element={<TeamsFeedback />} />

        <Route path='/hr/details' element={<Details />} />
        <Route path='/hr/employees' element={<EmployeeDetails />} />
        <Route path='/hr/mentordetails' element={<MentorDetails />} />
        <Route path='/hr/teamdetails' element={<TeamDetails />} />

        <Route path='/manage' element={<Manage />} />
        <Route path='/manage/employeedetail' element={<AddEmployee />} />
        <Route path='/manage/createteam' element={<CreateTeam />} />
        <Route path='/manage/createemployee' element={<Members />} />

        <Route path='/hr/update/employee' element={<EmployeeUpdate />} />

        <Route path='/employee/statistics' element={<EmployeeStat />} />
      </Routes>
    </div>
  );
}

export default App;
