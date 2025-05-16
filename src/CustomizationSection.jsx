import { useState } from 'react';


function CustomizationSection() {
    const [skills, setSkills] = useState([]);
    const [fieldValue, setFieldValue] = useState('');

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
                            return <li key={skillItem.id}>{skillItem.skillName}</li>
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