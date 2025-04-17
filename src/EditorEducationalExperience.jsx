import { useState } from 'react';

const educationalExperienceInformation = [];
let valuesUpdated = false;

function updateEducationalExperience(event, previousValues, updatePreviousValues) {
    const newFieldValues = (event.target.id == 'school-name') ? 
    {...previousValues, schoolName : event.target.value} :
    (event.target.id == 'title-of-study') ?
    {...previousValues, titleOfStudy : event.target.value} :
    (event.target.id == 'school-start-date') ?
    {...previousValues, startDate : event.target.value} : {...previousValues, endDate : event.target.value};

    updatePreviousValues(newFieldValues);
}

function EducationalExperienceCard({ fields, editValues, removeCard }) {
    return (
        <div>
            <h2>{fields.school}</h2>
            <button onClick={() => {
                valuesUpdated = true;
                editValues(fields.school, fields.major, fields.start, fields.end);
            }}>Edit</button>
            <button onClick={() => {
                const cardToDelete = educationalExperienceInformation.find((information) => information.id == fields.id);
                let index = educationalExperienceInformation.indexOf(cardToDelete);
                educationalExperienceInformation.splice(index, 1);
                removeCard();
            }}>X</button>
        </div>
    );
}

function EditorEducationalExperience({ resumeEducationalInformation }) {
    const [createCard, setCreateCard] = useState(false);
    const [fieldValues, setFieldValues] = useState({schoolName : '', titleOfStudy : '', startDate : '', endDate : '', id : ''});

    if(createCard) {
        return (
            <div className='general-style'>
                {
                    educationalExperienceInformation.map((information) => {
                        return <EducationalExperienceCard key={information.id} fields={information} editValues={(school, major, start, end) => {
                                setFieldValues({schoolName : school, titleOfStudy : major, startDate : start, endDate : end, id : information.id});
                                setCreateCard(false);
                            }} removeCard={() => {
                                resumeEducationalInformation(educationalExperienceInformation);
                                if(educationalExperienceInformation.length == 0){
                                    setCreateCard(false);
                                    setFieldValues({schoolName : '', titleOfStudy : '', startDate : '', endDate : '', id : ''});
                                }
                            }} />
                    })
                }
                <button className='add-school-btn' onClick={() => {
                    setCreateCard(false);
                    setFieldValues({schoolName : '', titleOfStudy : '', startDate : '', endDate : '', id : ''});
                }}>Add Educational Experience</button>
            </div>
        );
    }

    return (
        <div className='general-style'>
            <h3>Educational Experience</h3>
            <div className='educational-info'>
                <div className='input'>
                    <label htmlFor="school-name">School Name</label>
                    <input type="text" id="school-name" name="school-name" onChange={(e) => updateEducationalExperience(e, fieldValues, setFieldValues)} value={fieldValues.schoolName} />
                </div>
                <div className='input'>
                    <label htmlFor="title-of-study">Title of Study</label>
                    <input type="text" id="title-of-study" name="title-of-study" onChange={(e) => updateEducationalExperience(e, fieldValues, setFieldValues)} value={fieldValues.titleOfStudy} />
                </div>
                <div className='educational-date-range'>
                    <div className='input'>
                        <label htmlFor="school-start-date">Start Date</label>
                        <input type="text" id="school-start-date" name="school-start-date" onChange={(e) => updateEducationalExperience(e, fieldValues, setFieldValues)} value={fieldValues.startDate} />
                    </div>
                    <div className='input'>
                        <label htmlFor="school-end-date">End Date</label>
                        <input type="text" id="school-end-date" name="school-end-date" onChange={(e) => updateEducationalExperience(e, fieldValues, setFieldValues)} value={fieldValues.endDate} />
                    </div>
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-school-btn' onClick={() => {
                    if(valuesUpdated) {
                        const informationToUpdate = educationalExperienceInformation.find((information) => information.id == fieldValues.id);
                        let index = educationalExperienceInformation.indexOf(informationToUpdate);
                        educationalExperienceInformation.splice(index, 1, {school : fieldValues.schoolName, major : fieldValues.titleOfStudy, start : fieldValues.startDate, end : fieldValues.endDate, id : fieldValues.id});
                        valuesUpdated = false;
                    }else {
                        const informationCollection = {
                            school : fieldValues.schoolName,
                            major : fieldValues.titleOfStudy,
                            start : fieldValues.startDate,
                            end : fieldValues.endDate,
                            id : crypto.randomUUID(),
                        };
    
                        educationalExperienceInformation.push(informationCollection);
                    }
                    resumeEducationalInformation(educationalExperienceInformation);
                    setCreateCard(true);
                }}>Save</button>
            </div>
        </div>
    );
}

export default EditorEducationalExperience;