function EditorEducationalExperience() {
    return (
        <div className='general-style'>
            <div className='educational-info'>
                <h3>EDUCATIONAL INFO</h3>
                <div>
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" name="school-name" />
                </div>
                <div>
                    <label htmlFor="title-of-study">Title of Study:</label>
                    <input type="text" id="title-of-study" name="title-of-study" />
                </div>
                <div className='educational-date-range'>
                    <div>
                        <label htmlFor="school-start-date">Start Date:</label>
                        <input type="date" id="school-start-date" name="school-start-date" />
                    </div>
                    <div>
                        <label htmlFor="school-end-date">End Date:</label>
                        <input type="date" id="school-end-date" name="school-end-date" />
                    </div>
                    <div>
                        <label htmlFor="present-checkbox">Present:</label>
                        <input type="checkbox" id="present-checkbox" name="present-checkbox" />
                    </div>
                </div>
            </div>
            <div className='edit-btns-container'>
                <button className='save-school-btn'>Save</button>
                <button className='add-school-btn'>Add Education</button>
            </div>
        </div>
    )
}

export default EditorEducationalExperience;