import React from "react";

function Profile() {
  return (
    <div className="bg-[#0e1824] outline outline-1 outline-[#222a35] rounded-md mb-10 overflow-hidden">
      <div className="bg-image relative h-28">
        <img
          className="absolute w-full h-full object-cover"
          src="https://i.pinimg.com/564x/ed/35/b4/ed35b42a43f6693c1cd382347aa9e676.jpg"
          alt="Back Ground Img"
        />
        <img
          className="absolute -bottom-12 left-4 -translate-y-1/2 outline outline-[2.5px] outline-offset-2 w-12 h-12 rounded-full object-cover"
          src="../../../../../icon.png"
          alt="profile-img"
          id="profile-img"
        />
      </div>
      {/*  */}
      <div id="profile-content" className="text-left pb-10 px-5 mt-10">
        <h4 className="text-lg text-lime-100">Brad Winston</h4>
        <p className="text-gray-400">Front End in Google</p>
        <div className="mt-5 flex justify-between">
          <h5>Your Profile Views</h5>
          <h5 className="font-bold text-[whiteSmoke]">231</h5>
        </div>
        <div className="flex justify-between">
          <h5>Your Posts Views</h5>
          <h5 className="font-bold text-[whiteSmoke]">973</h5>
        </div>
        <div className="flex justify-between">
          <h5>Your Connection</h5>
          <h5 className="font-bold text-[whiteSmoke]">34</h5>
        </div>
      </div>
      {/*  */}
      <div className="Events flex items-center justify-evenly outline outline-1 outline-gray-900 outline-offset-2 h-16 w-full bg-[#0c1520]">
        <div className="flex items-stretch gap-3 flex-row-reverse">
          <p>My Item</p>
          <i class="fa-solid fa-bookmark text-lg text-blue-500"></i>
        </div>
        <div className="h-8 w-[1px] bg-gray-500"></div>
        <div className="flex items-stretch gap-3 flex-row-reverse">
          <p>My Item</p>
          <i class="fa-solid fa-money-bill-wave text-lg text-yellow-500"></i>
        </div>
      </div>
    </div>
  );
}

export default Profile;
