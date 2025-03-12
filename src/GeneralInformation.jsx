import './ResumeEditor.css';
import './Resume.css';

function EditorGeneralInformation({ updateResumeGI }) {
  
    return (
        <>
            <div className='general-style general-info'>
            <h3>GENERAL INFO</h3>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={(e) => updateResumeGI(e.target.id, e.target.value)} />
            </div>
            <div>
                <label htmlFor="job-title">Job Title:</label>
                <input type="text" id="job-title" name="job-title" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="phone-number">Phone:</label>
                <input type="tel" id="phone-number" name="phone-number" />
            </div>
            </div>
        </>
    )
}


export default EditorGeneralInformation;