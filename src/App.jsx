import { useState } from 'react';
import CustomizationPanel from './CustomizationPanel.jsx';
import CustomizationSection from './CustomizationSection.jsx';
import ResumeEditor from './ResumeEditor.jsx';
import { Resume, ResumeGeneralInformation, ResumeObjectiveInformation, ResumeEducationalInformation, ResumeWorkInformation, ResumeSkillsInformation } from './Resume.jsx';
import './App.css';

import EditorGeneralInformation from './EditorGeneralInformation.jsx';
import EditorEducationalExperience from './EditorEducationalExperience.jsx';
import EditorWorkExperience from './EditorWorkExperience.jsx';

function App() {
  const [resumeNameValue, setResumeNameValue] = useState('');
  const [resumeJobTitleValue, setResumeJobTitleValue] = useState('');
  const [resumeEmailValue, setResumeEmailValue] = useState('');
  const [resumePhoneValue, setResumePhoneValue] = useState(null);

  const [resumeObjective, setResumeObjective] = useState('');
  const [resumeEducationalValues, setResumeEducationalValues] = useState([]);
  const [resumeWorkValues, setResumeWorkValues] = useState([]);

  const [displayCustomPanel, setDisplayCustomPanel] = useState(false);
  const [resumeSkills, setResumeSkills] = useState([]);

  let defaultEditorDisplayCondition = 'reveal';
  let customizationEditorDisplayCondition = 'hide';

  function updateResumeGeneralInformation(identifier, newValue) {
    if(identifier == 'name') setResumeNameValue(newValue);
    if(identifier == 'job-title') setResumeJobTitleValue(newValue);
    if(identifier == 'email') setResumeEmailValue(newValue);
    if(identifier == 'phone-number'){
      if(newValue !== ''){
        setResumePhoneValue(`| ${newValue}`);
      }else{
        setResumePhoneValue(newValue);
      }
    }
  }

  function loadSample() {
    const nameInput = document.querySelector('#name');
    const jobInput = document.querySelector('#job-title');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone-number');
  
    nameInput.value = 'Danielle Peters';
    jobInput.value = 'Front-End Developer';
    emailInput.value = 'email@gmail.com';
    phoneInput.value = '123-456-7890';

    updateResumeGeneralInformation('name', nameInput.value);
    updateResumeGeneralInformation('job-title', jobInput.value);
    updateResumeGeneralInformation('email', emailInput.value);
    updateResumeGeneralInformation('phone-number', phoneInput.value);
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
        }} 
      
        displaySample={(() => loadSample())}
      />
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
          <CustomizationSection resumeObjectiveInformation={(value) => setResumeObjective(value)} resumeSkillsInformation={(value) => setResumeSkills(value)} />
          <div>COLOR</div>
        </div>
      </ResumeEditor>
      <Resume>
        <ResumeGeneralInformation nameValue={resumeNameValue} jobTitleValue={resumeJobTitleValue} emailValue={resumeEmailValue} phoneValue={resumePhoneValue} />
        <ResumeObjectiveInformation objective={resumeObjective} />
        <ResumeEducationalInformation educationalValues={resumeEducationalValues} />
        <ResumeWorkInformation workValues={resumeWorkValues} />
        <ResumeSkillsInformation skillValues={resumeSkills} />
      </Resume>
    </>
  )
}

export default App
