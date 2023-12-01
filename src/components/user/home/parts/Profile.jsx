import React from "react";
import male from "../../../../assetes/Images/male.jpg";
import "../../../../assetes/Css/main.css";

function Profile() {
  return (
    <div className="bg-[#0e1824] outline outline-1 outline-[#222a35] rounded-md mb-10">
      <div id="bg-image"></div>
      <div className="text-center flex justify-center -mt-12">
        <img src={male} alt="profile-img" id="profile-img" />
      </div>

      <div className="profile-content text-left pb-10 px-10 mt-7">
        <h4 className="text-lg text-lime-100">Brad Winston</h4>
        <p className="text-gray-400">Front End in Google</p>
        <div className="mt-5 flex justify-between">
          <h5>Your Profile Views</h5>
          <h5>231</h5>
        </div>
        <div className="flex justify-between">
          <h5>Your Posts Views</h5>
          <h5>973</h5>
        </div>
        <div className="flex justify-between">
          <h5>Your Connection</h5>
          <h5>34</h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
