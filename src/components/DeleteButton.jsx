const DeleteButton = ({id, handleDeleteTodo}) => {
    return (
        <button onClick={(e) => {
            e.stopPropagation();
            handleDeleteTodo(id);
        }}>❌</button>
    )
}

export default DeleteButton