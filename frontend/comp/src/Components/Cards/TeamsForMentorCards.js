import React from 'react'
import { useNavigate } from 'react-router'

function TeamsForMentorCards({team}) {    
    const navigate = useNavigate();

  return (
    <div className="team flex bg-[#faeaf2] my-2 py-1 cursor-pointer" onClick={(event) => navigate('/mentorfeedback/crossteam/'+team.teamid, {state: team})}>
        <h4 className='w-1/4 text-center'>{team.teamid}</h4>
        <p className='w-1/4 text-center'>{team.mentorid}</p>
        <p className='w-2/4 text-center text-sm capitalised px-2'>{team.team_description}</p>
    </div>
  )
}

export default TeamsForMentorCards