import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bwengeIntro from "./../../imgs/newcareer.png";
import twiyubake1 from "./../../imgs/rw1.PNG";
import twiyubake2 from "./../../imgs/rw2.PNG";
import twiyubake3 from "./../../imgs/rw3.PNG";
import book1 from "./../../imgs/book3.png";
import book2 from "./../../imgs/book2.png";
import book3 from "./../../imgs/book1.png";
import par1 from "./../../imgs/par1.png"
import par2 from "./../../imgs/par2.png"
import par3 from "./../../imgs/par3.png"
import mobile from "./../../imgs/mobile.PNG"
import message1 from "./../../imgs/message.PNG"
import address1 from "./../../imgs/address.PNG"
import courseHero from "./../../imgs/ubumenyi.png";
import computer from "./../../imgs/computer.png";
import trending from "./../../imgs/svg/trending.svg";
import bookstore from "./../../imgs/svg/bookstore.svg";
import headings from "./../../imgs/svg/headings.svg";

import like from "../../imgs/svg/like.svg";
import eye from "./../../imgs/svg/eye.svg";
import chatting from "./../../imgs/svg/chatting.svg";

import slide from "./../../imgs/ai.jpeg";

import "../styles/home.css";
import "../styles/animate.css";
import axios from '../../helpers/axios';
import { useFormatDate } from '../../hooks';

const Home = () => {
    const [projectChoice, setprojectChoice] = useState("diaspora");
    const [articles, setArticles] = useState([]);
    const [articleErrorMsg, setArticleErrorMsg] = useState('');
    const [isArticleLoading, setIsArticleLoading] = useState(false);

    const formatDate = useFormatDate();

    useEffect(() => {
        document.title = "Bwenge Courses"
    });
    useEffect(() => {
        getArticles()
    }, []);

    const getArticles = () => {

        setArticleErrorMsg("");
        setIsArticleLoading(true);

        axios.get('/articles/')
            .then((res) => {
                setIsArticleLoading(false);
                if (Array.isArray(res.data)) {
                    const articles = res.data || [];
                    setArticles(articles);
                }
                else {
                    const errorMessage = res?.data?.message || "Failed to fetch articles. Please try again.";
                    setArticleErrorMsg(errorMessage);
                }
            })
            .catch((error) => {
                setIsArticleLoading(false);
                if (error.response) {
                    setArticleErrorMsg(error.response?.data?.message || "An error occurred. Please try again.");
                } else if (error.request) {
                    setArticleErrorMsg("Failed to connect to the server. Please check your internet connection and try again.");
                } else {
                    setArticleErrorMsg(error.message || "An unexpected error occurred. Please try again later.");
                }
            });
    };

    const truncateText = (text) => {
        if (text.length > 60) {
            return text.substring(0, 60) + '...';
        }
        return text;
    };
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
                <section className="bwengeNews">
                    <div>
                        <div className="trending">
                            <img src={trending} alt="" srcSet="" />
                            <span className="trending-title">TRENDING</span>
                        </div>
                        <div className="row">
                            {
                                isArticleLoading ? (<div>Loading trendings...</div>)
                                    : articleErrorMsg != '' ? (<div>Error: {articleErrorMsg}</div>)
                                        : articles.length > 0 ? (
                                            articles.map((article) => (
                                                <div className="col-md-3" key={article.id}>
                                                    <div className="card">
                                                        <img className="card-img-top" src={article.poster_image} alt="image" />
                                                        <div className="card-body">
                                                            <h5 className="card-title"><b>{article.title}</b></h5>
                                                            <p className="card-text">{truncateText(article.description)}</p>
                                                            <div>
                                                                <div className="button-container">
                                                                    <Link to={`/article/${article.id}`} className="readmore btn">Read More</Link>
                                                                    <span className="date">{formatDate(article.date)}</span>
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
                                            ))) :
                                            (<div><center>No Available Trending</center></div>)
                            }
                        </div>
                    </div>

                    <div className="headings-section">
                        <div className="headings">
                            <img src={headings} alt="" srcSet="" />
                            <span className="headings-title">HEADINGS</span>
                        </div>
                        <div className="row">
                            {
                                isArticleLoading ? (<div>Loading Heading...</div>)
                                    : articleErrorMsg != '' ? (<div>Error: {articleErrorMsg}</div>)
                                        : articles.length > 0 ? (
                                            articles.slice().reverse().map((article) => (
                                                <div className="col-md-3" key={article.id}>
                                                    <div className="cards">
                                                        <img className="card-img-top" src={article.poster_image} alt="image" />
                                                        <div className="cards-body">
                                                            <span className="heading-date">{formatDate(article.date)}</span>
                                                            <h5 className="card-title"><b>{article.title}</b></h5>
                                                            <p className="card-text">{truncateText(article.description)}</p>
                                                            <div>
                                                                <div className="button-container">
                                                                    <a href="#" className="readmore btn">Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))) :
                                            (<div><center>No Available Headings</center></div>)
                            }
                        </div>
                    </div>

                </section>


                <div className="storebook">
                    <div>
                        <img src={bookstore} className="storeimg" alt="" srcSet="" />
                        <span className="headingbookstore">BOOK STORE</span>
                    </div>
                </div>

                <div className=" book ">
                    <div className="#">
                        <img src={book1} className="bookimg " alt="" />
                        <div className="p2 paragarph">Readmore</div>
                    </div>
                    <div className="#">
                        <img src={book2} className=" #" alt="" />
                        <div className="p2 paragarphii">Readmore</div>
                    </div>

                    <div className="bookimu">
                        <img src={book2} className=" bookimg" alt="" />
                        <div className="p2 paragarphii">Read more</div>
                    </div>


                    <div className="bookimuu">
                        <img src={book3} className="bookimg " alt="" />
                        <div className="p2 paragarphi ">Readmore</div>
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

                <div className="row dushake py-5">
                    <div className="col-md-4 h1p1">
                        <div className="head1">DUSHAKASHAKE <br />DUSHAKIRA U RWANDA</div>
                        <div className="p1">Get free access to the best projects <br /> from universities to <br />improve on
                            your way up.</div>
                    </div>
                    <div className="col-md-8">
                        <div className="blogrw row py-4 ps-5">
                            <div className="d1 col-md-4">
                                <img src={twiyubake1} className=" imgp" alt="" />
                                <div className="p2">Access best researches</div>
                            </div>
                            <div className="d1 col-md-4">
                                <img src={twiyubake2} className=" imgp" alt="" />
                                <div className="p2">Think and develop new ideas to supplement past research</div>
                            </div>
                            <div className="d1 col-md-4">
                                <img src={twiyubake3} className=" imgp" alt="" />
                                <div className="p2">Proudly graduates adding a stone on Rwandan research block</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container py-0">
                    <h3 className="text-center tableheading">VIEW THE PROJECTS FROM BWENGE PLATFORM</h3>
                    <div className="ui tabular menu">
                        <a class={projectChoice == "diaspora" ? "item active" : "item"} onClick={(e) =>
                            setprojectChoice("diaspora")}>
                            Diaspora Projects
                        </a>
                        <a className={projectChoice == "university" ? "item active" : "item"} onClick={(e) =>
                            setprojectChoice("university")}>
                            University Projects
                        </a>
                    </div>
                    <div className="ui raised segment"> </div>
                </div>

                <div className=" ubumenyi ">
                    <div className="col-md-4 pt-2  headubumenyi">
                        <div className="head2">DUSANGIRE UBUMENYI <br />TWIYUBAKE</div>
                        <div className="pa2 pt-5">Get access to courses created by<br /> best instructors and supplement it to your<br /> education for better career.</div>
                    </div>

                    <img src={courseHero} className=" imag3" alt="" srcSet="" />

                </div>

                <section className="course">
                    <div className="container">

                        <h1 className="text-center brawsetop k">BROWSE TOP CATEGORY COURSES</h1>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                                <div className="card courses">
                                    <img className="card-img-top" src={computer} alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Introduction to Biometric Sensor</b></h5>
                                        <p className="card-text">Engineering</p>
                                        <p className="card-text">Alex Twishime</p>
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
                        {/* <div className="ui link cards">{renderAllShortCourses}</div> */}
                    </div>
                </section>

                <div className="partnerdivision">
                    <h1 className="parheading ml-6">OUR PARTNERS</h1>
                    <div className="partner-slideshow">
                        <div className="partner">
                            <div className="partner1">
                                < img src={par1} className="partner1__img" alt="" />
                            </div>
                            <div className="partner2">
                                <img src={par2} className="partner2__img" alt="" />
                            </div>
                            <div className="partner3">
                                <img src={par3} className="partner3__img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contactus">
                    <h2 className="h1-responsive font-weight-bold text-center my-4  contactushead">CONTACT US</h2>

                    <div className="col-md-3 text-center ">
                        <div className="contactUs">

                            <div className="partners">
                                <div className="partner11">
                                    <img src={address1} className=" " alt="" />
                                    <h1 className="heacontact">ADDRESS</h1>
                                    <p className="pacontact"> Kigali-Rwanda</p>

                                </div>
                                <div className="partner22">
                                    <img src={mobile} className=" " alt="" />
                                    <h1 className="heacontact">PHONE NUMBER</h1>
                                    <p className="pacontact"> +25078851359</p>

                                </div>
                                <div className="partner33">
                                    <img src={message1} className=" " alt="" />
                                    <h1 className="heacontact">EMAIL</h1>
                                    <p className="pacontact"> bwengeorg@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" bothform">
                        <div className="col-md-9   ">
                            <form className="contactform">
                                <div className="row  ">
                                    <div className="col-6 ">
                                        <div className="md-form mb-0 ">
                                            <input type="text" className="contactinput" placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div className="col-6 ">
                                        <div className="md-form mb-0">
                                            <input type="Email" placeholder="Your Email" className="contactinputs" />

                                        </div>
                                    </div>


                                </div><br />

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" placeholder="Subject" className="subjectconctact" />

                                        </div>
                                    </div>
                                </div><br />

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" placeholder="Message" className="textarea md-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <div className="">
                                    <button id="sb-btn" className="subjectconctact btn-primary" onClick="document.getElementById('contact-form').submit();">Send Message</button>
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
