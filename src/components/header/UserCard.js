import React from "react";
import profile from "../../assets/imgs/profile-picture.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

function UserCard(props) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-row items-center bg-user-card-yellow p-2 rounded-lg mb-2">
          <img
            src={profile}
            className="w-1/5 h-1/5 mr-2 rounded-full border-black border-2"
            alt="profile"
          />
          <div className="w-full">
            <p className="font-semibold">{props.name}</p>
            <p className="italic font-extralight">{`ID: #${props.id}`}</p>
            <div className="flex flex-row justify-between">
              <p className="italic font-extralight">{props.standing}</p>
              <p className="italic font-extralight">{`${props.units} Units`}</p>
            </div>
          </div>
        </div>
        <button
          className="w-full"
          onClick={() =>
            alert(`Enrollment Window: March 2023`)
          }
        >
          <div className="flex flex-row justify-between p-2 rounded-lg bg-darker-gray mb-2">
            <p className="font-semibold">Enrollment Window</p>
            <IoIosArrowForward className="text-[#7B7A7A]" size={24} />
          </div>
        </button>
        <button
          onClick={() =>
            alert(`Fee Status: ${props.feeStatus ? "Paid" : "Unpaid"}`)
          }
          className="w-full"
        >
          <div className="flex flex-row justify-between p-2 rounded-lg bg-darker-gray mb-2">
            <p className="font-semibold">Fee Status</p>
            {props.feeStatus ? (
              <AiOutlineCheckCircle size={28} className="text-success-green" />
            ) : (
              <AiOutlineCloseCircle
                size={28}
                className="text-unsuccessful-red"
              />
            )}
          </div>
        </button>
      </div>
      <button onClick={() => alert("Signing out")}>
        <div className="flex flex-row items-center w-fit">
          <p className="font-semibold mr-2">Sign Out</p>
          <MdLogout size={28} />
        </div>
      </button>
    </div>
  );
}

export default UserCard;
