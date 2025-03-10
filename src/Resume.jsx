import './Resume.css';

function ResumeGeneralInformation() {
    return (
        <>
            <h1 className='resume-name'>1</h1>
            <h2 className='resume-job-title'>2</h2>
            <h2 className='resume-email'></h2>
            <h2 className='resume-phone'></h2>
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