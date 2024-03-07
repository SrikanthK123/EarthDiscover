import React, { useState, useEffect } from "react";
import {
  COLLECTION_ID_MESSAGES,
  DATABASE_ID,
  databases,
} from "../appwriteConfig";
import { ID, Query } from "appwrite";
import RunGif from "../Images/RatRunning.gif";

const About = () => {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [userName, setUserName] = useState("");
  

  useEffect(() => {
    getMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if messageBody is empty
    if (!messageBody.trim() || !emailUser.trim() || !userName.trim()) {
      alert("Please enter all fields before submitting.");
      return;
    }

    let payload = {
      body: messageBody,
      emailUser: emailUser,
      userName: userName,
    };

    let response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      ID.unique(),
      payload
    );

    console.log("create : ", response);
    setMessages((prevState) => [response, ...prevState]);
    setMessageBody("");
    setEmailUser("");
    setUserName("");
  };

  const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
     /* [Query.orderDesc("$createdAt")]*/ /// for Desc
    );
    console.log("Response : ", response);
    setMessages(response.documents);
  };

  const deleteMessage = async (message_id) => {
    databases.deleteDocument(DATABASE_ID, COLLECTION_ID_MESSAGES, message_id);
    setMessages((prevState) =>
      messages.filter((message) => message.$id !== message_id)
    );
  };

  return (
    <div
      style={{ backgroundColor: "#252A36", height: "auto", padding: "40px" }}
    >
      <div
        className="container"
        style={{
          padding: "10px",
          borderRadius: "15px",
          marginBottom: "40px",
          color: "white",
          textAlign: "justify",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Roboto",
          }}
        >
          About
        </h2>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "250px",
              backgroundColor: "#dbd8e3",
              margin: "10px",
              borderRadius: "15px",
              background: "linear-gradient(#dbd8e3,#dbd8e3,#dbd8e3,#5c5470)",
            }}
          >
            <span>
              <img
                alt="img"
                src="https://i.pinimg.com/originals/0f/61/89/0f618923cdb0e234b08e4f620631aba6.gif"
                style={{ width: "50px", height: "50px", zIndex: "1" }}
              />
            </span>
            <img
              src="https://media0.giphy.com/media/326iF1qWfsTgKA4c78/source.gif"
              style={{ width: "70px", height: "70px", zIndex: "1" }}
              alt="img"
            />
            <img
              alt="img"
              src="https://th.bing.com/th/id/R.f5800d2d2b8760e1344220b09d3165bb?rik=cZlACF9qi6qMJQ&riu=http%3a%2f%2fi.makeagif.com%2fmedia%2f8-18-2015%2ftyy0Nk.gif&ehk=G4mAFV7MZFO3wvntHB2pZZt%2fY10Kv1UpOuxaSeWYISs%3d&risl=&pid=ImgRaw&r=0"
              style={{ width: "60px", height: "50px", zIndex: "1" }}
            />
            <span>
              <img
                src={RunGif}
                alt="img"
                style={{ width: "30px", height: "40px", zIndex: "1" }}
              />
            </span>
          </div>
        </div>
          <div id="TextAnimation">
        <p >
          Embark on a fascinating journey through the cosmos. My project will
          uncover the mysteries of distant galaxies, showcasing celestial beauty
          and the vastness of space. 🌌
        </p>
        <p>
          Dive into Earth's ecosystems, <code id='EV'>from lush rainforests to arid deserts.</code>
          Highlight the <code id='EV'> delica</code>te balance of nature and the diverse <code id='EV'>life</code>  that
          calls our planet home. 🌿🌍
        </p>
        <p>
          Explore the enchanting sea <code id='EV'>world</code>, revealing wonders of coral reefs,
          mysterious ocean <code id='EV'>depths</code>, and extraordinary underwater <code id='EV'> creatures</code>. 🌊🐠
        </p>
        <p>
          Through captivating visuals <code id='EV'>and stories, your project promises to
          inspire</code> awe and <code id='EV'>apprec</code>iation for the tapestry of <code id='EV'>our galaxy</code> , Earth's
          nature, and hidden secrets beneath the waves.
        </p>
        <p>
          Embark on a cosmic odyssey, <code id='EV'>unveiling</code> the ballet of stars, planets,
          and nebulae. Capture <code id='EV'>imagin</code>ations with the breath<code id='EV'>taking </code> beauty of the
          universe.
        </p>
        <p>
          Delve into Earth's landscapes, <code id='EV'>from</code> towering mountains to serene
          lakes. Portray the resilience <code id='EV'>of</code> <code id='EV'>eco</code>systemse and <code id='EV'>the inter</code>connectedness 
          of life on our blue planet. 🏞️
        </p>
        <p>
          Submerge into the mesmerizing <code id='EV'>world beneath the waves,illuminating
          mysteries</code> of the deep <code id='EV'>sea with vibrant</code> coral gardens, elusive marine
          life, and the impact of human activities.🌏
        </p>
        <p>
          This immersive exploration seamlessly weaves together cosmic wonders,
          terrestrial marvels, and the enigmatic depths of oceans. Offering a
          profound glimpse into the remarkable tapestry of our galaxy, Earth's
          nature, and hidden wonders of the sea. 🚀🌍🌊
        </p>
        </div>
      </div>
      <h1 style={{ textAlign: "center", color: "white" }}>ChatUs</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            User name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setEmailUser(e.target.value)}
            value={emailUser}
            placeholder="Enter Email"
          />
        </div>
        <label for="exampleFormControlTextarea1" class="form-label text-white">
          Comment
        </label>
        <textarea
          className="form-control "
          onChange={(e) => setMessageBody(e.target.value)}
          value={messageBody}
          placeholder="Say Something..."
          id="floatingTextarea2"
          style={{ height: "100px", padding: "10px" }}
        ></textarea>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="btn my-4 fw-bold"
            id="SentMsg"
            type="submit"
            value="Sent Message"
          />
        </div>
      </form>

      <div
        className="container"
        style={{
          backgroundColor: "#d3d6db",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>Comments</h2>

        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={message.$id}
              style={{
                backgroundColor: "white",
                margin: "20px",
                padding: "10px",
                borderRadius: "15px",
                minWidth: "200px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="DeleteIcon"
                onClick={() => {
                  deleteMessage(message.$id);
                }}
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer", float: "right", margin: "5px" }}
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
              <div>
                <p className="text" style={{ color: "#c06c84" }}>
                  <span
                    className="fw-bold"
                    style={{
                      backgroundColor: "#f70776",
                      padding: "5px",
                      color: "white",
                      borderRadius: "10px",
                      marginTop: "20px",
                      minWidth: "150px",
                    }}
                  >
                    {message.userName}
                    {message.emailUser ===
                      "srikanthkondapaka2010@gmail.com" && (
                      <span style={{ marginLeft: "5px" }}>🛠️</span>
                    )}
                  </span>
                </p>

                <div
                  style={{
                    backgroundColor: "#d5eeff",
                    padding: "10px",
                    borderRadius: "15px",
                  }}
                >
                  <span
                    className="fw-bold card-text mb-auto"
                    id="CommentMessage"
                    style={{ padding: "5px", color: "#5dacbd",textAlign:'justify',wordSpacing:'0.5px'}}
                  >
                    {message.body}
                  </span>
                </div>
                <p className="" style={{ color: "#c06c84" }}>
                  {new Date(message.$createdAt).toLocaleString(undefined, {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "black" }}>No comments</p>
        )}
      </div>
    </div>
  );
};

export default About;
