import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Landing from './Components/Body/Landing';
import EmpSignup from './Components/Authentication/Signup/EmpSignup';
import HrSignup from './Components/Authentication/Signup/HrSignup';
import MentorSignup from './Components/Authentication/Signup/MentorSignup';
import Login from './Components/Authentication/Login';
import FeedbackOptions from './Components/FeedbackForm/FeedbackOptions';
import Peerfeedback from './Components/FeedbackForm/Peerfeedback';
import MentorFeedback from './Components/FeedbackForm/MentorFeedback';
import CrossMentorFeedback from './Components/FeedbackForm/CrossMentorFeedback';
import HrFeedback from './Components/FeedbackForm/HrFeedback';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup/employee' element={<EmpSignup />} />
        <Route path='/signup/hr' element={<HrSignup />} />
        <Route path='/signup/mentor' element={<MentorSignup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feedbackoptions' element={<FeedbackOptions />} />
        <Route path='/feedback/peer' element={<Peerfeedback />} />
        <Route path='/feedback/mentor' element={<MentorFeedback />} />
        <Route path='/feedback/crossmentor' element={<CrossMentorFeedback />} />
        <Route path='/feedback/hrfeedback' element={<HrFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
