import Navbar  from '../components/navbar/navbar';
import heroimg from "../assets/8.jpg";
import Hero  from "../components/Hero/hero";
import Footer from "../components/footer/footer";
import Trip from '../components/Trip/trip';

function Services () {
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid" heroimg={heroimg} title="Services" btnclass="hide" />
        <Trip />
        <Footer />
        </>
    )
}

export default Services;