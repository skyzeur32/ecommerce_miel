import React, { useState } from "react";
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import $ from "jquery"
const styles = {
  img: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    border: "2px solid #bdc3c7",
  },
  dropdown: {
    background: "transparent",
    borderColor: "transparent",
  },
};

const GoogleBtn = () => {
  const CLIENT_ID = "977704732744-qkeak4k0trvrtivb2760m7aqmv582srf.apps.googleusercontent.com";
  //const current = null;
  const [current,setCurrent] = useState(null)
  const handleLoginSuccess = (response) => {console.log(response.profileObj);setCurrent(response.profileObj);};
  const handleLogoutSuccess = (response) => {};
  const handleLoginFailure = (response) => {console.log(response)};
  const handleLogoutFailure = (response) => {};


 


  return (
    <>
      {current ? (
        <>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                width="32"
                height="32"
                src={current.imageUrl}
                style={styles.img}
                alt="profile"
              />
              
            </button>
            
            <ul style={styles.dropdown} id="logout">
               
              <li>
            
                <GoogleLogout
                  
                  clientId={CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={handleLogoutSuccess}
                  onFailure={handleLogoutFailure}
                />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        />
      )}
    </>
  );
};
export default GoogleBtn;
