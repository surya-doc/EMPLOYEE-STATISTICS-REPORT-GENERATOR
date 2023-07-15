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

function App() {
  return (
    <div className="App">
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
        <Route path='/hrfeedback' element={<HrFeedbackOptions />} />
        <Route path='/feedback/peer' element={<Peerfeedback />} />
        <Route path='/feedback/mentor' element={<MentorFeedback />} />
        <Route path='/feedback/crossmentor' element={<CrossMentorFeedback />} />
        <Route path='/feedback/hrfeedback' element={<HrFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
