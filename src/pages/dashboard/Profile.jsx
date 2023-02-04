import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector((state) => state?.blogReducer);
  console.log(state);

  return (
    <div>
      <div className="p-10">
        <h2 className="text-2xl my-2">Profile</h2>

        <div className="flex flex-col gap-2">profile not found</div>
      </div>
    </div>
  );
};

export default Profile;
