
const AddNote = () => {

    return(
        <div className="note new">
            <textarea placeholder= 'type' cols="10" rows="8">

            </textarea>
            <div className="note-footer">
                <small>200 remaining</small>
                <button className="save">save</button>
            </div>
        </div>
    )

}

export default AddNote