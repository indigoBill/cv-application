import './ResumeEditor.css';
import './Resume.css';

function EditorGeneralInformation({ resumeGeneralInformation }) {
  
    return (
        <>
            <div className='general-style general-info'>
            <h3>GENERAL INFO</h3>
            <div className='input'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={(e) => resumeGeneralInformation(e.target.id, e.target.value)} />
            </div>
            <div className='input'>
                <label htmlFor="job-title">Job Title:</label>
                <input type="text" id="job-title" name="job-title" onChange={(e) => resumeGeneralInformation(e.target.id, e.target.value)} />
            </div>
            <div className='input'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) => resumeGeneralInformation(e.target.id, e.target.value)} />
            </div>
            <div className='input'>
                <label htmlFor="phone-number">Phone:</label>
                <input type="tel" id="phone-number" name="phone-number" onChange={(e) => resumeGeneralInformation(e.target.id, e.target.value)} />
            </div>
            </div>
        </>
    )
}


export default EditorGeneralInformation;