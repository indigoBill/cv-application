import { useState } from 'react';


function CustomizationSection() {
    const [skills, setSkills] = useState([]);
    let skill;

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
                <input type="text" id="skill" name="skill" onChange={(e) => skill = e.target.value} />
                <button onClick={() => {
                    if(skill != ''){
                        const newSkills = [...skills, {skillName : skill, id : crypto.randomUUID()}];
                        setSkills(newSkills);
                    }
                }}>Add</button>
            </div>
        </div>
        
    )
}

export default CustomizationSection;