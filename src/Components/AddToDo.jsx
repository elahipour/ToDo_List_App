function AddToDo({style,newtask,warningStyle,addtodo,changeHandler}) {
    return (
        <div className={style.addToDoForm}>
            <span>
                <input type='text' name='addToDoInput' value={newtask.title} onChange={(e) => changeHandler(e)} />
                <button onClick={(e) => e.target.previousSibling.value ? addtodo(e) : e.target.previousSibling.classList.add(warningStyle)}>Add ToDo</button>
            </span>
        </div>
    );
}

export default AddToDo;