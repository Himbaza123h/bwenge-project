import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../helpers/axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faThumbsUp, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import computer from "./../../imgs/computer.png";

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [comment, setComment] = useState('');
    const [showCommentInput, setShowCommentInput] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`/article/${id}/`);
                console.log(response.data);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitComment = () => {
        console.log('Comment submitted:', comment);
        setComment('');
        setShowCommentInput(false);
    };

    if (!article) {
        return <div>Loading article...</div>;
    }

    return (
        <div className="container my-5">
            <h1 className="mb-4">Article</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <img src={article.poster_image} className="card-img-top" alt={article.title} />
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
                            <small className="text-muted">Posted on {article.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;