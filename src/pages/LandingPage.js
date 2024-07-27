import React from "react";
import MainNav from "../components/MainNav";
import Left from "../assets/left.png";
import Right from "../assets/right.png";
import HeroImg from "../assets/image.png";
import OldScl from "../assets/oldscl.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Apps from "../assets/apps.png";
import Image6 from "../assets/img6.png";
import Image7 from "../assets/img7.png";
import Image8 from "../assets/img8.png";
import { useNavigate } from "react-router-dom";
import "../style/LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();
  const loginButtonClick = () => {
    navigate("/login");
  };
  const signInButtonClick = () => {
    navigate("/register");
  };
  return (
    <>
      <MainNav
        loginButton={loginButtonClick}
        signInButton={signInButtonClick}
      />
      <div className="body-container-2">
        <div className="container-2-left">
          <img src={Left} className="left-img" alt="left-img" />
        </div>
        <div>
          <div>
            <h1 className="container-2-h1">Build advanced chatbots visually</h1>
          </div>
          <div>
            <p className="container-2-p">
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </p>
          </div>
          <div className="container-btn-div">
            <button onClick={signInButtonClick} className="container-btn">
              Create a FormBot for free
            </button>
          </div>
        </div>
        <div className="container-2-right">
          <img src={Right} className="right-img" alt="right-img" />
        </div>
      </div>
      <div className="hero-img-body">
        <div className="hero-img">
          <img src={HeroImg} alt="heroImg" />
        </div>
      </div>
      <div className="old-scl-body">
        <div className="old-scl-sub-body">
          <div className="old-scl-heading">
            <h1 className="old-scl-h1">
              Replace your old school forms with chatbots
            </h1>
          </div>
          <p className="old-scl-p">
            Typebot is a better way to ask for information. It leads to an
            increase in customer satisfaction and retention and multiply by 3
            your conversion rate compared to classical forms.
          </p>
          <img className="old-scl-img" src={OldScl} alt="old scl from" />
        </div>
      </div>
      <div className="container-4-body">
        <div className="container-4-sub-body">
          <img className="img4" src={Image4} alt="side" />
          <div className="container-4-txt">
            <h1 style={{ color: "white" }}>Easy building experience</h1>
            <p style={{ color: "#A0AEC0" }}>
              All you have to do is drag and drop blocks to create your app.
              Even if you have custom needs, you can always add custom code.
            </p>
          </div>
        </div>
      </div>
      <div className="container-4-body">
        <div className="container-4-sub-body">
          <div className="container-4-txt2">
            <h1 style={{ color: "white" }}>Easy building experience</h1>
            <p style={{ color: "#A0AEC0" }}>
              All you have to do is drag and drop blocks to create your app.
              Even if you have custom needs, you can always add custom code.
            </p>
          </div>
          <img className="img4" src={Image5} alt="side" />
        </div>
      </div>
      <div className="apps-body">
        <img style={{ width: "100%" }} src={Apps} alt="apps" />
        <div className="app-body-txt">
          <h1 style={{ color: "white" }}>Integrate with any platform</h1>
          <p style={{ color: "#A0AEC0", width: "35%" }}>
            Typebot offers several native integrations blocks as well as
            instructions on how to embed typebot on particular platforms
          </p>
        </div>
      </div>
      <div className="container-6-body">
        <div className="container-6-sub-body">
          <h1
            style={{
              textAlign: "center",
              fontSize: "8vh",
              color: "white",
            }}
          >
            Collect results in real-time
          </h1>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#A0AEC0",
                width: "67%",
              }}
            >
              One of the main advantage of a chat application is that you
              collect the user's responses on each question. You won't lose any
              valuable data.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "50px",
            }}
          >
            <img src={Image6} alt="exm" />
          </div>
        </div>
      </div>
      <div className="container-6-body">
        <div className="container-6-sub-body">
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "5vh",
                color: "white",
              }}
            >
              And many more features
            </h1>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#A0AEC0",
              }}
            >
              Typebot makes form building easy and comes with powerful features
            </p>
          </div>
          <img style={{ width: "100%" }} src={Image7} alt="card" />
        </div>
      </div>
      <div className="container-4-body">
        <div style={{ width: "70%" }}>
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: "3vh",
            }}
          >
            Loved by teams and creators from all around the world
          </p>
          <img
            style={{ width: "100%", marginTop: "15px" }}
            src={Image8}
            alt="img"
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#1a202c",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "80px",
        }}
      >
        <div style={{ width: "20%" }}>
          <img style={{ width: "100%" }} src={Left} alt="left" />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "250px",
            marginBottom: "250px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Improve conversion and user engagement with FormBots{" "}
          </h1>
          <button onClick={signInButtonClick} className="container8-btn">
            Create a FormBot
          </button>
          <p style={{ color: "#A0AEC0" }}>Not trial.Generous free plan.</p>
        </div>
        <div style={{ width: "20%", marginTop: "210px" }}>
          <img style={{ width: "100%" }} src={Right} alt="right" />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#171923",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <div>
            <p>Made with ❤️ by vikash</p>
          </div>
          <div>
            <ul style={{ listStyleType: "none", textDecoration: "underline" }}>
              <li>Status</li>
              <li>Documentaion</li>
              <li>Roadmap</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyleType: "none", textDecoration: "underline" }}>
              <li>Discord</li>
              <li>GitHub reposistry</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>OSS Friends</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyleType: "none", textDecoration: "underline" }}>
              <li>About</li>
              <li>Contact</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
