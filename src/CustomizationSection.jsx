import { useState } from 'react';


function CustomizationSection() {
    const [skills, setSkills] = useState([]);
    const [fieldValue, setFieldValue] = useState('');

    function removeSkill(id){
        const listOfSkills = [...skills];
    
        let indexToRemove = listOfSkills.findIndex((currentSkill) => currentSkill.id === id);
        listOfSkills.splice(indexToRemove, 1);
    
        setSkills(listOfSkills);
    }

    return (
    
        <div className='general-style'>
            <div>
                <h3>Objective</h3>
                <textarea name="objective" id="objective"></textarea>
            </div>
            <div>
                <h3>Skills</h3>
                <ul className="skill-container">
                    {
                        skills.map((skillItem) => {
                            return (
                                <div key={skillItem.id}>
                                    <li>{skillItem.skillName}</li>
                                    <button onClick={() => removeSkill(skillItem.id)}>x</button>
                                </div>
                            )
                        })
                    }
                </ul>
                <input type="text" id="skill" name="skill" onChange={(e) => setFieldValue(e.target.value)} value={fieldValue} />
                <button onClick={() => {
                    if(fieldValue != ''){
                        const newSkills = [...skills, {skillName : fieldValue, id : crypto.randomUUID()}];
                        setSkills(newSkills);
                        setFieldValue('');
                    }
                }}>Add</button>
            </div>
        </div>
        
    )
}

export default CustomizationSection;