import { useState } from 'react'
import ResumeEditor from './ResumeEditor.jsx';
import {Resume, ResumeGeneralInformation} from './Resume.jsx'
import './App.css'

import EditorGeneralInformation from './GeneralInformation.jsx'


function App() {
  const [resumeNameValue, setResumeNameValue] = useState('');
  const [resumeJobTitleValue, setResumeJobTitleValue] = useState('');
  const [resumeEmailValue, setResumeEmailValue] = useState('');
  const [resumePhoneValue, setResumePhoneValue] = useState(null);

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
      </ResumeEditor>
      <Resume>
        <ResumeGeneralInformation nameValue={resumeNameValue} jobTitleValue={resumeJobTitleValue} emailValue={resumeEmailValue} phoneValue={resumePhoneValue}/>
      </Resume>
    </>
  )
}

export default App
