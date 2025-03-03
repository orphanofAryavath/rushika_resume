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

const Portfolio = () => {
  const mountainUrl = process.env.PUBLIC_URL + "/mountain.jpg";
  const yuzuURl = process.env.PUBLIC_URL + "/yuzu.png";
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "#F5F5F5",
            minHeight: "100vh",
            background: `url(${mountainUrl}) no-repeat top center`,
            backgroundSize: "cover",
            // position: "absolute",
            top: -40,
            left: 0,
            width: "100vw",
            zIndex: -1,
          }}>
          {/* Navbar */}
          <AppBar
            sx={{
              background: "transparent",
              boxShadow: "none",
              top: 0,
              left: 0,
              width: "100%",
              padding: 0,
              zIndex: 100,
            }}>
            <Toolbar
              style={{
                minHeight: "60px",
                padding: "0 2rem",
                display: "flex",
                justifyContent: "space-between",
              }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#222",
                  fontSize: "1.25rem",
                }}>
                Rush.
              </span>
              <div>
                <Link
                  href="#"
                  style={{
                    color: "#666",
                    margin: "0 1rem",
                    textDecoration: "none",
                  }}>
                  Works
                </Link>
                <Link
                  href="#"
                  style={{
                    color: "#666",
                    margin: "0 1rem",
                    textDecoration: "none",
                  }}>
                  Blog
                </Link>
                <Link
                  href="#"
                  style={{
                    color: "#666",
                    margin: "0 1rem",
                    textDecoration: "none",
                  }}>
                  Contact
                </Link>
              </div>
            </Toolbar>
          </AppBar>

          {/* Main Content */}
          <div
            style={{
              position: "relative",
              textAlign: "left",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              padding: "6rem 2rem",
              maxWidth: "800px",
              marginLeft: "5%",
            }}>
            <main>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#222",
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                }}>
                Hi, I'm Rushika, <br />
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    color: "#FF6600",
                  }}>
                  Business Analyst
                </span>
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#222",
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                }}>
                Based in <span style={{ color: "#FF6600" }}>Bangalore</span>
              </span>
            </main>
          </div>

          {/* Side Text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "rotate(-90deg)",
              transformOrigin: "left bottom",
            }}>
            <span style={{ color: "#666", fontSize: "12px" }}>
              Made with love by Rushika
            </span>
          </div>

          {/* Bottom Right Text */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 30,
              textAlign: "right",
            }}>
            <span style={{ color: "#666", fontSize: "12px" }}>
              Lahul Spiti <br /> May 2024
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padingTop: "6rem",
          background: "linear-gradient(to bottom, #E0F7FA, #FFFFFF)",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "900px",
            width: "100%",
            gap: "2rem",
            position: "relative",
          }}>
          {/* Text Content */}
          <div style={{ flex: 1 }}>
            <span
              style={{
                fontWeight: "bold",
                color: "#333",
                fontSize: "1.75rem",
              }}>
              About <span style={{ color: "#999" }}>Me</span>
            </span>
            <span
              style={{
                fontStyle: "italic",
                color: "#444",
                marginTop: "1rem",
                display: "block",
              }}>
              "Innovation is seeing what everybody has seen and thinking what
              nobody has thought."
            </span>
            <span
              style={{
                color: "#444",
                marginTop: "1rem",
                display: "block",
                lineHeight: "1.6",
              }}>
              The world’s cultural and technological evolution fascinates me.
              With technology redefining possibilities, I aspire to drive this
              transformation.
            </span>
            <span
              style={{
                color: "#444",
                marginTop: "1rem",
                display: "block",
                lineHeight: "1.6",
              }}>
              With a strong foundation in analytics and a passion for
              transforming data into strategy, I thrive on solving business
              challenges through innovation. Guided by intuition and user
              insight, I see data as more than numbers—it’s a story, a vision,
              and a path to better experiences.
            </span>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                marginTop: "1rem",
                display: "block",
                color: "#333",
              }}>
              My Philosophy:
            </span>
            <span
              style={{ color: "#444", marginTop: "0.5rem", display: "block" }}>
              Embrace change, challenge norms, and build products that inspire
              progress.
            </span>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                marginTop: "0.5rem",
                display: "block",
                color: "#444",
              }}>
              The future isn’t to be awaited—it’s to be created. Let’s build it
              together!
            </span>
            {/* Button */}
            <Button
              variant="contained"
              style={{
                marginTop: "1rem",
                backgroundColor: "#FF6600",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
              }}>
              Download Resume
            </Button>
          </div>
          {/* Image */}
          <div
            style={{
              flexShrink: 0,
              width: "230px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              backgroundColor: "#ddd",
            }}>
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
                <strong>200,000+ properties</strong> of $100m+ valuation,
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
                <strong>20%</strong>.
              </li>
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
                geospatial and legal data.
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
          background: "linear-gradient(to bottom, #E0F7FA, #FFFFFF)",
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
                A comprehensive women’s wellness tracker designed to support
                hormonal health, mental well-being, and holistic remedies.
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
                src="/annaprashan.jpg"
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
                A platform connecting home chefs with consumers, delivering
                home-made meals while empowering local talent.
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
                src="/mangalstuti.jpg"
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
                The first integrated online platform for booking and
                participating in Hindu rituals, poojas, and astrology sessions.
              </p>
            </div>
            {/* Project 4 */}
            <div
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
