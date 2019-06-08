import React, {useState, useEffect} from 'react';
import plus from '../../images/redplus.png'

const NotesApp = props => {
    const [notes, changeNotes] = useState([{
        title: 'Like Quinoa not rice',
        desc: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in lorem justo. '
    },{
        title: 'Prefer to meet 4-6pm.',
    }]);

    const [isEditing, changeIsEditing] = useState(false);

    const [value, setValue] = useState({
        title: '',
        desc: ''
    })

    const populateList = notes => {
        return notes.map((note, index, arr)=> {
            return(
                <div key={index} onClick={()=> removeNote(index)} >
                    <div className='note'>
                        <p>{note.title}</p>
                        <p>{note.desc}</p>
                    </div>
                    {
                        arr.length - 1 !== index ? <hr /> : null
                    }
                </div>
            )
        })
    }

    const addNote = () => {
        const newNotes = [...notes, {
            title: value.title,
            desc: value.desc
        }]

        if(value.title === '') {
            return
        }
        
        changeNotes(newNotes)
    }

    const removeNote = index => {
        const newNote = [...notes];
        newNote.splice(index,1);
        changeNotes(newNote);
        localStorage.setItem(props.name, JSON.stringify(notes));
    }

    const handleSubmit = () => {
        if (!value) return;
        addNote(value);
        setValue({
            title: '',
            desc: ''
        });
      };

    const editForm = () => {
        return (
            <form className='edit' onSubmit={handleSubmit}>
                <input 
                className='card' 
                type="text" 
                value={value.title}
                onChange={e=> setValue({
                    title: e.target.value,
                    desc: value.desc
                })}
                />
                <input 
                className='card' 
                type="text" 
                value={value.desc}
                onChange={e=> setValue({
                    title: value.title,
                    desc: e.target.value
                })}
                />
            </form>
        )
    }

    const handleClick = () => {

        isEditing && value.title === '' ? changeIsEditing(false) : changeIsEditing(true);

        handleSubmit();

        localStorage.setItem(props.name, JSON.stringify(notes));
    }

    useEffect(()=> {
        const fetchData = async () => {
            const data = await JSON.parse(localStorage.getItem(props.name));

            if(localStorage.getItem(props.name)) {
                changeNotes(data);
            }
        }
        fetchData()
    },[])


    return ( 
        <div className='card notesCard'>
            {populateList(notes)}
            {isEditing ? editForm() : null}
            <img onClick={()=>handleClick()} src={plus} alt=""/>
        </div>
     );
}
 
export default NotesApp