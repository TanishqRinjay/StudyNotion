import React from "react";
import UpdateProfilePicture from "./Setting/UpdateProfilePicture";
import UpdateProfileInfo from "./Setting/UpdateProfileInfo";

const Setting = () => {
    return (
        <div className="flex flex-col gap-5 w-full justify-center items-center">
            <h1 className="text-3xl text-richblack-5 flex justify-start w-[80%] font-medium mb-5">
                Edit Profile
            </h1>
            <UpdateProfilePicture />
            <UpdateProfileInfo/>
        </div>
    );
};

export default Setting;
