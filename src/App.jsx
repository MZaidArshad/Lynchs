import "./App.css";
import Header from "./components/header/Header";
import SectionHeading from "./components/sectionHeading/SectionHeading";
// In your main CSS file or in App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./components/slider/Slider";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <SectionHeading heading="Results." />
      <CustomSlider />
      <About />
      <SectionHeading heading="Our team." />
      <Team />
      <Footer />
    </>
  );
}

export default App;
