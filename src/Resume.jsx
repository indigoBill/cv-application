import './Resume.css';

function ResumeGeneralInformation({ nameValue, jobTitleValue, emailValue, phoneValue }) {
    return (
        <>
            <h1 className='resume-name'>{nameValue}</h1>
            <h2 className='resume-job-title'>{jobTitleValue}</h2>
            <h2 className='resume-email'>{emailValue}</h2>
            <h2 className='resume-phone'>{phoneValue}</h2>
        </>
    )
}

function ResumeEducationalInformation({schoolValue}) {
    return (
        <>
            <h1>{schoolValue}</h1>
        </>
    )
}

function Resume({ children }) {
    return (
        <div className='resume'>
            {children}
        </div>
    )
}

export  {Resume, ResumeGeneralInformation, ResumeEducationalInformation};