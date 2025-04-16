import { useState } from 'react';

const workExperienceInformation = [];
let valuesUpdated = false;

function updateWorkExperience(event, previousValues, updatePreviousValues) {
    const newFieldValues = (event.target.id == 'company-name') ? 
    {...previousValues, companyName : event.target.value} :
    (event.target.id == 'position') ?
    {...previousValues, position : event.target.value} :
    (event.target.id == 'work-start-date') ?
    {...previousValues, startDate : event.target.value} : 
    (event.target.id == 'work-end-date') ?
    {...previousValues, endDate : event.target.value} : {...previousValues, description : event.target.value};

    updatePreviousValues(newFieldValues);
}

function WorkExperienceCard({ fields, editValues, removeCard }) {
    return (
        <div>
            <h2>{fields.company}</h2>
            <button onClick={() => {
                valuesUpdated = true;
                editValues(fields.company, fields.jobTitle, fields.start, fields.end, fields.responsibilities);
            }}>Edit</button>
            <button onClick={() => {
                const cardToDelete = workExperienceInformation.find((information) => information.id == fields.id);
                let index = workExperienceInformation.indexOf(cardToDelete);
                workExperienceInformation.splice(index, 1);
                removeCard();
            }}>X</button>
        </div>
    );
}

function EditorWorkExperience({ resumeWorkInformation }) {
    const [createCard, setCreateCard] = useState(false);
    const [fieldValues, setFieldValues] = useState({companyName : '', position : '', startDate : '', endDate : '', description : '', id : ''});

    if(createCard) {
        return (
            <div className='general-style'>
                {
                    workExperienceInformation.map((information) => {
                        return <WorkExperienceCard key={information.id} fields={information} editValues={(company, jobTitle, start, end, responsibilities) => {
                                setFieldValues({companyName : company, position : jobTitle, startDate : start, endDate : end, description : responsibilities, id : information.id});
                                setCreateCard(false);
                            }} removeCard={() => {
                                resumeWorkInformation(workExperienceInformation);
                                if(workExperienceInformation.length == 0){
                                    setCreateCard(false);
                                    setFieldValues({companyName : '', position : '', startDate : '', endDate : '', description : '', id : ''});
                                }
                            }} />
                    }) 
                }
                <button className='add-work-btn' onClick={() => {
                    setCreateCard(false);
                    setFieldValues({companyName : '', position : '', startDate : '', endDate : '', description : '', id : ''});
                }}>Add Work Experience</button>
            </div>
        )
    }

    return (
        <div className='general-style'>
            <h3>WORK INFO</h3>
            <div className='work-info'>
                <div className='input'>
                    <label htmlFor="company-name">Company Name:</label>
                    <input type="text" id="company-name" name="company-name" onChange={(e) => updateWorkExperience(e, fieldValues, setFieldValues)} value={fieldValues.companyName} />
                </div>
                <div className='input'>
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" onChange={(e) => updateWorkExperience(e, fieldValues, setFieldValues)} value={fieldValues.position} />
                </div>
                <div className='work-date-range'>
                    <div className='input'>
                        <label htmlFor="work-start-date">Start Date:</label>
                        <input type="text" id="work-start-date" name="work-start-date" onChange={(e) => updateWorkExperience(e, fieldValues, setFieldValues)} value={fieldValues.startDate} />
                    </div>
                    <div className='input'>
                        <label htmlFor="work-end-date">End Date:</label>
                        <input type="text" id="work-end-date" name="work-end-date" onChange={(e) => updateWorkExperience(e, fieldValues, setFieldValues)} value={fieldValues.endDate} />
                    </div>
                </div>
                <div className='input'>
                    <label htmlFor="job-description">Description:</label>
                    <textarea type="text" id="job-description" name="job-description" onChange={(e) => updateWorkExperience(e, fieldValues, setFieldValues)} value={fieldValues.description}></textarea>
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-work-btn' onClick={() => {
                    if(valuesUpdated) {
                        const informationToUpdate = workExperienceInformation.find((information) => information.id == fieldValues.id);
                        let index = workExperienceInformation.indexOf(informationToUpdate);
                        workExperienceInformation.splice(index, 1, {company : fieldValues.companyName, jobTitle : fieldValues.position, start : fieldValues.startDate, end : fieldValues.endDate, responsibilities : fieldValues.description, id : fieldValues.id});
                        valuesUpdated = false;
                    }else {
                        const informationCollection = {
                            company : fieldValues.companyName,
                            jobTitle : fieldValues.position,
                            start : fieldValues.startDate,
                            end : fieldValues.endDate,
                            responsibilities : fieldValues.description,
                            id : crypto.randomUUID(),
                        };
    
                        workExperienceInformation.push(informationCollection);
                    }
                    resumeWorkInformation(workExperienceInformation);
                    setCreateCard(true);
                }}>Save</button>
            </div>
        </div>
    );
}

export default EditorWorkExperience;