import './ResumeEditor.css';

function ResumeEditorSwitch() {
    return (
        <div className='toggle-switch-container'>
            <p>CONTENT</p>
            <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            <p>COLOR</p>
        </div>
    )
}

function GeneralInformation() {
    return (
        <div className='general-style general-info'>GENERAL INFO</div>
    )
}

function EducationalExperience() {
    return (
        <div className='general-style educational-info'>EDUCATIONAL INFO</div>
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
            <ResumeEditorSwitch />
            <GeneralInformation />
            <EducationalExperience />
            <WorkExperience />
        </div>
    );
}

export default ResumeEditor;

 