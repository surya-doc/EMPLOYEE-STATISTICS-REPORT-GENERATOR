import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './FeedbackOptions.css'

function Peerfeedback() {  
  const [communication, setCommunication] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [responsibility, setResponsibility] = useState('');


  const giveCommunicationRating = (event) => {
    setCommunication(event.target.value);
  };
  const giveBehaviourRating = (event) => {
    setBehaviour(event.target.value);
  };
  const giveResponsibilityRating = (event) => {
    setResponsibility(event.target.value);
  };
  return (
    <div className="peerfeedback">
      <Navbar />
      <div className="feedbackform w-3/5 flex justify-center items-center mx-auto my-14">
        <div className='w-full relative'>
          <img className='absolute left-0 right-0' style={{zIndex: -1}} src="/feedback.png" alt="" />
          <form className='min-h-[82vh] shadow-2xl px-10 flex flex-col justify-center gap-4' style={{backgroundColor: "rgba(255, 255, 255, 0.7"}} action="">
            <h1 className='text-center pb-4 text-2xl font-semibold'>Peer's feedback</h1>
            <div className="feedbacker_name border-b-[1px] pb-2 my-4">
              <p className='pl-1'>Feedbacker's Name</p>
            </div>
            <div className="peername border-b-[1px] pb-2 my-4">
              <p className='pl-1'>Peer name</p>
            </div>
            <div className="peerid border-b-[1px] pb-2 my-4">
              <p className='pl-1'>peer id</p>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis of communication between 1 to 5">
            {/* <p></p> */}
                  <select className="input border-b-[1px] bg-[transparent] pb-2 w-full bg-[#FFF]"  style={{outline: "none"}} value={communication} onChange={giveCommunicationRating}>
                  <option value="">communication</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option2">4</option>
                  <option value="option3">5</option>
                </select>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis of behaviour between 1 to 5">
                {/* <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter your role'/> */}
                <select className="input bg-[transparent] border-b-[1px] pb-2 w-full bg-[#FFF]"  style={{outline: "none"}} value={behaviour} onChange={giveBehaviourRating}>
                  <option value="">behaviour</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option2">4</option>
                  <option value="option3">5</option>
                </select>
            </div>
            <div className='my-4 tooltip fade' data-title="Give feedback on the basis responsibility between 1 to 5">
                {/* <input className='input border-b-[1px] pb-2 w-full' type="email" style={{outline: "none"}} placeholder='enter your role'/> */}
                <select className="input bg-[transparent] border-b-[1px] pb-2 w-full bg-[#FFF]"  style={{outline: "none"}} value={responsibility} onChange={giveResponsibilityRating}>
                  <option value="">responsibility</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option2">4</option>
                  <option value="option3">5</option>
                </select>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Peerfeedback