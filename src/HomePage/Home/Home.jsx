import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Benefit></Benefit>
            <Footer></Footer>
        </div>
    );
};

export default Home;