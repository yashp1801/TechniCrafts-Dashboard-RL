import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { GoCalendar } from "react-icons/go";
import "./Myaccount.css";
import { useState } from "react";
import LogoutPopup from "../../global/LogOutPopup/LogoutPopup";
import { useEffect } from "react";
import axios from "axios";
import { BASE_LOGIN_URL } from "../../api";
import Joyride, { STATUS } from "react-joyride";
import Loader from "../../global/Loader/Loader";


const MyAccount = () => {
  const [handlePopUp, setHandlePopUp] = useState(false);
  const [userData, setUserData] = useState();
  const [firstTimeLogin, setFirstTimeLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>View your account Details</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: (
          <h3>
            If you want to Edit or Change any Information Related to your
            account , you can connect with Envicrafts Team through Chatbox
          </h3>
        ),
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
    ],
  });

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("userpassword");

  const loginData = {
    username: username,
    password: password,
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
  };

  useEffect(() => {
    const isFirstTimeLogin = !localStorage.getItem("loggedInBefore");
    if (isFirstTimeLogin) {
      localStorage.setItem("loggedInBefore", true);
      setFirstTimeLogin(true);
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.post(BASE_LOGIN_URL, loginData, {
          headers,
        });
        setUserData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__header">
          <h1>Technicrafts Account</h1>
          <button onClick={() => setHandlePopUp(true)}>Sign Out</button>
        </div>

        <div className="account__info__wrapper">
          <div className="account__info__leftside">
            <AiOutlineUser
              className={
                userData?.role === "Admin"
                  ? "account__info__leftside__icon admin"
                  : "account__info__leftside__icon"
              }
            />
            <h1>{userData?.username}</h1>
            <span>{userData?.email}</span>
            <span>{userData?.role}</span>
          </div>
          <div className="account__info__rightSide">
            <h1>Personal Information</h1>
            <p>
              We kindly request that any changes to your personal details be
              communicated to Technicrafts by contacting our customer service
              department. Our team will be happy to assist you.
            </p>
            <div className="account__info__card__wrapper">
              <div className="account__info__card" id="userName">
                <div className="card__info__wrapper">
                  <h1>Display Name</h1>
                  <span>{userData?.displayName}</span>
                </div>
                <HiOutlineUserCircle className="card__info__wrapper__icon" />
              </div>
              <div className="account__info__card" id="userInfo">
                <div className="card__info__wrapper">
                  <h1>Date Of Joining</h1>
                  <span>{userData?.join}</span>
                </div>
                <GoCalendar className="card__info__wrapper__icon" />
              </div>
              <div className="account__info__card" id="userContact">
                <div className="card__info__wrapper">
                  <h1>Contactable at</h1>
                  <span>{userData?.email}</span>
                  <span>{userData?.mobile}</span>
                </div>
                <HiOutlineChatBubbleLeftRight className="card__info__wrapper__icon" />
              </div>
            </div>
          </div>
        </div>
        {handlePopUp && <LogoutPopup setHandlePopUp={setHandlePopUp} />}
      </div>
      {firstTimeLogin ? (
        <Joyride
          continuous
          callback={() => {}}
          run={run}
          steps={steps}
          hideCloseButton
          scrollToFirstStep
          showSkipButton
          styles={{
            options: {
              // Customize the width here
              width: "500px",
            },
          }}
        />
      ) : null}
    </div>
  );
};

export default MyAccount;
