import React, { useState, useEffect } from "react";
import { FaPeopleCarry } from "react-icons/fa";
import history from "../../../Redux/actions/history";
import { CgCalendarNext } from "react-icons/cg";
// import { useNsangizaRequests, bookNsangiza } from "../Admin Panel/hooks/useAllNsangizas";
import moment from "moment";
import computer from "../../../imgs/computer.png";
import meeting1 from "../../../imgs/meeting1.jpg";
import meeting2 from "../../../imgs/meeting2.jpg";
import meeting3 from "../../../imgs/meeting3.jpg";
import time from "../../../imgs/svg/time.svg";
import people from "../../../imgs/svg/people.svg";
import userdoc from "../../../imgs/svg/userdoc.svg";
import imageabout from "../../../imgs/nsangiza.png"
// import { useMutation } from "@apollo/client";
import _ from "lodash";
const NsangizaMainPage = () => {
    useEffect(() => {
        document.title = "Nsangiza"
        })
  const [liveColor, setLiveColor] = useState("red");
  const [Allnsangizas, setAllNsangiza] = useState([]);

 

  if (Allnsangizas) {
    Allnsangizas.map((item) => {

    });

      const renderLiveNsangiza = () => {

      return (
        <div>
          <h3 class="ui header">
            <i style={{ color: liveColor }} class="circle icon"></i> <div class="content">Aka kanya</div>
          </h3>
          <div className="ui link cards">

              return (
                <div
                  class="ui card"

                >
                  <a class="image">
                    <img  height="155" width="240" />
                  </a>
                  <div class="content">
                    <a class="header" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip", width: "100%" }}>
                      {/* {item.title} */}
                    </a>
                    <div class="meta">
                      <a>Yatangiye 20:20</a>
                    </div>
                  </div>
                </div>
              );
          </div>
        </div>
      );
    };
    const renderUpcoming = () => {
      return (
        <div>
          <h3 class="ui header">
            <CgCalendarNext size={30} />
            <div class="content">Dutegereje</div>
          </h3>
          <div className="ui link cards">
            
              return (
                <div class="ui card ms-3">
                  {/* <a onClick={(e) => history.push(`/nsangiza/${item.id}`)} class="image"> */}
                    <img  height="155" width="240" />
                  {/* </a> */}
                  <div class="content">
                    <a
                      class="header"
                      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip", width: "100%" }}
                    >
                      {/* {item.title} */}
                    </a>
                    <div class="meta">
                      <a>Izatangira 20:20</a>
                    </div>
                  </div>
                  <div class="extra content">
  
                  </div>
                </div>
              );
          </div>
        </div>
      );
    };
    return (
      <div className="mx-3">

        <div className="">
                <img src={imageabout} class=" imageabout" alt="" />
        </div>
        <div className="nsangiza-button-container">
          <button className="nsangiza-btn"><img src={userdoc} alt="" />Request Nsangiza</button>
          <button className="nsangiza-btn"><img src={userdoc} alt="" />Upload Video</button>
          <button className="nsangiza-btn"><img src={userdoc} alt="" />Conference</button>
        </div>
        <div className="live-container">
          <div className="meeting-title">
            <span className="live-title">Live <i style={{ color: liveColor }} class="circle icon"></i></span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting1} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="join-btn">Join</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting2} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="join-btn">Join</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting3} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="join-btn">Join</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="live-container">
          <div className="meeting-title">
            <span className="live-title">WAITING</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting1} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="book-btn">Book</a>
                      <img className="people-icon" src={people} alt="" /> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting2} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="book-btn">Book</a>
                      <img className="people-icon" src={people} alt="" /> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting3} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="book-btn">Book</a>
                      <img className="people-icon" src={people} alt="" /> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="live-container">
          <div className="meeting-title">
            <span className="live-title">LATEST VIDEOS</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting1} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="book-btn">Views</a>
                      <img className="people-icon" src={people} alt="" /> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting2} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="book-btn">Views</a>
                      <img className="people-icon" src={people} alt="" /> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card meeting-card">
                <img class="card-img-top" src={meeting3} alt="image" />
                <div class="card-body">
                  <h5 class="card-title"><b>MEETING TITLE: DESCRIPTION</b></h5><br /><br />
                  <div>
                    <div className="join-container">
                      <img src={time} alt="" />
                      <span>2023-01-12</span>
                      <a href="#" className="book-btn">Views</a>
                      <img className="people-icon" src={people} alt="" /> 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NsangizaMainPage;
