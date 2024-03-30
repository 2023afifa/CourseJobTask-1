import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateTask = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const title = data.title;
        const description = data.description;
        const deadline = data.deadline;
        const priority = data.priority;
        const name = user.displayName;
        const email = user.email;
        const photo = user.photoURL;

        const taskInfo = { title, description, deadline, priority, name, email, photo };

        fetch("https://task-management-server-xi-ashy.vercel.app/task", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => {
                console.log(res.data);
                console.log("Task added database");
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task added",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2 className="text-2xl font-medium text-center mt-10 mb-3">Create a task</h2>
            <div className="mx-10 p-10 bg-blue-300">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                        <h3 className="font-semibold">Title</h3>
                        <input className="w-full p-2 rounded-sm" type="text" {...register("title", { required: true })} name="title" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Description</h3>
                        <input className="w-full p-2 rounded-sm" type="text" {...register("description", { required: true })} name="description" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <label className="font-semibold">Task Deadline</label><br />
                        <Controller
                            name="deadline"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    className="p-2 rounded-sm"
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    placeholderText="Choose here"
                                />
                            )}
                        />
                    </div>
                    <div className="mb-8">
                        <label className="font-semibold">Priority</label><br />
                        <select className="p-2 rounded-sm" {...register("priority")}>
                            <option value="low">low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <input className="bg-blue-500 text-white font-semibold rounded px-5 py-2" type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default CreateTask;