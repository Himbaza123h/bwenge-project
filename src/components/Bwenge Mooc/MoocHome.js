import React, { useEffect } from 'react';

import "./styles/mooc.css";

const Mooc = () => {
    useEffect(() => {
        document.title = "Mooc Home"
        })
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="text-center mocc-text">
                            <h2 className="mb-4 mooc-title fw-bold">Bwenge Massive Online Open
                                Courses(MOOC)</h2>
                            <p className="mooc-paragraph">Bwenge MOOC is Rwanda online teaching model
                                with remarkable efficient for students, teachers
                                and institutions. It will assist and solve the series
                                problems faced by traditional education, such as low classroom efficiency, low student and teachers’ enthusiasm, and high offline teaching cost.</p>
                            <button className="start-button mt-3">GET STARTED</button>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="text-center">
                            <img  alt="Image" className="banner img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <button className="active-tab mt-3">Online Teaching Platform</button>
                    </div>
                    <div className="col-md-4">
                        <h5>Customized Teaching Platform Solution</h5>
                    </div>
                    <div className="col-md-4">
                        <h5>
                            Curicculum Resource Construction Plan
                        </h5>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-between align-items-end'>
                            <figure className="text-center">
                                <img  alt="college" />
                                <figcaption>College</figcaption>
                            </figure>
                            <hr className="my-0" />
                            <figure className="text-center">
                                <img  alt="teacher" />
                                <figcaption>Teacher</figcaption>
                            </figure>
                            <hr className="my-0" />
                            <figure className="text-center">
                                <img  alt="student" />
                                <figcaption>Student</figcaption>
                            </figure>
                        </div>
                        <img  />
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='courses-card card'>
                            <div className='card-body'>
                                <h5 class="card-title"><b>Registration and enrollment of students in course</b></h5>
                                <p class="card-text">The registration for staff, teachers, students, and guests is clear with email and password only. Log in directly with your account and you will be directly directed to the page according to your identity..</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='courses-card card'>
                            <div className='card-body'>
                                <h5 class="card-title"><b>Courses preparation</b></h5>
                                <p class="card-text">The registration for staff, teachers, students, and guests is clear with email and password only. Log in directly with your account and you will be directly directed to the page according to your identity..</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='courses-card card'>
                            <div className='card-body'>
                                <h5 class="card-title"><b>Teaching model</b></h5>
                                <p class="card-text">The registration for staff, teachers, students, and guests is clear with email and password only. Log in directly with your account and you will be directly directed to the page according to your identity..</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='courses-card card'>
                            <div className='card-body'>
                                <h5 class="card-title"><b>Course evaluation</b></h5>
                                <p class="card-text">The registration for staff, teachers, students, and guests is clear with email and password only. Log in directly with your account and you will be directly directed to the page according to your identity..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mooc-banner-container">
                <img  className='mooc-banner' alt="MOOC Banner" />
                <div className="overlay">
                    <div className="text-container">
                        <h2>GET STARTED NOW!</h2>
                        <p>You can start MOOCs by registering or logging in to our platform</p>
                        <button className='signup-btn'>Login / Register</button>
                    </div>
                </div>
            </div>
            <div>
                <span className='title'>PARTNER UNIVERSITIES</span>
            </div>

            <div className="container mt-5">
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>
                        <img  alt="Logo" />
                    </div>
                    <div className='col-md-3'>
                        <img  alt="Logo" />
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>
                        <img  alt="Logo" />
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div>
                    <span className='title'>M&B</span><br />
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <b>Traditional teaching model</b>
                        <ol>
                            <li>Class management for both teachers and students are time consuming</li>
                            <li>Workload for the teachers</li>
                            <li>Class teaching and power point notes shared, power teaching environment</li>
                            <li>Less communication and power evaluation</li>
                            <li>Old technology makes the system more complex and very slow</li>
                        </ol>
                    </div>
                    <div className='col-md-6'>
                        <b>Bwenge MOOC</b>
                        <ol>
                            <li>Remarkable efficiency for class management</li>
                            <li>Easy life for teacher, time for research</li>
                            <li>Preview and review of the content, Pre-recorded has greatly impacted the teaching model</li>
                            <li>Interaction makes learning perfect</li>
                            <li>High speed technology software’s makes life easy</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <span className='title'>How to use BWENGE MOOC</span><br />
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <ol>
                            <li>Register and sign MOU with BWENGE RESEARCH AND LEARNING CENTER</li>
                            <li>The technical team will offer you the system and maintain it</li>
                            <li>Free training</li>
                        </ol>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
    );
}

export default Mooc;
