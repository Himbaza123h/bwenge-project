import React, { useState } from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Button, Modal, Form } from 'react-bootstrap';
import axios from '../../../helpers/axios';
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

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const [activeTab, setActiveTab] = useState('myCoursess');
    const [showCourseModal, setShowCourseModal] = useState(false);
    const [showArticleModal, setShowArticleModal] = useState(false);
    const [showCommunityModal, setShowCommunityModal] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState(false);

    const [articleData, setArticleData] = useState({
        title: '',
        description: '',
        categories: [],
        author: userInfo.id
    });

    const handleCloseArticleModal = () => setShowArticleModal(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const handleCreateCourse = () => {
        setShowCourseModal(true);
    };

    const handleCreateCommunity = () => {
        setShowCommunityModal(true);
    };

    const handleCreateProject = () => {
        setShowProjectModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArticleData({
            ...articleData,
            [name]: value
        });
    };

    const handleCategoryChange = (e) => {
        const { checked, value } = e.target;
        let updatedCategories = [...articleData.categories];

        if (checked) {
            updatedCategories.push(parseInt(value));
        } else {
            updatedCategories = updatedCategories.filter((category) => category !== parseInt(value));
        }

        setArticleData({
            ...articleData,
            categories: updatedCategories
        });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('poster_image', file);
        setArticleData({
            ...articleData,
            poster_image: formData
        });
    };


    // const handleCreateArticle = async () => {
    //     setShowArticleModal(true);
    //     console.log(articleData)
    //     try {
    //         const response = await axios.post('/add-article/', articleData);
    //         console.log('Article created successfully:', response.data);
    //         handleCloseArticleModal();
    //     } catch (error) {
    //         console.error('Error creating article:', error);
    //         // Check if the error contains response data
    //         if (error.response && error.response.data) {
    //             console.error('Server responded with:', error.response.data);
    //         }
    //     }
    // };

    const handleCreateArticle = async () => {
        setShowArticleModal(true);
        try {
            const formData = new FormData();
            formData.append('title', articleData.title);
            formData.append('description', articleData.description);
            formData.append('categories', JSON.stringify(articleData.categories));
            formData.append('poster_image', articleData.poster_image);
            formData.append('author', userInfo.id);

            // Log FormData before sending the request
            console.log('FormData:', formData);

            const response = await axios.post('/add-article/', formData);
            console.log('Article created successfully:', response.data);
            handleCloseArticleModal();
        } catch (error) {
            // Check if the error contains response data
            console.error('Error creating article:', error);
            if (error.response?.data) {
                console.error('Server responded with:', error.response.data);
            }
        }
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
                                    {userInfo && (
                                        <>
                                            <h3>{userInfo.full_name}</h3>
                                            <p>{userInfo.email}</p>
                                            <p>phone: {userInfo.telephone}</p>
                                            <p>status: {userInfo.status}</p>
                                        </>
                                    )}
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
            <Modal show={showArticleModal} onHide={handleCloseArticleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create An Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form enctype="multipart/form-data">
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="poster_image">
                            <Form.Label>Poster Image</Form.Label>
                            <Form.Control type="file" name="poster_image" onChange={handleImageChange} />
                        </Form.Group>
                        <Form.Group controlId="categories">
                            <Form.Label>Categories</Form.Label>
                            <Form.Check
                                type="checkbox"
                                id="category-1"
                                label="Mechanical Designer 2"
                                value="1"
                                onChange={handleCategoryChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseArticleModal}>Cancel</Button>
                    <Button variant="primary" onClick={handleCreateArticle}>Create Article</Button>
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
