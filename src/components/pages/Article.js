import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import computer from "./../../imgs/computer.png";


const ArticlePage = () => {
    const { id } = useParams();

    const article = {
        id: id,
        title: 'Sample Article Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        image: 'https://via.placeholder.com/300', // Sample image URL
        postedDate: 'May 1, 2024'
    };

    // State for comment input
    const [comment, setComment] = useState('');
    const [showCommentInput, setShowCommentInput] = useState(false);

    // Handle comment input change
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    // Handle comment submission
    const handleSubmitComment = () => {
        // You can add logic to submit the comment here
        console.log('Comment submitted:', comment);
        // Clear comment input and hide comment input field
        setComment('');
        setShowCommentInput(false);
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Article Page</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <img src={computer} className="card-img-top" alt={article.title} />
                        <div className="card-body">
                            <h2 className="card-title">{article.title}</h2>
                            <p className="card-text">{article.description}</p>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> Like
                                    <span className="mx-3">|</span>
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className="mr-2"
                                        onClick={() => setShowCommentInput(true)}
                                        style={{ cursor: 'pointer' }}
                                    /> Comment
                                </div>
                                {showCommentInput && (
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Write your comment..."
                                            value={comment}
                                            onChange={handleCommentChange}
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={handleSubmitComment}
                                            >
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <small className="text-muted">Posted on {article.postedDate}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
