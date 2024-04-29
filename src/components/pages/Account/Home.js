import React, { useState } from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Button, Modal, Form } from 'react-bootstrap';
import userprofile from "../../../imgs/Logowhite.jpg";
import "../../styles/account.css";

import computer from "../../../imgs/computer.png";
import vision from "../../../imgs/vision.jpg";
import coding from "../../../imgs/coding.jpg";
import skills from "../../../imgs/skills.jpg";
import like from "../../../imgs/svg/like.svg";
import eye from "../../../imgs/svg/eye.svg";
import chatting from "../../../imgs/svg/chatting.svg";

function CountCard({ title, count, bgColorClass }) {
    return (
        <Card className={`count-card ${bgColorClass}`}>
            <Card.Body>
                <h6>{title}</h6>
                <h2>{count}</h2>
            </Card.Body>
        </Card>
    );
}
function AccountHome() {

    const [activeTab, setActiveTab] = useState('myCoursess');
    const [showCourseModal, setShowCourseModal] = useState(false);
    const [showArticleModal, setShowArticleModal] = useState(false);
    const [showCommunityModal, setShowCommunityModal] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const handleCreateCourse = () => {
        setShowCourseModal(true);
    };
    const handleCreateArticle = () => {
        setShowArticleModal(true);
    };

    const handleCreateCommunity = () => {
        setShowCommunityModal(true);
    };

    const handleCreateProject = () => {
        setShowProjectModal(true);
    };


    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card className="jumbotron">
                        <Card.Body>
                            <Row>
                                <Col md={3}>
                                    <img src={userprofile} alt="Profile" className="my-profile img-fluid rounded-circle" />
                                </Col>
                                <Col md={3}>
                                    <h3>Eric MUGISHA</h3>
                                    <p>ericblessed88@gmail.com</p>
                                    <p>phone: 0782643555</p>
                                    <p>status: active</p>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={4}>
                                            <CountCard title="My Courses" count={10} bgColorClass="my-courses" />
                                        </Col>
                                        <Col md={4}>
                                            <CountCard title="My Projects" count={5} bgColorClass="my-projects" />
                                        </Col>
                                        <Col md={4}>
                                            <CountCard title="My Community" count={20} bgColorClass="my-community" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Tabs
                        id="accountTabs"
                        activeKey={activeTab}
                        onSelect={(tab) => handleTabChange(tab)}
                        className="mb-4"
                    >
                        <Tab eventKey="myArticles" title="My Article">
                            <Button variant="success" onClick={handleCreateArticle}>
                                <i className='fa fa-plus'></i>Create Article
                            </Button>
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
                                                    <span>Posted Date</span>
                                                    <span className="date">2023-01-12</span>
                                                </div>
                                                <div className="icon-container">
                                                    8<img src={like} alt="icon" />
                                                    118<img src={eye} alt="icon" />
                                                    7<img src={chatting} alt="icon" />
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
                                                    <span>Posted Date</span>
                                                    <span className="date">2023-01-12</span>
                                                </div>
                                                <div className="icon-container">
                                                    12<img src={like} alt="icon" />
                                                    100<img src={eye} alt="icon" />
                                                    5<img src={chatting} alt="icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div class="card">
                                        <img class="card-img-top" src={computer} alt="image" />
                                        <div class="card-body">
                                            <h5 class="card-title"><b>Uburyo 10 wakorera $10 yawe kuri internet</b></h5>
                                            <p class="card-text">Artificial Intelligence (AI) iri guhindura byihuse ubucuruzi
                                                n’inganda kwisi yose</p>
                                            <div>
                                                <div className="button-container">
                                                    <span>Posted Date</span>
                                                    <span className="date">2023-01-12</span>
                                                </div>
                                                <div className="icon-container">
                                                    8<img src={like} alt="icon" />
                                                    118<img src={eye} alt="icon" />
                                                    7<img src={chatting} alt="icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="myCourse" title="My Course">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Button variant="success" onClick={handleCreateCourse}>
                                        <i className='fa fa-plus'></i>Create New Course
                                    </Button>
                                </div><br />
                            </div>
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
                                </div></div>
                        </Tab>
                        <Tab eventKey="myCommunity" title="My Community">
                            <Button variant="success" onClick={handleCreateCommunity}>
                                <i className='fa fa-plus'></i>Create Community
                            </Button>
                        </Tab>
                        <Tab eventKey="myProject" title="My Project">
                            <Button variant="success" onClick={handleCreateProject}>
                                <i className='fa fa-plus'></i>Create New Project
                            </Button>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            <Modal show={showArticleModal} onHide={() => setShowArticleModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create An Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Article Title</label>
                    <input type="text" className='form-control' placeholder='Tittle' />
                    <label>Description</label>
                    <input type='text' className='form-control' placeholder='Description' />
                    <label>Category</label>
                    <select className='form-control'>
                        <option>Select Category</option>
                        <option>Technolgy</option>
                        <option>Science</option>
                    </select>
                    <label>Image</label>
                    <input type='file' className='form-control' />
                    <center>
                        <br /><Button variant="primary">Submit</Button>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowArticleModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showCourseModal} onHide={() => setShowCourseModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => showCourseModal(false)}>Close</Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showCommunityModal} onHide={() => setShowCommunityModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Community</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type="text" className='form-control' placeholder='Name' />
                    <label>Description</label>
                    <input type='text' className='form-control' placeholder='Description' />
                    <label>Category</label>
                    <select className='form-control'>
                        <option disabled>Select Category</option>
                        <option>University Communities</option>
                        <option>Department Communities</option>
                        <option>Diaspora Communities</option>
                    </select>
                    <label>Image</label>
                    <input type='file' className='form-control' />
                    <center>
                        <br /><Button variant="primary">Submit</Button>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCommunityModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showProjectModal} onHide={() => setShowProjectModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Topic</label>
                    <input type="text" className='form-control' placeholder='Topic' />
                    <label>Description</label>
                    <input type='text' className='form-control' placeholder='Description' />
                    <label>Tag</label>
                    <input type='text' className='form-control' placeholder='Tag' />
                    <label>Institution</label>
                    <select className='form-control'>
                        <option disabled>Select Institution</option>
                        <option>University</option>
                    </select>
                    <center>
                        <br /><Button variant="primary">Submit</Button>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowProjectModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default AccountHome;
