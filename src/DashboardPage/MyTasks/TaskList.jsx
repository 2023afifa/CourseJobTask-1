import { Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, status }) => {
    return (
        <Droppable droppableId={status} type="TASK">
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                        padding: 4,
                        width: 250,
                    }}
                >
                    <h3>{status}</h3>
                    {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color: 'white',
                                        ...provided.draggableProps.style,
                                    }}
                                >
                                    {task.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;