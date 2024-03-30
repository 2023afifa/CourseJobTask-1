import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Link, useLoaderData } from "react-router-dom";
import TaskList from "./TaskList";
import MyTask from "./MyTask";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyTasks = () => {
    const { user, loading } = useContext(AuthContext);
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        fetch("https://task-management-server-xi-ashy.vercel.app/task")
            .then(res => res.json())
            .then(data => setAllTasks(data))
    }, [])

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    const myTasks = allTasks.filter(allTask => allTask.email === user.email);
    console.log(myTasks);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#8EACCD',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log("result", result);
            if (result.isConfirmed) {
                fetch(`https://task-management-server-xi-ashy.vercel.app/task/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            // const remaining = item.filter(i => i._id !== _id);
                            // setItem(remaining);
                        }
                    })
            }
        })
    }

    // const tasks = {
    //     todo: [{ id: 1, content: 'Task 1' }, { id: 2, content: 'Task 2' }],
    //     ongoing: [{ id: 3, content: 'Task 3' }, { id: 4, content: 'Task 4' }],
    //     completed: [{ id: 5, content: 'Task 5' }, { id: 6, content: 'Task 6' }],
    // };

    // const onDragEnd = (result) => {
    //     const { source, destination, draggableId } = result;

    //     // Check if the drop is in a valid destination
    //     if (!destination) {
    //         return;
    //     }

    //     // Check if the task is moved to a different list
    //     if (source.droppableId !== destination.droppableId) {
    //         // Handle moving the task between lists
    //         // Update your state accordingly
    //     }
    // };

    return (
        <div>

            {/* <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ display: 'flex' }}>
                    <TaskList tasks={tasks.todo} status="To-Do" />
                    <TaskList tasks={tasks.ongoing} status="Ongoing" />
                    <TaskList tasks={tasks.completed} status="Completed" />
                </div>
            </DragDropContext> */}

            <h2 className="text-2xl font-medium text-center mt-10 mb-3">My Tasks</h2>
            <div className="lg:flex">
                <div className="p-2 flex-1  border-2">
                    <h3 className="text-lg text-red-600 font-bold underline mx-3 mb-5">To-Do List</h3>
                    <div className="pr-3 mb-3">
                        {
                            myTasks.map(allTask => <div key={allTask._id}>
                                <div className="card bg-base-100 shadow-md rounded-sm">
                                    <div className="card-body">
                                        <h2 className="card-title">{allTask.title}</h2>
                                        <p>{allTask.description}</p>
                                        <div className="card-actions">
                                            <Link to={`/update/${allTask._id}`}><button className="btn bg-blue-500 text-white">Update</button></Link>
                                            <button onClick={() => handleDelete(allTask._id)} className="btn bg-red-500 text-white">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="p-2 flex-1 border-2">
                    <h3 className="text-lg text-yellow-600 font-bold  underline mx-3">On-Going</h3>
                </div>
                <div className="p-2 flex-1 border-2">
                    <h3 className="text-lg text-green-600 font-bold  underline mx-3">Completed</h3>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;