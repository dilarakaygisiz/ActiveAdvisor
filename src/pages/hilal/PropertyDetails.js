import React from "react";
import { housesData } from "../../data"; // Değişiklik burada
import { useParams } from "react-router-dom"; // Değişiklik burada
import { BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";
import styles from "./PropertyDetails.module.css";
import Reservation from "../../components/hilal/Reservation";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import CommentSystem from "../../components/active-advisor/CommentSystem";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id)); // Değişiklik burada

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p6hd9y3", "template_y7v7uw4", form.current, {
        publicKey: "zy__FgLLq986PI9it",
      })
      .then(
        () => {
          alert("Your message has sent successfully.");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  console.log(house);

  return (
    <section>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-8">
            <div className={styles.top}>
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#3B5B5D",
                  }}
                >
                  {house.name}
                </h2>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    maxWidth: "260px",
                  }}
                >
                  {house.address}
                </h3>
              </div>
              <div className={styles.categoryCont}>
                <div
                  className={styles.categoryBtn}
                  style={{ backgroundColor: "#CBDBDE", color: "#000000" }}
                >
                  {house.type}
                </div>
                <div
                  className={styles.categoryBtn}
                  style={{ backgroundColor: "#538991" }}
                >
                  {house.country}
                </div>
              </div>
              <div
                style={{
                  fontSize: "1.875rem",
                  fontWeight: 600,
                  color: "#3B5B5D",
                }}
              >
                ₺ {house.price}
              </div>
            </div>
            <div className={styles.bottom}>
              <div style={{ maxWidth: "768px" }}>
                <div style={{ marginBottom: "2rem" }}>
                  <img
                    style={{ height: "auto", maxWidth: "100%" }}
                    src={house.imageLg}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    columnGap: "1.5rem",
                    marginBottom: "1.5rem",
                    color: "rgb(109 40 217)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      columnGap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <IoIosPeople
                      style={{ fontSize: "2.25rem", color: "rgb(107 114 128)" }}
                    />
                    <div style={{ marginLeft: ".25rem", color: "#3B5B5D" }}>
                      {house.bedrooms}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <FaDoorOpen
                      style={{
                        fontSize: "1.875rem",
                        color: "rgb(107 114 128)",
                      }}
                    />
                    <div style={{ marginLeft: ".25rem", color: "#3B5B5D" }}>
                      {house.bathrooms}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "1.5rem",
                      alignItems: "center",
                    }}
                  >
                    <BiArea
                      style={{
                        fontSize: "1.875rem",
                        color: "rgb(107 114 128)",
                      }}
                    />
                    <div style={{ marginLeft: ".25rem", color: "#3B5B5D" }}>
                      {house.surface}
                    </div>
                  </div>
                </div>
                <div>{house.description}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              style={{
                flex: 1,
                background: "white",
                width: "100%",
                marginBottom: "2rem",
                padding: "2rem 1.5rem",
              }}
            >
              <div>
                <Reservation />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div
                style={{
                  marginTop: "25px",
                  flex: 1,
                  background: "white",
                  marginBottom: "2rem",
                  border: "1px solid rgb(209 213 219)",
                  borderRadius: ".5rem",
                  padding: "2rem 1.5rem",
                  boxShadow: "0 4px 4px rgba(0,0,0,0.2)",
                }}
              >
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Name*"
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Email*"
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Phone*"
                  />
                  <textarea
                    name="message"
                    className={styles.textarea}
                    placeholder="I want to ask a question about..."
                  ></textarea>
                  <div style={{ display: "flex", columnGap: ".5rem" }}>
                    <button
                      onSubmit={sendEmail}
                      className={`${styles.btn} ${styles.sendBtn}`}
                    >
                      Send message
                    </button>
                    <button className={`${styles.btn} ${styles.callBtn}`}>
                      Call
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <CommentSystem
                communityId={house.type === 'Community' ? house.id : null}
                sportsAreaId={house.type === 'Sports Area' ? house.id : null}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
