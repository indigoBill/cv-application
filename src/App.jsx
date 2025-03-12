import { useState } from 'react'
import {Resume, ResumeGeneralInformation} from './Resume.jsx'
import './App.css'

import EditorGeneralInformation from './GeneralInformation.jsx'


function App() {
  const [resumeNameValue, setResumeNameValue] = useState('');

  return (
    <>
    <EditorGeneralInformation updateResumeGI={(id, value) => {if(id=='name') setResumeNameValue(value) } } />
    <Resume>
      <ResumeGeneralInformation nameValue={ resumeNameValue } />
    </Resume>
  </>
  )
}

export default App
