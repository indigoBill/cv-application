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

function ResumeEducationalInformation({educationalValues}) {
    const schoolNameValue = educationalValues[0];
    const titleOfStudyValue = educationalValues[1];
    const startDateValue = educationalValues[2];
    const endDateValue = educationalValues[3];
    let dash = '';

    if(startDateValue && endDateValue !== '') dash = '-';

    return (
        <>
            <h1>{schoolNameValue}</h1>
            <h2>{titleOfStudyValue}</h2>
            <h2>{startDateValue + dash + endDateValue}</h2>
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