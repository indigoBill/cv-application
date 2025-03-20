let schoolName, titleOfStudy, startDate, endDate;

function EditorEducationalExperience({ resumeEducationalInformation }) {
    

    return (
        <div className='general-style'>
            <h3>EDUCATIONAL INFO</h3>
            <div className='educational-info'>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" name="school-name" onChange={(e) => schoolName = e.target.value}/>
                </div>
                <div>
                    <label htmlFor="title-of-study">Title of Study:</label>
                    <input type="text" id="title-of-study" name="title-of-study" onChange={(e) => titleOfStudy = e.target.value} />
                </div>
                <div className='educational-date-range'>
                    <div>
                        <label htmlFor="school-start-date">Start Date:</label>
                        <input type="text" id="school-start-date" name="school-start-date" onChange={(e) => startDate = e.target.value} />
                    </div>
                    <div>
                        <label htmlFor="school-end-date">End Date:</label>
                        <input type="text" id="school-end-date" name="school-end-date" onChange={(e) => endDate = e.target.value} />
                    </div>
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-school-btn' onClick={() => resumeEducationalInformation(schoolName, titleOfStudy, startDate, endDate)}>Save</button>
                <button className='add-school-btn'>Add Education</button>
            </div>
        </div>
    )
}

export default EditorEducationalExperience;