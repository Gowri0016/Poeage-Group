import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Companies from "./Pages/Companies";
import TermsCondition from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQ from "./Pages/FAQ";
import Carriers from "./Pages/Carriers";


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
       <Route path="/termsandconditions" element={<TermsCondition/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/carriers" element = {<Carriers/>} />





      </Routes>

      <Footer />
    </>
  );
}
