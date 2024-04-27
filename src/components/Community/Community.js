import React, { useState, useEffect } from "react";
// import { RiCommunityLine } from "react-icons/ri";
import BwengeLogo from "../../imgs/BWENG.png";
import community from "../../imgs/community.png";
import computer from "../../imgs/computer.png";
import mechanics from "../../imgs/mechanical.png";
import skills from "../../imgs/skill.png";
import _ from "lodash";
import "./styles/communityHome.css";
// import { FaLeaf } from "react-icons/fa";

const Community = () => {
useEffect(() => {
document.title = "Community"
})



return (
<div>
    <img src={community} alt="Image..." />
    <div className="container">
        <div className="community-description">
            <span className="community-paragraph">Through Community Education, learners can develop relationships,
                teamwork spirit, and problem-solving skills to conquer our society’s diverse challenges.It is a tool to
                encourage students to self-learning. The system will rank the best content creator Star and he/she will
                have the opportunity to participate in different project ideas/Jobs.</span>
        </div>

        <div className="community-cards">
            <div className="row">
                <div className="col-md-7">
                    <button className="create-community-button"><i class="users icon"></i> Create Community</button>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">University
                                Communities</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Department
                                Communities</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Diaspora
                                Communities</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel"
                            aria-labelledby="home-tab">
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">15 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">15 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">15 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">15 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">15 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">10 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">10 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="card communities">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <img src={mechanics} class="card-img img-fluid" alt="Image..." />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body text-center">
                                            <h5 class="card-title"><b>Mechanical Engineering</b></h5>
                                            <p class="card-text">12 Members</p>
                                            <a href="#" class="join-button"><b>Join</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="custom-heading">
                        <h5 class="mb-0">TOP HEADING</h5>
                    </div>
                    <div class="card-cont card">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={skills} class="card-image img-fluid" alt="Image..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Impamvu 5 zo gushaka umutoza W’ubucuruzi</h5>
                                    <p class="card-text">Umutoza wubucuruzi afasha ubucuruzi bwawe gukemura imirimo
                                        nintego byihariye.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={skills} class="card-image img-fluid" alt="Image..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Impamvu 5 zo gushaka umutoza W’ubucuruzi</h5>
                                    <p class="card-text">Umutoza wubucuruzi afasha ubucuruzi bwawe gukemura imirimo
                                        nintego byihariye.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={skills} class="card-image img-fluid" alt="Image..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Impamvu 5 zo gushaka umutoza W’ubucuruzi</h5>
                                    <p class="card-text">Umutoza wubucuruzi afasha ubucuruzi bwawe gukemura imirimo
                                        nintego byihariye.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={skills} class="card-image img-fluid" alt="Image..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Impamvu 5 zo gushaka umutoza W’ubucuruzi</h5>
                                    <p class="card-text">Umutoza wubucuruzi afasha ubucuruzi bwawe gukemura imirimo
                                        nintego byihariye.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={skills} class="card-image img-fluid" alt="Image..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Impamvu 5 zo gushaka umutoza W’ubucuruzi</h5>
                                    <p class="card-text">Umutoza wubucuruzi afasha ubucuruzi bwawe gukemura imirimo
                                        nintego byihariye.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={skills} class="card-image img-fluid" alt="Image..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Impamvu 5 zo gushaka umutoza W’ubucuruzi</h5>
                                    <p class="card-text">Umutoza wubucuruzi afasha ubucuruzi bwawe gukemura imirimo
                                        nintego byihariye.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>
);
};

export default Community;
