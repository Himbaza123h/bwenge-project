import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";
import NsangizaMainPage from "./components/pages/Nsangiza/Nsangiza";
import About from "./components/pages/About";
import Community from "./components/Community/Community";
import LongCourse from "./components/BwengeCourses/LongCourse";
import ShortCourse from "./components/BwengeCourses/ShortCouse";
import Courses from "./courses/Course";
import MoocHome from "./components/Bwenge Mooc/MoocHome";
import Mission from "./components/pages/Mission";

export default function App() {
return (
<BrowserRouter>
    <div className="body" style={{ backgroundColor: "#ffffff"}}>
    <div className="header">
        <Header />
      </div>
      <div className="Mainocontent" style={{ marginTop: "10vh" }}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/communities" element={<Community />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/mooc" element={<MoocHome />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/nsangiza" element={<NsangizaMainPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>
            <Route path="bwengecourses/longcourcse" element={<LongCourse />} />
            <Route path="bwengecourses/shortcourse" element={<ShortCourse />} />
        </Routes>
      </div>

        <div className="footer">
            <Footer />
        </div>
    </div>
</BrowserRouter>
);
}
