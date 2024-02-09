import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/dp_log_launcher.png";
import logo2 from "../assets/images/dp_log_png.png";
import home1 from "../assets/images/home1.webp";
import cs1 from "../assets/images/candlestick1.png";
import cs2 from "../assets/images/candlestick2.png";
import h1 from "../assets/images/h1.png";
import h2 from "../assets/images/h2.png";
import h3 from "../assets/images/h3.png";
import h4 from "../assets/images/h4.png";
import h5 from "../assets/images/h5.png";
import "../../src/App.css";
import TradingViewWidget from "./trading-view-home";
import CheckConnection from "./CheckConnection";

const Home = () => {
  return (
    <div style={{}}>
      <div style={{}}>
        <div
          style={{
            zIndex: "1",
            position: "fixed",
            width: "100%",
            backgroundColor: "white",
            top: "0px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div
            className="nav_bar"
            style={{ padding: "4px 10%", display: "flex", height: "70px" }}
          >
            <div className="logo">
              <NavLink style={{ display: "flex" }}>
                <img src={logo} alt="DAILYpunch" height={70}></img>
                <div style={{ marginTop: "20px" }}>
                  <img src={logo2} alt="DAILYpunch" height={30}></img>
                </div>
              </NavLink>
            </div>
            <div
              className="nav_bar_right"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                paddingTop: "18px",
              }}
            >
              <div className="PT">
                <NavLink style={{ textDecoration: "none" }}>
                  <div
                    className="paperTrade"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      height: "29px",
                      width: "190px",
                      paddingTop: "4px",
                    }}
                  >
                    PAPER TRADE
                  </div>
                </NavLink>
              </div>

              <div className="signu" style={{ marginRight: "25px" }}>
                <NavLink style={{ textDecoration: "none" }}>
                  <div
                    className="signup"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "15px",
                      height: "28px",
                      width: "110px",
                      paddingTop: "6px",
                    }}
                  >
                    SIGN UP
                  </div>
                </NavLink>
              </div>

              <div className="logi">
                <NavLink style={{ textDecoration: "none" }}>
                  <div
                    className="login"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      height: "29px",
                      width: "100px",
                      paddingTop: "4px",
                    }}
                  >
                    LOGIN
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          {/* <hr style={{margin:'0'}}></hr> */}
        </div>
        <div className="main-body" style={{ marginTop: "80px" }}>
          <div style={{ padding: "0 8%" }}>
            <section
              className="sect1"
              style={{
                display: "flex",
                paddingTop: "50px",
              }}
            >
              <div className="sect1-1">
                <div className="text1">DailyPunch Paper Trading</div>
                <div className="text2">Helps Investor Practice</div>
                <div className="text3">Their Tading Skills!!</div>

                <div className="signu" style={{}}>
                  <NavLink style={{ textDecoration: "none" }}>
                    <div
                      className="signup-sec"
                      style={{
                        marginTop: "47px",
                        fontWeight: "bold",
                        fontSize: "24px",
                        fontFamily: "OpenSans",
                        height: "56px",
                        width: "300px",
                        paddingTop: "18px",
                      }}
                    >
                      <span style={{ marginLeft: "20px" }}>
                        Open an account
                      </span>
                      <i
                        class="fa fa-long-arrow-right white-color arrow1"
                        aria-hidden="true"
                        style={{
                          fontSize: "30px",
                          marginLeft: "30px",
                          top: "15px",
                        }}
                      ></i>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="sect1-2">
                <img
                  className="sect1-2-img"
                  src={home1}
                  alt="stock"
                  height={550}
                ></img>
              </div>
            </section>
          </div>

          <section className="trading-view">
            <div className="trading-view-title" style={{ textAlign: "center" }}>
              <span>Enhanced with TradingView Chart Widget</span>
            </div>
            <div
              style={{
                marginTop: "30px",
                border: "5px solid black",
                borderRadius: "10px",
                height: "100%",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.79)",
              }}
            >
              <CheckConnection>
                <TradingViewWidget />
              </CheckConnection>
            </div>
          </section>

          <div className="sect2">
            <img style={{ width: "100%" }} src={cs1} alt="cnadlesticks"></img>
            <div style={{ padding: "0 8%", margin: "40px 0" }}>
              <section>
                <div className="sect2-1" style={{ textAlign: "center" }}>
                  Perfect Your Trading with DailyPunch
                </div>
                <div className="sect2-2" style={{ textAlign: "center" }}>
                  Experience the excitement of real-time trading without risking
                  your capital with DailyPunch Paper Trading. Educate yourself
                  on various products and strategies while honing your skills
                  and gaining the confidence to make informed decisions.
                </div>
              </section>
            </div>
            <img style={{ width: "100%" }} src={cs2} alt="cnadlesticks"></img>
          </div>

          <div style={{ padding: "0 8%" }}>
            <section className="sect3" style={{ marginTop: "70px" }}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img
                  className="features-img"
                  src={h1}
                  alt="zero-risk"
                  width={"25%"}
                ></img>
                <img
                  className="features-img"
                  src={h2}
                  alt="cash"
                  width={"25%"}
                ></img>
                <img
                  className="features-img"
                  src={h3}
                  alt="real-time-data"
                  width={"25%"}
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "70PX",
                }}
              >
                <img
                  className="features-img"
                  src={h4}
                  alt="strategy"
                  width={"40%"}
                ></img>
                <img
                  className="features-img"
                  src={h5}
                  alt="indicator-study"
                  width={"40%"}
                ></img>
              </div>
            </section>
          </div>

          <section className="sect4">
            <div
              style={{
                marginTop: "70px",
                height: "400px",
                padding: "70px 8% 70px",
                backgroundColor: "#181818",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "38px",
                  fontFamily: "Open Sans",
                  lineHeight: "52px",
                }}
              >
                Practice Trading Without The Risk
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Open Sans",
                  lineHeight: "26px",
                  margin: "45px 7% 68px",
                  opacity: "0.9",
                }}
              >
                Simulated trading can help all levels of traders to practice
                their trading skills and strategies. You can access DailyPunch’s
                trading simulator on desktop, so you can try out a new idea as
                soon as it comes to mind. Open an account today to get started.
              </p>
              <NavLink
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "23px",
                    color: "#181818",
                    width: "200px",
                    border: "none",
                    height: "32px",
                    fontWeight: "bolder",
                    fontSize: "24px",
                    backgroundColor: "#ffffff",
                    fontFamily: "OpenSans",
                    borderRadius: "6px",
                  }}
                >
                  Open Account
                </div>
              </NavLink>
            </div>
          </section>
          <div style={{ height: "50px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
