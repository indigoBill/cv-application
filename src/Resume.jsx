import './Resume.css';

function ResumeGeneralInformation() {
    return (
        <>
            <h1 className='resume-name'>NAME</h1>
            <h2 className='resume-job-title'>JOB TITLE</h2>
            <h3 className='resume-email'>EMAIL</h3>
            <h3 className='resume-phone'>PHONE</h3>
        </>
    )
}

function Resume() {
    return (
        <div className='resume'>
            <ResumeGeneralInformation />
        </div>
       
    )
}

export default Resume;