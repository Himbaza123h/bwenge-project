import React, { useEffect } from "react";
import "../styles/missions.css";
import imgmission from "../../imgs/picmission.PNG";

const Mission = () => {
useEffect(() => {
document.title = "Our Misson"
})
return (
<div className="missionbody">
    <div className="missionPicture"></div>
    <div className="missitem">
        <div className="missionhead">
            <h1 className="ourmission">Our Mission</h1>
            <p className="mipargra">What’s our vision? </p>
        </div>
        <div className="misparag">
            <p>
                BWENGE aims to systematically and customize the knowledge for the
                scholars and industrial field with the dreams of innovation and
                creativity to become future change-makers.<br /><br />
                Making our future generation at home and globally productive. The
                research and professional learning are the main goals as the younger
                generation thirsts to make changes in the future.
            </p>
        </div>
    </div>
</div>
);
};

export default Mission;
