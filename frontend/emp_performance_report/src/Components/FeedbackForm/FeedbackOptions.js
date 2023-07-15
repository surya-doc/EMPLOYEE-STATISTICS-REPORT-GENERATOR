import React from 'react'
import Navbar from '../Navbar/Navbar'
import './FeedbackOptions.css'
import { useNavigate } from 'react-router'

function FeedbackOptions() {
  const navigate = useNavigate()
  return (
    <div className="feedbackoptions">
      <Navbar />
      <div className="feedbaces flex  items-center justify-center flex-col min-h-[92vh]">
        <div className='flex'>
          <div className='feed_op bg-[#A62868] hover:scale-110 hover:rounded-md hover:bg-[#e6e6e6] hover:text-[#a62868] shadow-xl font-semibold ease transition delay-150' onClick={() => navigate('/feedback/peer')}>
            <h4>Feedback as peer</h4>
          </div>
          <div className='feed_op bg-[#A62868] hover:scale-110 hover:rounded-md hover:bg-[#e6e6e6] hover:text-[#a62868] shadow-xl font-semibold ease transition delay-150'>
            <h4>Feedback as mentor</h4>
          </div>
        </div>
        <div className='flex'>
          <div className='feed_op bg-[#A62868] hover:scale-110 hover:rounded-md hover:bg-[#e6e6e6] hover:text-[#a62868] shadow-xl font-semibold ease transition delay-150'>
            <h4>Feedback as Hr</h4>
          </div>
          <div className='feed_op bg-[#A62868] hover:scale-110 hover:rounded-md hover:bg-[#e6e6e6] hover:text-[#a62868] shadow-xl font-semibold ease transition delay-150'>
            <h4>Feedback as cross mentor</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackOptions