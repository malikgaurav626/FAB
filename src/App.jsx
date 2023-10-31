import "./App.css";
import fabBtnSvg from "/fab-btn-svg.svg";
import fabCloseBtnSvg from "/close-fab-btn-svg.svg";
import fabContactSvg from "/contact-svg.svg";
import fabSuggestSvg from "/suggestion-svg.svg";
import fabReportSvg from "/report-svg.svg";
import fabFeedbackSvg from "/feedback-svg.svg";
import { useState } from "react";
import { useEffect } from "react";
import anime from "animejs";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [reportInputs, setReportInputs] = useState({
    section: "",
    message: "",
    attachedImages: [],
    email: "N/A",
  });
  const [feedbackInputs, setFeedbackInputs] = useState({
    message: "",
    attachedImages: [],
    anonymous: false,
    email: "N/A",
  });
  const [suggestInputs, setSuggestInputs] = useState({
    section: "",
    message: "",
    attachedImages: [],
    email: "N/A",
  });
  const [contactInputs, setContactInputs] = useState({
    name: "",
    message: "",
    email: "N/A",
    mobile: "N/A",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleImageDelete(event) {
    const index = event.target.id.split("-")[0];
    const newImages = reportInputs.attachedImages.filter((image, i) => {
      return i != index;
    });
    setReportInputs({ ...reportInputs, attachedImages: newImages });
  }
  function handleFeedbackImageDelete(event) {
    const index = event.target.id.split("-")[0];
    const newImages = feedbackInputs.attachedImages.filter((image, i) => {
      return i != index;
    });
    setFeedbackInputs({ ...feedbackInputs, attachedImages: newImages });
  }
  function handleSuggestImageDelete(event) {
    const index = event.target.id.split("-")[0];
    const newImages = suggestInputs.attachedImages.filter((image, i) => {
      return i != index;
    });
    setFeedbackInputs({ ...suggestInputs, attachedImages: newImages });
  }

  function handleReportSubmit() {
    if (reportInputs.message.length > 0) {
      console.log("Report Submitted", reportInputs);
      setIsActive(false);
      document.getElementsByClassName(
        "fab-card-container"
      )[0].style.pointerEvents = "none";

      setReportInputs({
        section: "",
        message: "",
        attachedImages: [],
        email: "N/A",
      });

      anime({
        targets: ".fab-card-container",
        bottom: 20,
        opacity: 0,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });
      anime({
        targets: ".speechbox-container",
        bottom: 80,
        opacity: 1,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });

      setTimeout(() => {
        anime({
          targets: ".speechbox-container",
          bottom: 10,
          opacity: 0,
          easing: "easeInBack",
          duration: 500,
          delay: 250,
        });
      }, 3250);
    }
  }
  function handleFeedbackSubmit() {
    if (feedbackInputs.message.length > 0) {
      console.log("Feedback Submitted", feedbackInputs);
      setIsActive(false);
      document.getElementsByClassName(
        "fab-card-container"
      )[0].style.pointerEvents = "none";

      setFeedbackInputs({
        message: "",
        attachedImages: [],
        anonymous: false,
        email: "N/A",
      });

      anime({
        targets: ".fab-card-container",
        bottom: 20,
        opacity: 0,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });
      anime({
        targets: ".speechbox-container",
        bottom: 80,
        opacity: 1,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });

      setTimeout(() => {
        anime({
          targets: ".speechbox-container",
          bottom: 10,
          opacity: 0,
          easing: "easeInBack",
          duration: 500,
          delay: 250,
        });
      }, 3250);
    }
  }
  function handleSuggestionSubmit() {
    if (suggestInputs.message.length > 0) {
      console.log("Suggestion Submitted", suggestInputs);
      setIsActive(false);
      document.getElementsByClassName(
        "fab-card-container"
      )[0].style.pointerEvents = "none";

      setSuggestInputs({
        section: "",
        message: "",
        attachedImages: [],
        email: "N/A",
      });

      anime({
        targets: ".fab-card-container",
        bottom: 20,
        opacity: 0,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });
      anime({
        targets: ".speechbox-container",
        bottom: 80,
        opacity: 1,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });

      setTimeout(() => {
        anime({
          targets: ".speechbox-container",
          bottom: 10,
          opacity: 0,
          easing: "easeInBack",
          duration: 500,
          delay: 250,
        });
      }, 3250);
    }
  }
  function handleContactSubmit() {
    if (contactInputs.message.length > 0) {
      console.log("Contact Submitted", contactInputs);
      setIsActive(false);
      document.getElementsByClassName(
        "fab-card-container"
      )[0].style.pointerEvents = "none";

      setContactInputs({
        name: "",
        message: "",
        email: "N/A",
        mobile: "N/A",
      });

      anime({
        targets: ".fab-card-container",
        bottom: 20,
        opacity: 0,
        easing: "easeOutBack",
        duration: 500,
        delay: 250,
      });
      if(window.innerWidth < 576)
      {
        anime({
          targets: ".speechbox-container",
          bottom: 80,
          right: 13,
          opacity: 1,
          easing: "easeOutBack",
          duration: 500,
          delay: 250,
        });
      }
      else {
        anime({
          targets: ".speechbox-container",
          bottom: 80,
          opacity: 1,
          easing: "easeOutBack",
          duration: 500,
          delay: 250,
        });
      }

      setTimeout(() => {
        anime({
          targets: ".speechbox-container",
          bottom: 10,
          opacity: 0,
          easing: "easeInBack",
          duration: 500,
          delay: 250,
        });
      }, 3250);
    }
  }

  function handleFabBtnClick() {
    if (isActive) {
      setCurrentBtn(null);
    } else {
      setCurrentBtn(1);
    }
    setIsActive(!isActive);
  }
  function handleBtnClick(event) {
    setIsExpanded(true);
    setCurrentBtn(event.target.id);
    const labels = document.getElementsByClassName("btn-label");
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.display = "none";
    }
    if (currentBtn == null || currentBtn == 1) {
      if(window.innerWidth > 576)
      {
        anime({
          targets: "#fab-btn-icon-report-id",
          translateX: "-360px",
          translateY: "320px",
          easing: "easeOutExpo",
          duration: 500,
        });
        anime({
          targets: "#fab-btn-icon-feedback-id",
          translateX: "-280px",
          translateY: "240px",
          easing: "easeOutExpo",
          duration: 500,
        });
        anime({
          targets: "#fab-btn-icon-suggest-id",
          translateX: "-200px",
          translateY: "160px",
          easing: "easeOutExpo",
          duration: 500,
        });
        anime({
          targets: "#fab-btn-icon-contact-id",
          translateX: "-120px",
          translateY: "80px",
          easing: "easeOutExpo",
          duration: 500,
        });
      }
      else {
        anime({
          targets: "#fab-btn-icon-report-id",
          translateX: "-340px",
          translateY: "320px",
          easing: "easeOutExpo",
          duration: 500,
        });
        anime({
          targets: "#fab-btn-icon-feedback-id",
          translateX: "-260px",
          translateY: "240px",
          easing: "easeOutExpo",
          duration: 500,
        });
        anime({
          targets: "#fab-btn-icon-suggest-id",
          translateX: "-180px",
          translateY: "160px",
          easing: "easeOutExpo",
          duration: 500,
        });
        anime({
          targets: "#fab-btn-icon-contact-id",
          translateX: "-100px",
          translateY: "80px",
          easing: "easeOutExpo",
          duration: 500,
        });
      }
    }

    setTimeout(() => {
      document.getElementsByClassName(
        "fab-menu-container"
      )[0].style.flexDirection = "row";
      document.getElementsByClassName("fab-menu-container")[0].style.bottom =
        "10px";
      document.getElementsByClassName("fab-menu-container")[0].style.right =
        "110px";
      anime({
        targets: "#fab-btn-icon-report-id",
        translateX: "0px",
        translateY: "0px",
        easing: "easeOutExpo",
        duration: 0,
      });
      anime({
        targets: "#fab-btn-icon-feedback-id",
        translateX: "0px",
        translateY: "0px",
        easing: "easeOutExpo",
        duration: 0,
      });
      anime({
        targets: "#fab-btn-icon-suggest-id",
        translateX: "0px",
        translateY: "0px",
        easing: "easeOutExpo",
        duration: 0,
      });
      anime({
        targets: "#fab-btn-icon-contact-id",
        translateX: "0px",
        translateY: "0px",
        easing: "easeOutExpo",
        duration: 0,
      });
    }, 500);
    if (window.innerWidth < 576) {
      anime({
        targets: ".fab-menu-container",
        translateY: -508,
        translateX: 30,
        duration: 500,
        easing: "easeOutBack",
      });
      anime({
        targets: ".fab-container",
        translateY: -500,
        duration: 500,
        easing: "easeOutBack",
      });
    }
  }

  useEffect(() => {
    if (isActive) {
      document.getElementById("fab-btn-img").style.animation =
        "animate-fadeAway 0.2s ease-in-out forwards";

      setTimeout(() => {
        document.getElementById("fab-btn-img").style.display = "none";
        document.getElementById("fab-btn-close-img").style.display = "block";
        document.getElementById("fab-btn-close-img").style.animation =
          "animate-fadeIn 0.2s ease-in-out forwards";
      }, 200);
    } else {
      document.getElementById("fab-btn-close-img").style.animation =
        "animate-fadeAway 0.2s ease-in-out forwards";
      setTimeout(() => {
        document.getElementById("fab-btn-img").style.display = "block";
        document.getElementById("fab-btn-close-img").style.display = "none";
        document.getElementById("fab-btn-img").style.animation =
          "animate-fadeIn 0.2s ease-in-out forwards";
      }, 200);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      document.getElementsByClassName(
        "fab-menu-container"
      )[0].style.pointerEvents = "all";
      anime({
        targets: ".fab-menu-container",
        translateY: 0,
        opacity: 1,
        easing: "easeOutBack",
        duration: 300,
      });
    } else {
      if (isExpanded) {
        document.getElementsByClassName(
          "fab-menu-container"
        )[0].style.pointerEvents = "none";
        console.log("inside expanded");
        anime({
          targets: ".fab-menu-container",
          translateX: 70,
          opacity: 0,
          easing: "easeInBack",
          duration: 200,
        });
        anime({
          targets: ".fab-container",
          translateY: 0,
          duration: 500,
          easing: "easeOutBack",
        });

        setTimeout(() => {
          document.getElementsByClassName(
            "fab-menu-container"
          )[0].style.flexDirection = "column";
          document.getElementsByClassName(
            "fab-menu-container"
          )[0].style.bottom = "90px";
          document.getElementsByClassName("fab-menu-container")[0].style.right =
            "0px";
          anime({
            targets: ".fab-menu-container",
            translateX: 0,
            translateY: 80,
            duration: 0,
          });
          anime({
            targets: "#fab-btn-icon-report-id",
            translateX: "0px",
            translateY: "0px",
            easing: "easeOutExpo",
            duration: 0,
          });
          anime({
            targets: "#fab-btn-icon-feedback-id",
            translateX: "0px",
            translateY: "0px",
            easing: "easeOutExpo",
            duration: 0,
          });
          anime({
            targets: "#fab-btn-icon-suggest-id",
            translateX: "0px",
            translateY: "0px",
            easing: "easeOutExpo",
            duration: 0,
          });
          anime({
            targets: "#fab-btn-icon-contact-id",
            translateX: "0px",
            translateY: "0px",
            easing: "easeOutExpo",
            duration: 0,
          });
          const labels = document.getElementsByClassName("btn-label");
          for (let i = 0; i < labels.length; i++) {
            labels[i].style.display = "block";
          }

          setIsExpanded(false);
        }, 200);
      } else {
        document.getElementsByClassName(
          "fab-menu-container"
        )[0].style.pointerEvents = "none";
        console.log("inside not expanded");
        anime({
          targets: ".fab-menu-container",
          translateY: 80,
          opacity: 0,
          easing: "easeInBack",
          duration: 200,
        });
      }
    }
  }, [isActive]);

  useEffect(() => {
    if (currentBtn != null && currentBtn != 1) {
      document.getElementsByClassName(
        "fab-card-container"
      )[0].style.pointerEvents = "all";

      if (window.innerWidth > 576) {
        anime({
          targets: ".fab-card-container",
          bottom: 100,
          opacity: 1,
          easing: "easeOutBack",
          duration: 500,
          delay: 250,
        });
      } else {
        anime({
          targets: ".fab-card-container",
          bottom: 0,
          opacity: 1,
          easing: "easeOutBack",
          duration: 500,
          delay: 250,
        });
      }
    }
    if (currentBtn == 5) {
      document.getElementById("fab-feedback-card-id").style.display = "none";
      document.getElementById("fab-suggest-card-id").style.display = "none";
      document.getElementById("fab-contact-card-id").style.display = "none";
      document.getElementById("fab-report-card-id").style.display = "flex";

      document.getElementById("feedback-speechbox-id").style.display = "none";
      document.getElementById("suggest-speechbox-id").style.display = "none";
      document.getElementById("contact-speechbox-id").style.display = "none";
      document.getElementById("report-speechbox-id").style.display = "flex";
    } else if (currentBtn == 4) {
      document.getElementById("fab-feedback-card-id").style.display = "flex";
      document.getElementById("fab-suggest-card-id").style.display = "none";
      document.getElementById("fab-contact-card-id").style.display = "none";
      document.getElementById("fab-report-card-id").style.display = "none";

      document.getElementById("feedback-speechbox-id").style.display = "flex";
      document.getElementById("suggest-speechbox-id").style.display = "none";
      document.getElementById("contact-speechbox-id").style.display = "none";
      document.getElementById("report-speechbox-id").style.display = "none";
    } else if (currentBtn == 3) {
      document.getElementById("fab-feedback-card-id").style.display = "none";
      document.getElementById("fab-suggest-card-id").style.display = "flex";
      document.getElementById("fab-contact-card-id").style.display = "none";
      document.getElementById("fab-report-card-id").style.display = "none";

      document.getElementById("feedback-speechbox-id").style.display = "none";
      document.getElementById("suggest-speechbox-id").style.display = "flex";
      document.getElementById("contact-speechbox-id").style.display = "none";
      document.getElementById("report-speechbox-id").style.display = "none";
    } else if (currentBtn == 2) {
      document.getElementById("fab-feedback-card-id").style.display = "none";
      document.getElementById("fab-suggest-card-id").style.display = "none";
      document.getElementById("fab-contact-card-id").style.display = "flex";
      document.getElementById("fab-report-card-id").style.display = "none";

      document.getElementById("feedback-speechbox-id").style.display = "none";
      document.getElementById("suggest-speechbox-id").style.display = "none";
      document.getElementById("contact-speechbox-id").style.display = "flex";
      document.getElementById("report-speechbox-id").style.display = "none";
    }
    if (currentBtn == null) {
      document.getElementsByClassName(
        "fab-card-container"
      )[0].style.pointerEvents = "none";

      if (window.innerWidth > 576) {
        anime({
          targets: ".fab-card-container",
          bottom: 0,
          opacity: 0,
          easing: "easeInBack",
          duration: 500,
          delay: 250,
        });
      } else {
        anime({
          targets: ".fab-card-container",
          bottom: -100,
          opacity: 0,
          easing: "easeInBack",
          duration: 500,
          delay: 250,
        });
      }
    }
  }, [currentBtn]);

  return (
    <>
      <button
        className="position-absolute start-50 login"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "LoggedIn" : "LogIn"}
      </button>
      <div className="speechbox-container">
        <div className="speechbox" id="report-speechbox-id">
          Thanks for bringing the issue to our attention. We'll review it
          shortly and provide an update soon!
        </div>
        <div className="speechbox" id="feedback-speechbox-id">
          Thanks for your valuable feedback!
        </div>
        <div className="speechbox" id="suggest-speechbox-id">
          Thanks for your valuable Suggestion!
        </div>
        <div className="speechbox" id="contact-speechbox-id">
          Thanks for reaching out to us! We wil get back to you as soon as
          possible
        </div>
      </div>
      
        <>
          <div className="fab-container">
            <div className="fab-icon-lg fab-menu-btn position-relative">
              <div
                id="fab-btn-id"
                className={"fab-btn" + (currentBtn == 1 ? " active-btn" : "")}
                onClick={handleFabBtnClick}
              >
                <img
                  src={fabCloseBtnSvg}
                  id="fab-btn-close-img"
                  alt="FAB Close Button"
                  className="icon-image"
                  
                />
                <img
                  src={fabBtnSvg}
                  className="fab-btn-img"
                  id="fab-btn-img"
                  alt="FAB Button"
                  
                />
              </div>
            </div>
          </div>
          <div className="fab-menu-container">
            <ReportFAB
              currentBtn={currentBtn}
              handleBtnClick={handleBtnClick}
              setReportInputs={setReportInputs}
              reportInputs={reportInputs}
            />
            <FeedbackFAB
              currentBtn={currentBtn}
              handleBtnClick={handleBtnClick}
              setFeedbackInputs={setFeedbackInputs}
              feedbackInputs={feedbackInputs}
            />
            <SuggestFAB
              currentBtn={currentBtn}
              handleBtnClick={handleBtnClick}
              setSuggestInputs={setSuggestInputs}
              suggestInputs={suggestInputs}
            />
            <ContactFAB
              currentBtn={currentBtn}
              handleBtnClick={handleBtnClick}
              setReportInputs={setReportInputs}
              reportInputs={reportInputs}
            />
          </div>
          {isLoggedIn ? (
            
              <div className="fab-card-container">
                <div className="fab-card card" id="fab-report-card-id">
                  <div className="card-headerr text-center">
                    <p>
                      Let us know about the{" "}
                      <span className="text-black">Issue</span> you are facing
                      right now!
                    </p>
                  </div>
                  <div className="horizontal-row" />
                  <div className="card-body w-100 d-flex flex-column">
                    <p id="report-section-label-id">Choose a Section</p>
                    <div className="select-container">
                      <div className="select">
                        <input
                          type="text"
                          id="input"
                          placeholder="Section"
                          onFocus={(event) => event.target.blur()}
                        />
                      </div>

                      <div className="option-container">
                        <div className="option">
                          <label>Interview Questions</label>
                        </div>
                        <div className="option">
                          <label>Practice Questions</label>
                        </div>
                        <div className="option">
                          <label>Quizzes</label>
                        </div>
                        <div className="option">
                          <label>Other</label>
                        </div>
                      </div>
                    </div>

                    <p id="report-message-label-id">
                      Describe the issue in detail{" "}
                      <span className="text-danger">*</span>
                    </p>

                    <div className="text-field">
                      <textarea
                        className="text-field-input"
                        placeholder="Write here..."
                        rows={4}
                        onChange={(event) =>
                          setReportInputs({
                            ...reportInputs,
                            message: event.target.value,
                          })
                        }
                        value={reportInputs.message}
                      ></textarea>
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <input
                          type="file"
                          id="hidden-attach-id"
                          accept="image/*"
                          hidden
                          multiple={true}
                        ></input>
                        <label className="attach" htmlFor="hidden-attach-id">
                          <img
                            src={"/attachment.png"}
                            className="attachment"
                          ></img>
                          Attach
                        </label>
                        <div className="attached-img-container ms-auto">
                          {reportInputs.attachedImages?.map((image, index) => {
                            return (
                              <div className="image-item" key={index}>
                                <img src={image} className="attached-img"></img>
                                <div
                                  className="cross"
                                  id={index + "-image"}
                                  onClick={handleImageDelete}
                                >
                                  x
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`ms-auto submit-btn ${
                        reportInputs.message.trim() === "" ? "disabled" : ""
                      }`}
                      onClick={handleReportSubmit}
                    >
                      Submit
                    </div>
                  </div>
                </div>
                <div className="fab-card card" id="fab-feedback-card-id">
                  <div className="card-headerr text-center">
                    <p>
                      Let us know about the{" "}
                      <span className="text-black">Feedback</span> about us!
                    </p>
                  </div>
                  <div className="horizontal-row" />
                  <div className="card-body w-100 d-flex flex-column">
                    <div className="text-field mt-2">
                      <textarea
                        className="text-field-input"
                        placeholder="Write here..."
                        rows={4}
                        onChange={(event) =>
                          setFeedbackInputs({
                            ...feedbackInputs,
                            message: event.target.value,
                          })
                        }
                        value={feedbackInputs.message}
                      ></textarea>
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <input
                          type="file"
                          id="hidden-attach-id-1"
                          accept="image/*"
                          hidden
                          multiple={true}
                        ></input>
                        <label className="attach" htmlFor="hidden-attach-id-1">
                          <img
                            src={"/attachment.png"}
                            className="attachment"
                          ></img>
                          Attach
                        </label>
                        <div className="attached-img-container ms-auto">
                          {feedbackInputs.attachedImages?.map(
                            (image, index) => {
                              return (
                                <div className="image-item" key={index}>
                                  <img
                                    src={image}
                                    className="attached-img"
                                  ></img>
                                  <div
                                    className="cross"
                                    id={index + "-image"}
                                    onClick={handleFeedbackImageDelete}
                                  >
                                    x
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="anonymous-input">
                      <input
                        type="checkbox"
                        onClick={(event) =>
                          setFeedbackInputs({
                            ...feedbackInputs,
                            anonymous: event.target.checked,
                          })
                        }
                        id="anonymous-input-box"
                      ></input>
                      <label
                        htmlFor="anonymous-input-box"
                        id="anonymous-input-label"
                      >
                        Send feedback anonymously
                      </label>
                    </div>

                    <div
                      className={`ms-auto submit-btn ${
                        feedbackInputs.message.trim() === "" ? "disabled" : ""
                      }`}
                      onClick={handleFeedbackSubmit}
                    >
                      Submit
                    </div>
                  </div>
                </div>
                <div className="fab-card card" id="fab-suggest-card-id">
                  <div className="card-headerr text-center">
                    <p>
                      Share your <span className="text-black">Suggestions</span>{" "}
                      with us for a chance to earn rewards!
                    </p>
                  </div>
                  <div className="horizontal-row" />
                  <div className="card-body w-100 d-flex flex-column">
                    <p id="report-section-label-id">Choose a Section</p>
                    <div className="select-container-1">
                      <div className="select-1">
                        <input
                          type="text"
                          id="input-1"
                          placeholder="Section"
                          onFocus={(event) => event.target.blur()}
                        />
                      </div>

                      <div className="option-container-1">
                        <div className="option-1">
                          <label>Interview Questions</label>
                        </div>
                        <div className="option-1">
                          <label>Practice Questions</label>
                        </div>
                        <div className="option-1">
                          <label>Quizzes</label>
                        </div>
                        <div className="option-1">
                          <label>Other</label>
                        </div>
                      </div>
                    </div>

                    <p id="report-message-label-id">
                      Describe the suggestion in detail{" "}
                      <span className="text-danger">*</span>
                    </p>

                    <div className="text-field">
                      <textarea
                        className="text-field-input"
                        placeholder="Write here..."
                        rows={4}
                        onChange={(event) =>
                          setSuggestInputs({
                            ...suggestInputs,
                            message: event.target.value,
                          })
                        }
                        value={suggestInputs.message}
                      ></textarea>
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <input
                          type="file"
                          id="hidden-attach-id-2"
                          accept="image/*"
                          hidden
                          multiple={true}
                        ></input>
                        <label className="attach" htmlFor="hidden-attach-id-2">
                          <img
                            src={"/attachment.png"}
                            className="attachment"
                          ></img>
                          Attach
                        </label>
                        <div className="attached-img-container ms-auto">
                          {suggestInputs.attachedImages?.map((image, index) => {
                            return (
                              <div className="image-item" key={index}>
                                <img src={image} className="attached-img"></img>
                                <div
                                  className="cross"
                                  id={index + "-image"}
                                  onClick={handleSuggestImageDelete}
                                >
                                  x
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`ms-auto submit-btn ${
                        suggestInputs.message.trim() === "" ? "disabled" : ""
                      }`}
                      onClick={handleSuggestionSubmit}
                    >
                      Submit
                    </div>
                  </div>
                </div>
                <div className="fab-card card" id="fab-contact-card-id">
                  <div className="card-headerr text-center">
                    <p>
                      Get in <span className="text-black">Contact with us</span>{" "}
                      for your queries!
                    </p>
                  </div>
                  <div className="horizontal-row" />
                  <div className="card-body w-100 d-flex flex-column">
                    <p id="report-section-label-id">Your Name</p>
                    <input
                      className="custom-input"
                      type="text"
                      placeholder="Enter your Name"
                      onChange={(event) =>
                        setContactInputs({
                          ...contactInputs,
                          name: event.target.value,
                        })
                      }
                      value={contactInputs.name}
                    ></input>

                    <p id="report-message-label-id">
                      What would you like to ask?{" "}
                      <span className="text-danger">*</span>
                    </p>

                    <div className="text-field">
                      <textarea
                        className="text-field-input"
                        placeholder="Write here..."
                        rows={4}
                        onChange={(event) =>
                          setContactInputs({
                            ...contactInputs,
                            message: event.target.value,
                          })
                        }
                        value={contactInputs.message}
                      ></textarea>
                    </div>
                    <div
                      className={`ms-auto submit-btn ${
                        contactInputs.message.trim() === "" ? "disabled" : ""
                      }`}
                      onClick={handleContactSubmit}
                    >
                      Submit
                    </div>
                  </div>
                </div>
            
            </div>
          ) : (
            <div className="fab-card-container">
              <div className="fab-card card" id="fab-report-card-id">
                <div className="card-headerr text-center">
                  <p>
                    Let us know about the{" "}
                    <span className="text-black">Issue</span> you are facing
                    right now!
                  </p>
                </div>
                <div className="horizontal-row" />
                <div className="card-body w-100 d-flex flex-column">
                  <p id="report-section-label-id">Choose a Section</p>
                  <div className="select-container">
                    <div className="select">
                      <input
                        type="text"
                        id="input"
                        placeholder="Section"
                        onFocus={(event) => event.target.blur()}
                      />
                    </div>

                    <div className="option-container">
                      <div className="option">
                        <label>Interview Questions</label>
                      </div>
                      <div className="option">
                        <label>Practice Questions</label>
                      </div>
                      <div className="option">
                        <label>Quizzes</label>
                      </div>
                      <div className="option">
                        <label>Other</label>
                      </div>
                    </div>
                  </div>

                  <p id="report-message-label-id">
                    Describe the issue in detail{" "}
                    <span className="text-danger">*</span>
                  </p>

                  <div className="text-field">
                    <textarea
                      className="text-field-input"
                      placeholder="Write here..."
                      rows={4}
                      onChange={(event) =>
                        setReportInputs({
                          ...reportInputs,
                          message: event.target.value,
                        })
                      }
                      value={reportInputs.message}
                    ></textarea>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                      <input
                        type="file"
                        id="hidden-attach-id"
                        accept="image/*"
                        hidden
                        multiple={true}
                      ></input>
                      <label className="attach" htmlFor="hidden-attach-id">
                        <img
                          src={"/attachment.png"}
                          className="attachment"
                        ></img>
                        Attach
                      </label>
                      <div className="attached-img-container ms-auto">
                        {reportInputs.attachedImages?.map((image, index) => {
                          return (
                            <div className="image-item" key={index}>
                              <img src={image} className="attached-img"></img>
                              <div
                                className="cross"
                                id={index + "-image"}
                                onClick={handleImageDelete}
                              >
                                x
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <label
                    htmlFor="report-email-id"
                    className="email-label"
                    id="report-email-label-id"
                  >
                    Enter your email to receive an update
                  </label>
                  <input
                    className="custom-email-input"
                    type="email"
                    id="report-email-id"
                    placeholder="Enter your Email"
                    onChange={(event) =>
                      setReportInputs({
                        ...reportInputs,
                        email: event.target.value,
                      })
                    }
                  ></input>

                  <div
                    className={`ms-auto submit-btn ${
                      reportInputs.message.trim() === "" ? "disabled" : ""
                    }`}
                    onClick={handleReportSubmit}
                  >
                    Submit
                  </div>
                </div>
              </div>
              <div className="fab-card card" id="fab-feedback-card-id">
                <div className="card-headerr text-center">
                  <p>
                    Let us know about the{" "}
                    <span className="text-black">Feedback</span> about us!
                  </p>
                </div>
                <div className="horizontal-row" />
                <div className="card-body w-100 d-flex flex-column">
                  <div className="text-field mt-2">
                    <textarea
                      className="text-field-input"
                      placeholder="Write here..."
                      rows={4}
                      onChange={(event) =>
                        setFeedbackInputs({
                          ...feedbackInputs,
                          message: event.target.value,
                        })
                      }
                      value={feedbackInputs.message}
                    ></textarea>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                      <input
                        type="file"
                        id="hidden-attach-id-1"
                        accept="image/*"
                        hidden
                        multiple={true}
                      ></input>
                      <label className="attach" htmlFor="hidden-attach-id-1">
                        <img
                          src={"/attachment.png"}
                          className="attachment"
                        ></img>
                        Attach
                      </label>
                      <div className="attached-img-container ms-auto">
                        {feedbackInputs.attachedImages?.map((image, index) => {
                          return (
                            <div className="image-item" key={index}>
                              <img src={image} className="attached-img"></img>
                              <div
                                className="cross"
                                id={index + "-image"}
                                onClick={handleFeedbackImageDelete}
                              >
                                x
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="anonymous-input">
                    <input
                      type="checkbox"
                      onClick={(event) =>
                        setFeedbackInputs({
                          ...feedbackInputs,
                          anonymous: event.target.checked,
                        })
                      }
                      id="anonymous-input-box"
                    ></input>
                    <label
                      htmlFor="anonymous-input-box"
                      id="anonymous-input-label"
                    >
                      Send feedback anonymously
                    </label>
                  </div>

                  <label
                    htmlFor="feedback-email-id"
                    className="email-label"
                    id="feedback-email-label-id"
                  >
                    Enter your email to receive an update{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    className="custom-email-input"
                    type="email"
                    id="feedback-email-id"
                    placeholder="Enter your Email"
                    onChange={(event) =>
                      setFeedbackInputs({
                        ...feedbackInputs,
                        email: event.target.value,
                      })
                    }
                  ></input>

                  <div
                    className={`ms-auto submit-btn ${
                      feedbackInputs.message.trim() === "" ? "disabled" : ""
                    }`}
                    onClick={handleFeedbackSubmit}
                  >
                    Submit
                  </div>
                </div>
              </div>
              <div className="fab-card card" id="fab-suggest-card-id">
                <div className="card-headerr text-center">
                  <p>
                    Share your <span className="text-black">Suggestions</span>{" "}
                    with us for a chance to earn rewards!
                  </p>
                </div>
                <div className="horizontal-row" />
                <div className="card-body w-100 d-flex flex-column">
                  <p id="report-section-label-id">Choose a Section</p>
                  <div className="select-container-1">
                    <div className="select-1">
                      <input
                        type="text"
                        id="input-1"
                        placeholder="Section"
                        onFocus={(event) => event.target.blur()}
                      />
                    </div>

                    <div className="option-container-1">
                      <div className="option-1">
                        <label>Interview Questions</label>
                      </div>
                      <div className="option-1">
                        <label>Practice Questions</label>
                      </div>
                      <div className="option-1">
                        <label>Quizzes</label>
                      </div>
                      <div className="option-1">
                        <label>Other</label>
                      </div>
                    </div>
                  </div>

                  <p id="report-message-label-id">
                    Describe the suggestion in detail{" "}
                    <span className="text-danger">*</span>
                  </p>

                  <div className="text-field">
                    <textarea
                      className="text-field-input"
                      placeholder="Write here..."
                      rows={4}
                      onChange={(event) =>
                        setSuggestInputs({
                          ...suggestInputs,
                          message: event.target.value,
                        })
                      }
                      value={suggestInputs.message}
                    ></textarea>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                      <input
                        type="file"
                        id="hidden-attach-id-2"
                        accept="image/*"
                        hidden
                        multiple={true}
                      ></input>
                      <label className="attach" htmlFor="hidden-attach-id-2">
                        <img
                          src={"/attachment.png"}
                          className="attachment"
                        ></img>
                        Attach
                      </label>
                      <div className="attached-img-container ms-auto">
                        {suggestInputs.attachedImages?.map((image, index) => {
                          return (
                            <div className="image-item" key={index}>
                              <img src={image} className="attached-img"></img>
                              <div
                                className="cross"
                                id={index + "-image"}
                                onClick={handleSuggestImageDelete}
                              >
                                x
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <label
                    htmlFor="suggest-email-id"
                    className="email-label"
                    id="suggest-email-label-id"
                  >
                    Enter your email to receive an update{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    className="custom-email-input"
                    type="email"
                    id="suggest-email-id"
                    placeholder="Enter your Email"
                    onChange={(event) =>
                      setSuggestInputs({
                        ...suggestInputs,
                        email: event.target.value,
                      })
                    }
                  ></input>

                  <div
                    className={`ms-auto submit-btn ${
                      suggestInputs.message.trim() === "" ? "disabled" : ""
                    }`}
                    onClick={handleSuggestionSubmit}
                  >
                    Submit
                  </div>
                </div>
              </div>
              <div className="fab-card card" id="fab-contact-card-id">
                <div className="card-headerr text-center">
                  <p>
                    Get in <span className="text-black">Contact with us</span>{" "}
                    for your queries!
                  </p>
                </div>
                <div className="horizontal-row" />
                <div className="card-body w-100 d-flex flex-column">
                  <p id="report-section-label-id">Your Name</p>
                  <input
                    className="custom-input"
                    type="text"
                    placeholder="Enter your Name"
                    onChange={(event) =>
                      setContactInputs({
                        ...contactInputs,
                        name: event.target.value,
                      })
                    }
                    value={contactInputs.name}
                  ></input>

                  <label
                    htmlFor="suggest-email-id"
                    className="email-label"
                    id="suggest-email-label-id"
                  >
                    Your Email <span className="text-danger">*</span>
                  </label>
                  <input
                    className="custom-input"
                    type="email"
                    id="contact-email-id"
                    placeholder="Enter your Email"
                    onChange={(event) =>
                      setContactInputs({
                        ...contactInputs,
                        email: event.target.value,
                      })
                    }
                  ></input>

                  <label
                    htmlFor="suggest-mobile-id"
                    className="email-label"
                    id="suggest-mobile-label-id"
                  >
                    Your Mobile number
                  </label>
                  <input
                    className="custom-input"
                    type="text"
                    id="contact-mobile-id"
                    placeholder="Enter your number"
                    onChange={(event) =>
                      setContactInputs({
                        ...contactInputs,
                        email: event.target.value,
                      })
                    }
                  ></input>

                  <p id="report-message-label-id">
                    What would you like to ask?{" "}
                    <span className="text-danger">*</span>
                  </p>

                  <div className="text-field">
                    <textarea
                      className="text-field-input"
                      placeholder="Write here..."
                      rows={4}
                      onChange={(event) =>
                        setContactInputs({
                          ...contactInputs,
                          message: event.target.value,
                        })
                      }
                      value={contactInputs.message}
                    ></textarea>
                  </div>

                  <div
                    className={`ms-auto submit-btn ${
                      contactInputs.message.trim() === "" ? "disabled" : ""
                    }`}
                    onClick={handleContactSubmit}
                  >
                    Submit
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      
    </>
  );
}

export default App;

function ReportFAB({
  currentBtn,
  handleBtnClick,
  setReportInputs,
  reportInputs,
}) {
  useEffect(() => {
    const input = document.getElementById("hidden-attach-id");

    const handleChange = (event) => {
      const files = event.target.files;
      if (files) {
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            // Push the base64 data URL to the imagesArray
            imagesArray.push(e.target.result);
            // If all files have been read, update the state
            if (imagesArray.length === files.length) {
              setReportInputs({ ...reportInputs, attachedImages: imagesArray });
            }
          };
          reader.readAsDataURL(files[i]); // Read the file as a data URL
        }
      }
    };

    input.addEventListener("change", handleChange);

    return () => input.removeEventListener("change", handleChange);
  }, [reportInputs, setReportInputs]);

  useEffect(() => {
    let selectContainer = document.querySelector(".select-container");
    let select = document.querySelector(".select");
    let input = document.getElementById("input");
    let options = document.querySelectorAll(".select-container .option");

    select.onclick = () => {
      selectContainer.classList.toggle("active");
    };

    options.forEach((e) => {
      e.addEventListener("click", () => {
        input.value = e.innerText;
        setReportInputs({ ...reportInputs, section: e.innerText });
        selectContainer.classList.remove("active");
        options.forEach((e) => {
          e.classList.remove("selected");
        });
        e.classList.add("selected");
      });
    });
  }, [reportInputs, setReportInputs]);

  return (
    <>
      <div className="fab-menu-item">
        <div
          className="fab-icon-lg position-relative"
          id="fab-btn-icon-report-id"
        >
          <div
            className={"fab-btn" + (currentBtn == 5 ? " active-btn" : "")}
            id={5}
            onClick={handleBtnClick}
          >
            <img
              src={fabFeedbackSvg}
              className="icons center-btn"
              id="report-id"
              alt="report"
            ></img>
            <p className="btn-label" id="report-label-id">
              Report An Issue
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function FeedbackFAB({
  currentBtn,
  handleBtnClick,
  setFeedbackInputs,
  feedbackInputs,
}) {
  useEffect(() => {
    const input = document.getElementById("hidden-attach-id-1");

    const handleChange = (event) => {
      const files = event.target.files;
      if (files) {
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            // Push the base64 data URL to the imagesArray
            imagesArray.push(e.target.result);
            // If all files have been read, update the state
            if (imagesArray.length === files.length) {
              setFeedbackInputs({
                ...feedbackInputs,
                attachedImages: imagesArray,
              });
            }
          };
          reader.readAsDataURL(files[i]); // Read the file as a data URL
        }
      }
    };

    input.addEventListener("change", handleChange);

    return () => input.removeEventListener("change", handleChange);
  }, [feedbackInputs, setFeedbackInputs]);

  return (
    <>
      <div className="fab-menu-item">
        <div
          className="fab-icon-lg position-relative"
          id="fab-btn-icon-feedback-id"
        >
          <div
            className={"fab-btn" + (currentBtn == 4 ? " active-btn" : "")}
            id={4}
            onClick={handleBtnClick}
          >
            <img
              src={fabReportSvg}
              className="icons center-btn"
              id="feedback-id"
              alt="report"
            ></img>
            <p className="btn-label" id="feedback-label-id">
              Share Feedback
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SuggestFAB({
  currentBtn,
  handleBtnClick,
  setSuggestInputs,
  suggestInputs,
}) {
  useEffect(() => {
    const input = document.getElementById("hidden-attach-id-2");

    const handleChange = (event) => {
      const files = event.target.files;
      if (files) {
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            // Push the base64 data URL to the imagesArray
            imagesArray.push(e.target.result);
            // If all files have been read, update the state
            if (imagesArray.length === files.length) {
              setSuggestInputs({
                ...suggestInputs,
                attachedImages: imagesArray,
              });
            }
          };
          reader.readAsDataURL(files[i]); // Read the file as a data URL
        }
      }
    };

    input.addEventListener("change", handleChange);

    return () => input.removeEventListener("change", handleChange);
  }, [suggestInputs, setSuggestInputs]);

  useEffect(() => {
    let selectContainer = document.querySelector(".select-container-1");
    let select = document.querySelector(".select-1");
    let input = document.getElementById("input-1");
    let options = document.querySelectorAll(".select-container-1 .option-1");

    select.onclick = () => {
      selectContainer.classList.toggle("active");
    };

    options.forEach((e) => {
      e.addEventListener("click", () => {
        input.value = e.innerText;
        setSuggestInputs({ ...suggestInputs, section: e.innerText });
        selectContainer.classList.remove("active");
        options.forEach((e) => {
          e.classList.remove("selected");
        });
        e.classList.add("selected");
      });
    });
  }, [suggestInputs, setSuggestInputs]);
  return (
    <>
      <div className="fab-menu-item">
        <div className="fab-icon-lg" id="fab-btn-icon-suggest-id">
          <div
            className={
              "fab-btn position-relative" +
              (currentBtn == 3 ? " active-btn" : "")
            }
            id={3}
            onClick={handleBtnClick}
          >
            <img
              src={fabSuggestSvg}
              className="icons"
              id="suggest-id"
              alt="suggestions"
            ></img>
            <p className="btn-label" id="suggest-label-id">
              Give Suggestions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactFAB({ currentBtn, handleBtnClick }) {
  return (
    <>
      <div className="fab-menu-item">
        <div
          className="fab-icon-lg position-relative"
          id="fab-btn-icon-contact-id"
        >
          <div
            className={
              "fab-btn position-relative" +
              (currentBtn == 2 ? " active-btn" : "")
            }
            id={2}
            onClick={handleBtnClick}
          >
            <img
              src={fabContactSvg}
              className="icons center-btn"
              id="fab-contact-id"
              alt="contact us"
            ></img>
            <p className="btn-label">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}
