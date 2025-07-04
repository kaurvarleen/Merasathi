import HeroSection from "../components/Home/Hero"
import HowItWorks from "../components/Home/HowItWork"
import SuccessStories from "../components/Home/SuccessStories"
import WhyChooseUs from "../components/Home/WhyChooseUs"
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"
import '../Stylesheet/Home.css';

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhyChooseUs />
    <SuccessStories />
    <HowItWorks />
    <Footer />
    </>
  )
}

export default Home;