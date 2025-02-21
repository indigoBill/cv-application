import './ResumeEditor.css';

function ResumeEditorSwitch() {
    return (
        <div className='toggle-switch-container'>
            <p>CONTENT</p>
            <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            <p>CUSTOMIZE</p>
        </div>
    )
}

function GeneralInformation() {
    return (
        <div className='general-style general-info'>
            <h3>GENERAL INFO</h3>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="jobTitle">Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" />
            </div>
        </div>
    )
}

function EducationalExperience() {
    return (
        <div className='general-style educational-info'>
            <h3>EDUCATIONAL INFO</h3>
        
        </div>
    )
}

function WorkExperience() {
    return (
        <div className='general-style work-info'>WORK INFO</div>
    )
}

function ResumeEditor() {
    return (
        <div className='resume-editor-container'>
            {/* {<ResumeEditorSwitch />} */}
            <GeneralInformation />
            <EducationalExperience />
            <WorkExperience />
        </div>
    );
}

export default ResumeEditor;

 