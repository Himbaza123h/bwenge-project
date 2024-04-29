import React from 'react';
import projectbanner from "./../../imgs/project-banner.png";
// import "./../styles/mooc.css";

const Project = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className="text-center">
                            <img src={projectbanner} alt="Image" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="text-center">
                            <h2 className="mb-4 fw-bold">RESEARCH AND SEARCH <br />FOR RWANDA</h2>
                        </div>
                    </div>
                </div><br /><br />
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>Level</th>
                            <th>Submission Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Steer-by- Wire system for vehicles</td>
                            <td>Alex TWISHIMe</td>
                            <td>Masters</td>
                            <td>2024-03-21</td>
                        </tr>
                        <tr>
                            <td>Steer-by- Wire system for vehicles</td>
                            <td>Alex TWISHIMe</td>
                            <td>Masters</td>
                            <td>2024-03-21</td>
                        </tr>
                        <tr>
                            <td>Steer-by- Wire system for vehicles</td>
                            <td>Alex TWISHIMe</td>
                            <td>Masters</td>
                            <td>2024-03-21</td>
                        </tr>
                        <tr>
                            <td>Steer-by- Wire system for vehicles</td>
                            <td>Alex TWISHIMe</td>
                            <td>Masters</td>
                            <td>2024-03-21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Project;
