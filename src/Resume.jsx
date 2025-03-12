import './Resume.css';

function ResumeGeneralInformation({ nameValue }) {
    return (
        <>
            <h1 className='resume-name'>{nameValue}</h1>
            <h2 className='resume-job-title'>2</h2>
            <h2 className='resume-email'></h2>
            <h2 className='resume-phone'></h2>
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

export  {Resume, ResumeGeneralInformation};