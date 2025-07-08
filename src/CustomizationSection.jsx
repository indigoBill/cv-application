import { useState } from 'react';


function CustomizationSection({ resumeObjectiveInformation, resumeSkillsInformation }) {
    const [skills, setSkills] = useState([]);
    const [fieldValue, setFieldValue] = useState('');

    function removeSkill(id){
        const listOfSkills = [...skills];
    
        let indexToRemove = listOfSkills.findIndex((currentSkill) => currentSkill.id === id);
        listOfSkills.splice(indexToRemove, 1);
    
        setSkills(listOfSkills);
        resumeSkillsInformation(listOfSkills);
    }

    return (
    
        <div className='general-style'>
            <div>
                <h3>Objective</h3>
                <textarea name="objective" id="objective" onChange={(e) => resumeObjectiveInformation(e.target.value)}></textarea>
            </div>
            <div>
                <h3>Skills</h3>
                <ul className="skill-container">
                    {
                        skills.map((skillItem) => {
                            return (
                                <div key={skillItem.id} className='skill'>
                                    <li>{skillItem.skillName}</li>
                                    <button className='remove-skill-btn' onClick={() => removeSkill(skillItem.id)}>x</button>
                                </div>
                            )
                        })
                    }
                </ul>
                <div className='add-skills'>
                    <input type="text" id="skill" name="skill" onChange={(e) => setFieldValue(e.target.value)} value={fieldValue} />
                    <button onClick={() => {
                        if(fieldValue != ''){
                            const newSkills = [...skills, {skillName : fieldValue, id : crypto.randomUUID()}];
                            setSkills(newSkills);
                            resumeSkillsInformation(newSkills);
                            setFieldValue('');
                        }
                    }}>Add</button>
                </div>
            </div>
        </div>
        
    )
}

export default CustomizationSection;