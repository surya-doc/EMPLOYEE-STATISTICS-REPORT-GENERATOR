import React from 'react'

function Members() {
    async function addMentorFeedback(event){
        event.preventDefault()
        try {
          const res = await axios.post(backend_url+'/employeeDetail/create', {empid: employeeId, name: employeeName, email: employeeEmail, password: employeePassword, address: employeeAddress, status: true});
          console.log(res);
          if(res.status === 200){
            alert("Employee created successfully");
            // navigate('/');
          }
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div>Members</div>
  )
}

export default Members