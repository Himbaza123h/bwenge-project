import React, { useEffect, useState } from 'react';
import bwengeIntro from "./../../imgs/newcareer.png";
import twiyubake1 from "./../../imgs/rw1.PNG";
import twiyubake2 from "./../../imgs/rw2.PNG";
import twiyubake3 from "./../../imgs/rw3.PNG";
import book1 from "./../../imgs/book3.png";
import book2 from "./../../imgs/book2.png";
import book3 from "./../../imgs/book1.png";
import bookp from "./../../imgs/bookp.PNG";
import skills from "./../../imgs/skills.jpg";
import par1 from "./../../imgs/par1.png"
import par2 from "./../../imgs/par2.png"
import par3 from "./../../imgs/par3.png"
import mobile from "./../../imgs/mobile.PNG"
import message1 from "./../../imgs/message.PNG"
import address1 from "./../../imgs/address.PNG"
import courseHero from "./../../imgs/ubumenyi.png";
import computer from "./../../imgs/computer.png";
import vision from "./../../imgs/vision.jpg";
import coding from "./../../imgs/coding.jpg";

import trending from "./../../imgs/svg/trending.svg";
import bookstore from "./../../imgs/svg/bookstore.svg";
import headings from "./../../imgs/svg/headings.svg";

import like from "../../imgs/svg/like.svg";
import eye from "./../../imgs/svg/eye.svg";
import chatting from "./../../imgs/svg/chatting.svg";

import slide from "./../../imgs/ai.jpeg";

import "../styles/home.css";
import "../styles/animate.css";

const Home = () => {
    useEffect(() => {
        document.title = "Bwenge Courses"
    })
    const [projectChoice, setprojectChoice] = useState("diaspora");

    return (

        <div>
            <div className="overlay-container">
                <img src={slide} className='sliding' alt="Slide" />
                <div className="over-lay">
                    <div className='text-slide'>
                        <h2>Ibikoresho 5 bya AI ugomba<br /> kumenya 2023</h2>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <div className="mainHome">
                <section class="bwengeNews">
                    <div>
                        <div className="trending">
                            <img src={trending} alt="" srcSet="" />
                            <span className="trending-title">TRENDING</span>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Uburyo 10 wakorera $10 yawe kuri internet</b></h5>
                                        <p class="card-text">Artificial Intelligence (AI) iri guhindura byihuse ubucuruzi
                                            n’inganda kwisi yose</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                                <span className="date">2023-01-12</span>
                                            </div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />
                                                <img src={eye} alt="icon" />
                                                <img src={chatting} alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src={skills} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Uburyo 10 wakorera $10 yawe kuri internet</b></h5>
                                        <p class="card-text">Artificial Intelligence (AI) iri guhindura byihuse ubucuruzi
                                            n’inganda kwisi yose</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                                <span className="date">2023-01-12</span>
                                            </div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />
                                                <img src={eye} alt="icon" />
                                                <img src={chatting} alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src={computer} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Uburyo 10 wakorera $10 yawe kuri internet</b></h5>
                                        <p class="card-text">Artificial Intelligence (AI) iri guhindura byihuse ubucuruzi
                                            n’inganda kwisi yose</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                                <span className="date">2023-01-12</span>
                                            </div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />
                                                <img src={eye} alt="icon" />
                                                <img src={chatting} alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src={skills} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Uburyo 10 wakorera $10 yawe kuri internet</b></h5>
                                        <p class="card-text">Artificial Intelligence (AI) iri guhindura byihuse ubucuruzi
                                            n’inganda kwisi yose</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                                <span className="date">2023-01-12</span>
                                            </div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />
                                                <img src={eye} alt="icon" />
                                                <img src={chatting} alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="headings-section">
                        <div className="headings">
                            <img src={headings} alt="" srcSet="" />
                            <span className="headings-title">HEADINGS</span>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div class="cards">
                                    <img class="card-img-top" src={vision} alt="image" />
                                    <div class="cards-body">
                                        <span className="heading-date">2024-01-12</span>
                                        <h5 class="card-title"><b>Fungura ubushobozi bwawe hamwe no kunoza intego zawe</b></h5>
                                        <p class="card-text">Hagarika ibirangaza</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="cards">
                                    <img class="card-img-top" src={coding} alt="image" />
                                    <div class="cards-body">
                                        <span className="heading-date">2024-01-12</span>
                                        <h5 class="card-title"><b>Fungura ubushobozi bwawe hamwe no kunoza intego zawe</b></h5>
                                        <p class="card-text">Hagarika ibirangaza</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="cards">
                                    <img class="card-img-top" src={vision} alt="image" />
                                    <div class="cards-body">
                                        <span className="heading-date">2024-01-12</span>
                                        <h5 class="card-title"><b>Fungura ubushobozi bwawe hamwe no kunoza intego zawe</b></h5>
                                        <p class="card-text">Hagarika ibirangaza</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="cards">
                                    <img class="card-img-top" src={coding} alt="image" />
                                    <div class="cards-body">
                                        <span className="heading-date">2024-01-12</span>
                                        <h5 class="card-title"><b>Fungura ubushobozi bwawe hamwe no kunoza intego zawe</b></h5>
                                        <p class="card-text">Hagarika ibirangaza</p>
                                        <div>
                                            <div className="button-container">
                                                <a href="#" className="readmore btn">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <div className="storebook">
                    <div>
                        <img src={bookstore} class="storeimg" alt="" srcSet="" />
                        <span className="headingbookstore">BOOK STORE</span>
                    </div>
                </div>

                <div class=" book ">
                    <div class="#">
                        <img src={book1} class="bookimg " alt="" />
                        <div class="p2 paragarph">Readmore</div>
                    </div>
                    <div class="#">
                        <img src={book2} class=" #" alt="" />
                        <div class="p2 paragarphii">Readmore</div>
                    </div>

                    <div class="bookimu">
                        <img src={book2} class=" bookimg" alt="" />
                        <div class="p2 paragarphii">Read more</div>
                    </div>


                    <div class="bookimuu">
                        <img src={book3} class="bookimg " alt="" />
                        <div class="p2 paragarphi ">Readmore</div>
                    </div>


                </div>

                <div className="bwengeintro">
                    <div className="header-image">
                        <img className=" imag1 " data-wow-duration="3s" data-wow-delay="0.6s" src={bwengeIntro}></img>
                    </div>
                    <div className="small_header mt-md-5">
                        <h3 className="newcareerheading">LAUNCH YOUR NEW CAREER WITH <br />A PROFESSIONAL SKILLS ON BWENGE</h3>
                        <br />
                        <p className="newcareerpara">We focus on teaching and sharing knowledge and to <br /> help the learners
                            to become experts in all fields for<br /> impacting our future
                            generation.</p> <br /><br />
                        <button className="careerbtn" type="button">CAREER GUIDANCE</button>
                    </div>
                </div>

                <div class="row dushake py-5">
                    <div class="col-md-4 h1p1">
                        <div class="head1">DUSHAKASHAKE <br />DUSHAKIRA U RWANDA</div>
                        <div class="p1">Get free access to the best projects <br /> from universities to <br />improve on
                            your way up.</div>
                    </div>
                    <div class="col-md-8">
                        <div class="blogrw row py-4 ps-5">
                            <div class="d1 col-md-4">
                                <img src={twiyubake1} class=" imgp" alt="" />
                                <div class="p2">Access best researches</div>
                            </div>
                            <div class="d1 col-md-4">
                                <img src={twiyubake2} class=" imgp" alt="" />
                                <div class="p2">Think and develop new ideas to supplement past research</div>
                            </div>
                            <div class="d1 col-md-4">
                                <img src={twiyubake3} class=" imgp" alt="" />
                                <div class="p2">Proudly graduates adding a stone on Rwandan research block</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container py-0">
                    <h3 class="text-center tableheading">VIEW THE PROJECTS FROM BWENGE PLATFORM</h3>
                    <div class="ui tabular menu">
                        <a class={projectChoice == "diaspora" ? "item active" : "item"} onClick={(e) =>
                            setprojectChoice("diaspora")}>
                            Diaspora Projects
                        </a>
                        <a class={projectChoice == "university" ? "item active" : "item"} onClick={(e) =>
                            setprojectChoice("university")}>
                            University Projects
                        </a>
                    </div>
                    <div className="ui raised segment"> </div>
                </div>

                <div class=" ubumenyi ">
                    <div class="col-md-4 pt-2  headubumenyi">
                        <div class="head2">DUSANGIRE UBUMENYI <br />TWIYUBAKE</div>
                        <div class="pa2 pt-5">Get access to courses created by<br /> best instructors and supplement it to your<br /> education for better career.</div>
                    </div>

                    <img src={courseHero} class=" imag3" alt="" srcset="" />

                </div>

                <section class="course">
                    <div class="container">

                        <h1 class="text-center brawsetop k">BROWSE TOP CATEGORY COURSES</h1>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="card courses">
                                    <img class="card-img-top" src={computer} alt="image" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p class="card-text">Engineering</p>
                                        <p class="card-text">Alex Twishime</p>
                                        <div>
                                            <div className="icon-container">
                                                <img src={like} alt="icon" />12
                                                <img src={eye} alt="icon" />50
                                                <img src={chatting} alt="icon" />50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="ui link cards">{renderAllShortCourses}</div> */}
                    </div>
                </section>

                <div class="partnerdivision">
                    <h1 class="parheading ml-6">OUR PARTNERS</h1>
                    <div class="partner-slideshow">
                        <div class="partner">
                            <div class="partner1">
                                < img src={par1} className="partner1__img" alt="" />
                            </div>
                            <div class="partner2">
                                <img src={par2} className="partner2__img" alt="" />
                            </div>
                            <div class="partner3">
                                <img src={par3} className="partner3__img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contactus">
                    <h2 class="h1-responsive font-weight-bold text-center my-4  contactushead">CONTACT US</h2>

                    <div class="col-md-3 text-center ">
                        <div className="contactUs">

                            <div className="partners">
                                <div class="partner11">
                                    <img src={address1} class=" " alt="" />
                                    <h1 className="heacontact">ADDRESS</h1>
                                    <p className="pacontact"> Kigali-Rwanda</p>

                                </div>
                                <div class="partner22">
                                    <img src={mobile} class=" " alt="" />
                                    <h1 className="heacontact">PHONE NUMBER</h1>
                                    <p className="pacontact"> +25078851359</p>

                                </div>
                                <div class="partner33">
                                    <img src={message1} class=" " alt="" />
                                    <h1 className="heacontact">EMAIL</h1>
                                    <p className="pacontact"> bwengeorg@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class=" bothform">
                        <div class="col-md-9   ">
                            <form className="contactform">
                                <div class="row  ">
                                    <div class="col-6 ">
                                        <div class="md-form mb-0 ">
                                            <input type="text" className="contactinput" placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div class="col-6 ">
                                        <div class="md-form mb-0">
                                            <input type="Email" placeholder="Your Email" className="contactinputs" />

                                        </div>
                                    </div>


                                </div><br />

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" placeholder="Subject" className="subjectconctact" />

                                        </div>
                                    </div>
                                </div><br />

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <textarea type="text" placeholder="Message" className="textarea md-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="text-center text-md-left">
                                <div className="">
                                    <button id="sb-btn" className="subjectconctact btn-primary" onclick="document.getElementById('contact-form').submit();">Send Message</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
