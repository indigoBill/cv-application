import { useState } from 'react';
import ResumeEditor from './ResumeEditor.jsx';
import {Resume, ResumeGeneralInformation, ResumeEducationalInformation} from './Resume.jsx';
import './App.css';

import EditorGeneralInformation from './EditorGeneralInformation.jsx';
import EditorEducationalExperience from './EditorEducationalExperience.jsx';
import EditorWorkExperience from './EditorWorkExperience.jsx';


function App() {
  const [resumeNameValue, setResumeNameValue] = useState('');
  const [resumeJobTitleValue, setResumeJobTitleValue] = useState('');
  const [resumeEmailValue, setResumeEmailValue] = useState('');
  const [resumePhoneValue, setResumePhoneValue] = useState(null);

  const [resumeSchoolName, setResumeSchoolName] = useState('');

  function updateResumeGeneralInformation(identifier, newValue) {
    if(identifier == 'name') setResumeNameValue(newValue);
    if(identifier == 'job-title') setResumeJobTitleValue(newValue);
    if(identifier == 'email') setResumeEmailValue(newValue);
    if(identifier == 'phone-number') setResumePhoneValue(newValue);
  }

  function updateResumeEducationalInformation(nameOfSchool) {
    setResumeSchoolName(nameOfSchool);
  }

  return (
    <>
      <ResumeEditor>
        <EditorGeneralInformation resumeGeneralInformation={(id, value) => updateResumeGeneralInformation(id, value) } />
        <EditorEducationalExperience resumeEducationalInformation={(schoolName) => updateResumeEducationalInformation((schoolName))} />
        <EditorWorkExperience />
      </ResumeEditor>
      <Resume>
        <ResumeGeneralInformation nameValue={resumeNameValue} jobTitleValue={resumeJobTitleValue} emailValue={resumeEmailValue} phoneValue={resumePhoneValue}/>
        <ResumeEducationalInformation schoolValue={resumeSchoolName} />
      </Resume>
    </>
  )
}

export default App
