function TaskItem({ task, toggleTask }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.title}
            </span>
        </div>
    );
}

export default TaskItem;
