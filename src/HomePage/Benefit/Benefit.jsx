const Benefit = () => {
    return (
        <div>
            <h2 className="text-2xl text-center font-medium mt-20 mb-10">Who Can Benefit from TaskMagnet?</h2>
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="text-center">
                    <img className="h-72 mx-auto rounded-md" src="https://i.ibb.co/X3rf25N/student.jpg" alt="" />
                    <h3 className="text-2xl font-medium mt-3">Students</h3>
                    <p className="mb-5">Organize study schedules, assignments, and coursework.</p>
                </div>
                <div className="text-center">
                    <img className="h-72 mx-auto rounded-md" src="https://i.ibb.co/VpG1jhG/developer.jpg" alt="" />
                    <h3 className="text-2xl font-medium mt-3">Developers</h3>
                    <p className="mb-5">Efficiently manage coding tasks, collaborate with team members, and streamline project workflows.</p>
                </div>
                <div className="text-center">
                    <img className="h-72 mx-auto rounded-md" src="https://i.ibb.co/k8Z2qwt/entrepreneur.jpg" alt="" />
                    <h3 className="text-2xl font-medium mt-3">Entrepreneurs</h3>
                    <p className="mb-5">Keep track of business-related tasks, appointments, and deadlines.</p>
                </div>
            </div>
        </div>
    );
};

export default Benefit;