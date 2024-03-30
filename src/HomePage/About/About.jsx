import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold text-center mt-5">Know Us</h2>
            <img className="w-3/4 mx-auto my-5 rounded-sm" src="https://i.ibb.co/Kqv8mCY/team.jpg" alt="" />
            <p className="text-lg font-medium mx-10">Embark on a transformative journey with TaskMagnet, where the art of productivity meets simplicity. Rooted in the belief that efficient task management empowers individuals, TaskMagnet is more than just a tool—it's your personal command center for conquering goals. From meticulous to-do lists to seamlessly navigating ongoing projects and celebrating triumphant completions, TaskMagnet is designed to adapt to your workflow. Founded on principles of user-centric design and enhanced by the latest in technology, our platform is crafted to elevate the way you work. Meet the brains behind the operation, a team passionate about turning chaos into organized brilliance. But this isn't just about us; it's about you and your journey toward unparalleled productivity. TaskMagnet is your ally, your guide, and your companion on the path to achieving more. Welcome to a world where tasks align effortlessly, deadlines become manageable, and success is a daily occurrence. TaskMagnet: Organize, Prioritize, Thrive.</p>
            <Footer></Footer>
        </div>
    );
};

export default About;