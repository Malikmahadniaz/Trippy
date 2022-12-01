import Navbar  from '../components/navbar/navbar';
import heroimg from "../assets/15.jpeg";
import Hero  from "../components/Hero/hero";
import Footer from "../components/footer/footer";
import Contactform from '../components/contact/contactform';

function Contact () {
    return(
        <>
         <Navbar />
         <Hero cName="hero-mid" heroimg={heroimg} title="Contact Us" btnclass="hide" />
         <Contactform />
         <Footer />
        </>
    )
}

export default Contact;