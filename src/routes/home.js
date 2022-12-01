import Hero  from "../components/Hero/hero";
import Navbar  from '../components/navbar/navbar';
import heroimg from "../assets/12.jpeg";
import Destination from "../components/Destination/destination";
import Trip from "../components/Trip/trip";
import Footer from "../components/footer/footer";

function Home () {
    return(
        <>
        <Navbar />
        <Hero cName="hero" heroimg={heroimg} title="Your Journey Your Story" text="Choose your Favourite Destination."
        herobtntxt="Travel Plan" url="/" btnclass="show" />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}

export default Home;