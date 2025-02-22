import './ResumeEditor.css';
/*
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
*/
function GeneralInformation() {
    function editPersonalInfo(){

    }
    
    return (
        <div className='general-style general-info'>
            <h3>GENERAL INFO</h3>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="job-title">Job Title:</label>
                <input type="text" id="job-title" name="job-title" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="phone-number">Phone:</label>
                <input type="text" id="phone-number" name="phone-number" />
            </div>
            <div className='edit-btns-container'>
                <button className='save-personal-btn'>Save</button>
                <button className='edit-personal-btn' onClick={editPersonalInfo}>Edit</button>
            </div>
        </div>
    )
}

function EducationalExperience() {
    return (
        <>
            <div className='general-style educational-info'>
                <h3>EDUCATIONAL INFO</h3>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" name="school-name" />
                </div>
                <div>
                    <label htmlFor="title-of-study">Title of Study:</label>
                    <input type="text" id="title-of-study" name="title-of-study" />
                </div>
                <div className='educational-date-range'>
                    <div>
                        <label htmlFor="school-start-date">Start Date:</label>
                        <input type="date" id="school-start-date" name="school-start-date" />
                    </div>
                    <div>
                        <label htmlFor="school-end-date">End Date:</label>
                        <input type="date" id="school-end-date" name="school-end-date" />
                    </div>
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-school-btn'>Save</button>
                <button className='add-school-btn'>Add Education</button>
            </div>
        </>
    )
}

function WorkExperience() {
    return (
        <>
            <div className='general-style work-info'>
                <h3>WORK INFO</h3>
                <div>
                    <label htmlFor="company-name">Company Name:</label>
                    <input type="text" id="company-name" name="company-name" />
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" />
                </div>
                <div className='work-date-range'>
                    <div>
                        <label htmlFor="work-start-date">Start Date:</label>
                        <input type="date" id="work-start-date" name="work-start-date" />
                    </div>
                    <div>
                        <label htmlFor="work-end-date">End Date:</label>
                        <input type="date" id="work-end-date" name="work-end-date" />
                    </div>
                </div>
                <div>
                    <label htmlFor="job-description">Main Responsibilities:</label>
                    <input type="text" id="job-description" name="job-description" />
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-work-btn'>Save</button>
                <button className='add-work-btn'>Add Work</button>
            </div>
        </>
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

 