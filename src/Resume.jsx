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
    return (
        <>
            {
                educationalValues.map((information) => {
                    const schoolNameValue = information.school;
                    const titleOfStudyValue = information.major;
                    const startDateValue = information.start;
                    const endDateValue = information.end;
                    let dash = '';
        
                    if(startDateValue && endDateValue != null) dash = '-';
                    
                    return (
                        <div key={information.id}>
                            <h1>{schoolNameValue}</h1>
                            <h2>{titleOfStudyValue}</h2>
                            <h2>{startDateValue}{dash}{endDateValue}</h2>
                        </div>
                    )
                })
            }
       
        </>
        
    )
}

function ResumeWorkInformation({workValues}) {
    return (
        <>
            {
                workValues.map((information) => {
                    const companyNameValue = information.company;
                    const positionValue = information.jobTitle;
                    const startDateValue = information.start;
                    const endDateValue = information.end;
                    const description = information.responsibilities;
                    let dash = '';
        
                    if(startDateValue && endDateValue != null) dash = '-';
                    
                    return (
                        <div key={information.id}>
                            <h1>{companyNameValue}</h1>
                            <h2>{positionValue}</h2>
                            <h2>{startDateValue}{dash}{endDateValue}</h2>
                            <h2>{description}</h2>
                        </div>
                    )
                })
            }
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

export  {Resume, ResumeGeneralInformation, ResumeEducationalInformation, ResumeWorkInformation};