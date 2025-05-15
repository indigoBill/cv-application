import { useState } from 'react';
import CustomizationPanel from './CustomizationPanel.jsx';
import CustomizationSection from './CustomizationSection.jsx';
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

  const [displayCustomPanel, setDisplayCustomPanel] = useState(false);

  let defaultEditorDisplayCondition = 'reveal';
  let customizationEditorDisplayCondition = 'hide';

  function updateResumeGeneralInformation(identifier, newValue) {
    if(identifier == 'name') setResumeNameValue(newValue);
    if(identifier == 'job-title') setResumeJobTitleValue(newValue);
    if(identifier == 'email') setResumeEmailValue(newValue);
    if(identifier == 'phone-number') setResumePhoneValue(newValue);
  }

  if(displayCustomPanel) {
    defaultEditorDisplayCondition = 'hide';
    customizationEditorDisplayCondition = 'reveal';
  }

  return (
    <>
      <CustomizationPanel displayPanel={() => {
        if(displayCustomPanel){
          setDisplayCustomPanel(false);
        }else{
          setDisplayCustomPanel(true);
        }
        }
      } />
      <ResumeEditor>
        <div className={defaultEditorDisplayCondition}>
          <EditorGeneralInformation resumeGeneralInformation={(id, value) => updateResumeGeneralInformation(id, value) } />
          <EditorEducationalExperience resumeEducationalInformation={(educationalInformation) => {
            const newEducationalExperience = [...educationalInformation];
            setResumeEducationalValues(newEducationalExperience);
          }} />
          <EditorWorkExperience resumeWorkInformation={(workInformation) => {
            const newWorkExperience = [...workInformation];
            setResumeWorkValues(newWorkExperience);
          }}/>
        </div>
        <div className={customizationEditorDisplayCondition}>
          <CustomizationSection />
          <div>COLOR</div>
        </div>
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
