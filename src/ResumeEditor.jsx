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

function WorkExperience() {
    return (
        <div className='general-style'>
            <div className='work-info'>
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
        </div>
    )
}

// function ResumeEditor() {
//     return (
//         <div className='resume-editor-container'>
//             {/* {<ResumeEditorSwitch />} */}
//             <EditorGeneralInformation />
//             <EducationalExperience />
//             <WorkExperience />
//         </div>
//     );
// }

function ResumeEditor({ children }) {
    return (
        <div className='resume-editor'>
            {children}
        </div>
    )
}

export default ResumeEditor;

 