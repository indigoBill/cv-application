import { useState, useRef } from 'react'
import './ResumeEditor.css';
import './Resume.css';


function ResumeGeneralInformation({values}) {
    return (
        <>
            <h1 className='resume-name'>{values.nameField}</h1>
            <h2 className='resume-job-title'>{values.jobField}</h2>
            <h2 className='resume-email'>{values.emailField}</h2>
            <h2 className='resume-phone'>{values.phoneField}</h2>
        </>
    )
}

function EditorGeneralInformation() {
    const nameRef = useRef(null);
    const jobRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const initialValues = {
        nameField : '',
        jobField : '',
        emailField : '',
        phoneField : null,
    };

    const [currentValues, setCurrentValues] = useState(initialValues);

    function getNewInputValues(){
        const updatedValues = initialValues;

        updatedValues.nameField = nameRef.current.value;
        updatedValues.jobField = jobRef.current.value;
        updatedValues.emailField = emailRef.current.value;
        updatedValues.phoneField = phoneRef.current.value;

        setCurrentValues(updatedValues);
    }
  
    return (
        <>
        <div className='general-style general-info'>
          <h3>GENERAL INFO</h3>
          <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" ref={nameRef} onChange={getNewInputValues} />
          </div>
          <div>
              <label htmlFor="job-title">Job Title:</label>
              <input type="text" id="job-title" name="job-title" ref={jobRef} onChange={getNewInputValues} />
          </div>
          <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" ref={emailRef} onChange={getNewInputValues} />
          </div>
          <div>
              <label htmlFor="phone-number">Phone:</label>
              <input type="tel" id="phone-number" name="phone-number" ref={phoneRef} onChange={getNewInputValues} />
          </div>
        </div>
        <ResumeGeneralInformation values={currentValues} />
        </>
    )
}



export default EditorGeneralInformation;