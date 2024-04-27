import React, { useEffect, useState } from 'react';
import './../styles/about.css';
import imageabout from "./../../imgs/aboutuspic.PNG"

const About = () => {
    useEffect(() => {
        document.title = "About Us"
        })
    return (
        <div className="aboutusbody">
            <div className="">
                <img src={imageabout} class=" imageabout" alt="" />
            </div>
            <div className="aboutword">
                <div className="aboutheads">
                <h1 className="storyabout">Our Story</h1>
                    <h3 className="aboutstart">Why we started it?</h3>
                    </div>
                <div>
                    <p className=" aboutparagraph"> To comprehensively open the research and learning information channel
                        for knowledge <br/>dissemination in Rwanda. BWENGE platform owned by BWENGE
                        Research and Learning  Center<br/> Limited (BWENGE R.L.C Ltd),
                        aims to achieve a mutual goal of making quality education accessible <br/>
                        to Rwandans at home and abroad. We are devoted to encourage creation and
                        sharing of knowledge <br/> information from secondary schools to high-learning institutions,
                        research organizations to enhance <br/> wisdom to future generations for creativityand innovation.
                        It is a software program designed to <br/> provide professional services of various resources with
                        unified search and navigation of Rwandan  <br/> diaspora academic literature and projects ideas, best projects
                        from Rwandan Universities and <br/> colleges (project database),
                        Bwenge MOOC (Massive online open courses) from high school, high <br/> institution and national training program.<br/><br/>
                        Furthermore, the forum stimulates the future generation's wisdom more
                        accurate, systematic, and <br/> completely explicit management and implicit
                        knowledge embedded in the specific process of work, <br/> creativity and learning.
                        We are thirsting to strengthen the research as key to develop our country <br/> through
                        innovation and creativity by connecting Rwandan students at home and abroad,
                        Rwandan <br/> private and governmental universities, different company and other research
                        institutions in Rwanda to enhance wisdom to Rwandan young generation. 

                        
                    </p>
                </div>
            </div>
                 

        </div>
    )
}
export default About;
