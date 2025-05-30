import './Resume.css';

function ResumeGeneralInformation({ nameValue, jobTitleValue, emailValue, phoneValue }) {
    let displaySetting;

    if(nameValue == ''){
        displaySetting = 'hide';
    }else{
        displaySetting = 'general-design';
    }

    return (
        <div className='resume-general-information'>
            <div>
                <h1 className='resume-name'>{nameValue}</h1>
                <div className={displaySetting}></div>
            </div>
            <div className='resume-information'>
                <p className='resume-job-title'>{jobTitleValue}</p>
                <div className='resume-contact-information'>
                    <p className='resume-email'>{emailValue}</p>
                    <p className='resume-phone'>{phoneValue}</p>
                </div>
            </div>
        </div>
    )
}

function ResumeObjectiveInformation({objective}) {
    if(objective !== ''){
        return (
            <>
                <h2 className='section-header'>OBJECTIVE:</h2>
                <p>{objective}</p>
            </>
        )
    }
}

function ResumeEducationalInformation({educationalValues}) {
    if(educationalValues.length != 0){
        return (
            <>
                <h2 className='section-header'>EDUCATION:</h2>
                {
                    educationalValues.map((information) => {
                        const schoolNameValue = information.school;
                        const titleOfStudyValue = information.major;
                        const startDateValue = information.start;
                        const endDateValue = information.end;
                        let dash = '';
            
                        if(startDateValue && endDateValue != '') dash = '-';
                        
                        return (
                            <div key={information.id} className='education-section'>
                                <div className='school-date'>
                                    <p>{schoolNameValue}</p>
                                    <p>{startDateValue}{dash}{endDateValue}</p>
                                </div>
                                <p>{titleOfStudyValue}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    
}

function ResumeWorkInformation({workValues}) {
    if(workValues.length != 0){
        return (
            <>
                <h2 className='section-header'>WORK EXPERIENCE:</h2>
                {
                    workValues.map((information) => {
                        const companyNameValue = information.company;
                        const positionValue = information.jobTitle;
                        const startDateValue = information.start;
                        const endDateValue = information.end;
                        const description = information.responsibilities;
                        let dash = '';
            
                        if(startDateValue && endDateValue != '') dash = '-';
                        
                        return (
                            <div key={information.id} className='work-section'>
                                <div className='work-date'>
                                    <p>{companyNameValue}</p>
                                    <p>{startDateValue}{dash}{endDateValue}</p>
                                </div>
                                <p>{positionValue}</p>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

function ResumeSkillsInformation({skillValues}) {
    if(skillValues.length != 0){
        return (
            <>
                <h2 className='section-header'>SKILLS:</h2>
                <ul>
                    {
                        skillValues.map((information) => {
                            return (
                                <li key={information.id}>{information.skillName}</li>
                            )
                        })
                    }
                </ul>
                
            </>
        )
    }
}

function Resume({ children }) {
    return (
        <div className='resume'>
            {children}
        </div>
    )
}

export  {Resume, ResumeGeneralInformation, ResumeObjectiveInformation, ResumeEducationalInformation, ResumeWorkInformation, ResumeSkillsInformation};