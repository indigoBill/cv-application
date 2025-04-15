import { useState } from 'react';
import ResumeEditor from './ResumeEditor.jsx';
import {Resume, ResumeGeneralInformation, ResumeEducationalInformation, ResumeWorkInformation} from './Resume.jsx';
import './App.css';

import EditorGeneralInformation from './EditorGeneralInformation.jsx';
import EditorEducationalExperience from './EditorEducationalExperience.jsx';
import EditorWorkExperience from './EditorWorkExperience.jsx';

function App() {
  const [resumeNameValue, setResumeNameValue] = useState('');
  const [resumeJobTitleValue, setResumeJobTitleValue] = useState('');
  const [resumeEmailValue, setResumeEmailValue] = useState('');
  const [resumePhoneValue, setResumePhoneValue] = useState(null);

  const [resumeEducationalValues, setResumeEducationalValues] = useState([]);
  const [resumeWorkValues, setResumeWorkValues] = useState([]);

  function updateResumeGeneralInformation(identifier, newValue) {
    if(identifier == 'name') setResumeNameValue(newValue);
    if(identifier == 'job-title') setResumeJobTitleValue(newValue);
    if(identifier == 'email') setResumeEmailValue(newValue);
    if(identifier == 'phone-number') setResumePhoneValue(newValue);
  }

  return (
    <>
      <ResumeEditor>
        <EditorGeneralInformation resumeGeneralInformation={(id, value) => updateResumeGeneralInformation(id, value) } />
        <EditorEducationalExperience resumeEducationalInformation={(educationalInformation) => {
          const newEducationalExperience = [...educationalInformation];
          setResumeEducationalValues(newEducationalExperience);
        }} />
        <EditorWorkExperience resumeWorkInformation={(workInformation) => {
          const newWorkExperience = [...workInformation];
          setResumeWorkValues(newWorkExperience);
        }}/>
      </ResumeEditor>
      <Resume>
        <ResumeGeneralInformation nameValue={resumeNameValue} jobTitleValue={resumeJobTitleValue} emailValue={resumeEmailValue} phoneValue={resumePhoneValue} />
        <ResumeEducationalInformation educationalValues={resumeEducationalValues} />
        <ResumeWorkInformation workValues={resumeWorkValues} />
      </Resume>
    </>
  )
}

export default App
