const FiltersButton = ({ style, toDo, completed, uncompleted, allTasks }) => {
console.log(toDo)
    return (
        <>
            <div className={style.options}>
                <div className={style.filters}>
                    <p
                        onClick={(e) => completed(e)}>Completed
                        <span>
                            {toDo.filter(task => task.status === true).length}
                        </span>
                    </p>
                    <p
                        onClick={ (e)=>uncompleted(e)}>UnCompleted
                        <span>
                            {toDo.filter(task => task.status === false).length}
                        </span>
                    </p>
                    <p
                        onClick={(e) => allTasks(e)}>All
                        <span>{toDo.length}</span></p>
                </div>
            </div></>
    )
}

export default FiltersButton;