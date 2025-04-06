import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
  Button,
} from "@mui/material";
import "./App.css";

const Portfolio = () => {
  const mountainUrl = process.env.PUBLIC_URL + "/mountain.jpg";
  const yuzuURl = process.env.PUBLIC_URL + "/yuzu.png";
  const profileImage = process.env.PUBLIC_URL + "/profile.jpg";
  const anna = process.env.PUBLIC_URL + "/anna.png";
  const stuti = process.env.PUBLIC_URL + "/stuti.png";
  const resume = process.env.PUBLIC_URL + "/resume.pdf";
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "#F5F5F5",
            minHeight: "100vh",
            background: `url(${mountainUrl}) no-repeat top center`,
            backgroundSize: "cover",
            top: -40,
            left: 0,
            width: "100vw",
            zIndex: -1,
          }}>
          <AppBar
            position="static"
            sx={{
              background: "transparent",
              boxShadow: "none",
              top: 0,
              left: 0,
              width: "100%",
              padding: 0,
              zIndex: 100,
            }}>
            {/* <Toolbar
              style={{
                minHeight: "60px",
                padding: "0 2rem",
                display: "flex",
                justifyContent: "space-between",
              }}> */}
            <span
              style={{
                fontWeight: "bold",
                color: "#222",
                fontSize: "1.25rem",
              }}>
              Rush.
            </span>
            {/* </Toolbar> */}
          </AppBar>
          <div className="profile-container">
            <div className="profile-content">
              <span className="profile-heading">
                Hi, I'm Rushika, <br />
                <span className="profile-role">Business Analyst</span>
              </span>

              <span className="profile-location">
                Based in <span style={{ color: "#FF6600" }}>Bangalore</span>
              </span>
            </div>
          </div>

          {/* Bottom Right Text */}
          <div className="footer-note">
            <span className="footer-note-text">
              Lahul Spiti <br /> May 2024
            </span>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          {/* Text Content */}
          <div className="about-text">
            <span className="about-title">
              About <span className="about-subtitle">Me</span>
            </span>

            <span className="about-quote">
              "Innovation is seeing what everybody has seen and thinking what
              nobody has thought."
            </span>

            <span className="about-paragraph">
              The world’s cultural and technological evolution fascinates me.
              With technology redefining possibilities, I aspire to drive this
              transformation.
            </span>

            <span className="about-paragraph">
              With a strong foundation in analytics and a passion for
              transforming data into strategy, I thrive on solving business
              challenges through innovation. Guided by intuition and user
              insight, I see data as more than numbers—it’s a story, a vision,
              and a path to better experiences.
            </span>

            <span className="about-section-heading">My Philosophy:</span>

            <span className="about-philosophy">
              Embrace change, challenge norms, and build products that inspire
              progress.
            </span>

            <span className="about-cta">
              The future isn’t to be awaited—it’s to be created. Let’s build it
              together!
            </span>
            <div className="button-container">
              <a href={resume} download style={{ textDecoration: "none" }}>
                <Button variant="contained" className="about-button">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="about-image-blob">
            <img src={profileImage} alt="Rushika" className="about-image-img" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            marginTop: "3rem",
            padding: "2rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}>
          <h2 style={{ fontWeight: "bold", color: "#222" }}>
            Work <span style={{ color: "#999" }}>Experience</span>
          </h2>

          {/* Accenture */}
          <div>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>Accenture</h3>
            <span style={{ fontStyle: "italic", color: "#666" }}>
              Analytics & Modelling Associate
            </span>
            <p style={{ color: "#666" }}>Nov 2023 - Present</p>
            <ul>
              <li>
                Extracted insights from data on{" "}
                <strong>200,000+ properties of $100m+ valuation,</strong>
                driving key business decisions at AIG.
              </li>
              <li>
                Optimized rating and underwriting for{" "}
                <strong>380+ accounts</strong> accounting to{" "}
                <strong>300m+ AIG business</strong>.
              </li>
              <li>
                Enhanced <strong>operational efficiency</strong>, improving
                process quality and reducing turnaround time by{" "}
                <strong>20%</strong>, leveraging advanced analytics to translate
                complex data into strategic recommendations
              </li>
              <l1>
                <strong>Enhanced operational efficiency</strong>, suggesting
                process improvements that increased quality, reduced turnaround
                time by 20%, and improved user experience
              </l1>
              <li>
                Achieved <strong>244% productivity</strong>, maintaining{" "}
                <strong>100% quality assurance</strong>.
              </li>
            </ul>
          </div>

          {/* NHAI */}
          <div>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>
              National Highway Authority of India (NHAI)
            </h3>
            <span style={{ fontStyle: "italic", color: "#666" }}>
              Engineering Intern
            </span>
            <p style={{ color: "#666" }}>Jun 2022 - Jul 2022</p>
            <ul>
              <li>
                Analyzed and verified surveyed data for gazette publishing in a
                new 4-lane highway project, ensuring{" "}
                <strong>100% accuracy</strong> and alignment with project
                timelines.
              </li>
              <li>
                Managed surveying, tendering & reports for a new 4-lane highway,
                tracking progress and insights.
              </li>
              <li>
                Facilitated land acquisition and forest clearance NOCs for the
                Shimla-Kangra package, verifying and computing critical
                geospatial and legal data to streamline approvals.
              </li>
            </ul>
          </div>

          {/* Mohit Construction */}
          <div>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>
              Mohit Construction & Suppliers
            </h3>
            <span style={{ fontStyle: "italic", color: "#666" }}>
              Project Manager
            </span>
            <p style={{ color: "#666" }}>Dec 2020 - Present</p>
            <ul>
              <li>
                Led installation & commissioning of a Vapour Recovery Unit at
                IOCL, optimizing scheduling, resources, and efficiency.
              </li>
              <li>
                Revamped tendering, estimation & bidding with{" "}
                <strong>data-driven strategies</strong>, improving accuracy and
                cost-effectiveness.
              </li>
              <li>
                Cut project costs by <strong>5%</strong> through strategic
                planning and process optimization.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padingTop: "6rem",
          background: "linear-gradient(to bottom, #E0F7FA 90%, #FFFFFF 100%)",
        }}>
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            margin: "3rem",
            padding: "2rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}>
          <h2 style={{ fontWeight: "bold", color: "#222" }}>Education</h2>
          <div>
            <h3 style={{ fontWeight: "bold", color: "#333" }}>
              National Institute of Technology (NIT), Hamirpur
            </h3>
            <span style={{ fontStyle: "italic", color: "#666" }}>
              B. Tech | 2019-2023 | 8.73/10
            </span>
            <ul>
              <li>
                Department <strong>President</strong>, led team initiatives and
                academic collaborations.
              </li>
              <li>
                Graduated <strong>Top 20%</strong>, showcasing academic
                excellence.
              </li>
              <li>
                Led Placement Team, achieving <strong>86%</strong> placements.
              </li>
              <li>
                Ranked <strong>Winner</strong> in <strong>IIT Bombay</strong>{" "}
                Mapathon 2020 among <strong>20k</strong> teams.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            marginTop: "3rem",
            marginBottom: "3rem",
            padding: "2rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}>
          <h2 style={{ fontWeight: "bold", color: "#222" }}>
            Projects, Pitches &{" "}
            <span style={{ color: "#999" }}>Problem Solving</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}>
            {/* Project 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <img
                src={yuzuURl}
                alt="Yuzu project logo"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ fontWeight: "bold", color: "#333" }}>Yuzu</h3>
              <p style={{ color: "#666" }}>
                YUZU is a comprehensive women’s wellness tracker designed to
                support hormonal health, mental well-being, and daily balance
                through yoga, meditation, Ayurveda, and natural healing,
                empowers women with personalized insights, guided self-care
                routines, and holistic remedies.
              </p>
            </div>
            {/* Project 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <img
                src={anna}
                alt="Annaprashan project banner"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ fontWeight: "bold", color: "#333" }}>Annaprashan</h3>
              <p style={{ color: "#666" }}>
                Annaprashan connects home chefs with consumers, delivering
                healthy, home-made meals. It empowers local talent, generates
                employment, and preserves culinary traditions while making
                nutritious, authentic food easily accessible through a seamless,
                tech-driven platform.
              </p>
            </div>
            {/* Project 3 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <img
                src={stuti}
                alt="Mangal Stuti website preview"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ fontWeight: "bold", color: "#333" }}>
                Mangal Stuti
              </h3>
              <p style={{ color: "#666" }}>
                Mangal Stuti was the first integrated online platform enabling
                devotees worldwide to book and participate in live Hindu
                rituals, poojas, and astrology sessions via video conferencing
                across renowned Indian temples.
              </p>
            </div>
            {/* Project 4 */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <img
                src="/pcu-e-rickshaw.jpg"
                alt="PCU Values of E-Rickshaw dashboard preview"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ fontWeight: "bold", color: "#333" }}>
                PCU Values of E-Rickshaw
              </h3>
              <p style={{ color: "#666" }}>
                A data-driven project optimizing the efficiency and performance
                of e-rickshaws through analytics.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
