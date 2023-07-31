import React from 'react';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className='min-h-[104vh]'>
        <div className=''>
            <h1 className='error__message' style={{fontFamily: ""}}>Sorry, this page does not exist.</h1>
            <img className='mx-auto max-w-[60vw]' style={{maxHeight: "80vh"}} src="/error_page.svg" alt="" />
        </div>
    </div>
  )
}

export default ErrorPage