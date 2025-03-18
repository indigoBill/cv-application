import { useRef, useState } from 'react';

function EditorEducationalExperience() {
    const schoolName = useRef(null);
    const titleOfStudy = useRef(null);
    const startDate = useRef(null);
    const endDate = useRef(null);
    const presentCheckBox = useRef(null);

    const [errorNotice, setErrorNotice] = useState('');

    function confirmFieldValues() {

        if(schoolName.current.value === ''){
            setErrorNotice('please fill in all fields')
        }
    }

    return (
        <div className='general-style'>
            <div className='educational-info'>
                <h3>EDUCATIONAL INFO</h3>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" name="school-name" ref={schoolName} />
                </div>
                <div>
                    <label htmlFor="title-of-study">Title of Study:</label>
                    <input type="text" id="title-of-study" name="title-of-study" ref={titleOfStudy} />
                </div>
                <div className='educational-date-range'>
                    <div>
                        <label htmlFor="school-start-date">Start Date:</label>
                        <input type="date" id="school-start-date" name="school-start-date" ref={startDate} />
                    </div>
                    <div>
                        <label htmlFor="school-end-date">End Date:</label>
                        <input type="date" id="school-end-date" name="school-end-date" ref={endDate} />
                    </div>
                    <div>
                        <label htmlFor="present-checkbox">Present:</label>
                        <input type="checkbox" id="present-checkbox" name="present-checkbox" ref={presentCheckBox} />
                    </div>
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-school-btn' onClick={confirmFieldValues}>Save</button>
                <button className='add-school-btn'>Add Education</button>
            </div>
            <p>{errorNotice}</p>
        </div>
    )
}

export default EditorEducationalExperience;