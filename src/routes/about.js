import Hero  from "../components/Hero/hero";
import Navbar  from '../components/navbar/navbar';
import heroimg from "../assets/8.jpg";
import Footer from "../components/footer/footer";
import AboutUs from "../components/about/aboutus";

function About () {
    return(
        <>
          <Navbar />
          <Hero cName="hero-mid" heroimg={heroimg} title="About Us" btnclass="hide" />
          <AboutUs />
          <Footer />
        </>
    )
}

export default About;