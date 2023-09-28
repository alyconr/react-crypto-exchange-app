import FeatureSection from "../Components/FeatureSection/FeatureSection";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import InfoSection from "../Components/InfoSection/InfoSection";
import PhoneSection from "../Components/PhoneSection/PhoneSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PhoneSection />
      <FeatureSection />
      <InfoSection />
      <Footer />
    </>
  );
};

export default HomePage;
