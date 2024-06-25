import { useContext, useEffect, useState } from "react";
import { FormContext, Status } from "../../App";
import axios from "axios";
import Location from "../../assets/icons/location.svg";
import Twiter from "../../assets/icons/twiter.svg";
import Link from "../../assets/icons/link.svg";
import Office from "../../assets/icons/office.svg";

const Main = () => {
  const [data, setData] = useState({});
  const { isValue } = useContext(FormContext);
  const { setStatus } = useContext(Status);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${isValue}`)
      .then((data) => {
        setData(data.data);
        setStatus(false);
      })
      .catch(() => {
        setStatus(true);
      });
  }, [isValue]);
  console.log();

  return (
    <main className="w-full rounded-2xl p-12 max-[620px]:pt-8 max-[620px]:px-6 shadow-xl shadow-[#4660bb33] dark:shadow-[transparent] bg-[#fefefe] dark:bg-[#1e2a47]">
      <div className="flex flex-col items-end">
        <div className="gap-[37px] flex justify-between items-start self-start w-full max-[620px]:gap-[19px]">
          <img
            src={data.avatar_url}
            alt="no photo"
            className="profile-avatar rounded-full w-[117px] h-[117px] max-[620px]:h-[70px] max-[620px]:w-[70px]"
          />
          <div className="grow">
            <h2 className="font-bold text-[26px] max-[620px]:text-base  text-[#2b3442] dark:text-[#fff]">
              {data.name == null ? "No Name" : data.name}
            </h2>
            <p className="profile-user_name font-normal text-[15px] max-[620px]:text-[13px] text-[#0079ff]">
              @{data.login}
            </p>
            <p className=" text-[#697c9a] dark:text-[#fff] font-normal -translate-y-14 opacity-75 text-right max-md:text-left max-md:translate-y-0  max-[620px]:text-[13px]">
              Joined {data.created_at}
            </p>
          </div>
        </div>
        <p className=" text-[#4b6a9b] dark:text-[#fff] max-w-[480px]  w-full font-normal text-[15px] leading-[167%] max-md:mt-6 max-md:self-start  max-[620px]:text-[13px]">
          {data.bio == null ? "This profile has no bio" : data.bio}
        </p>
        <div className="social flex flex-col items-end w-full">
          <div className=" bg-[#f6f8ff] dark:bg-[#141d2f] max-w-[480px]  w-full h-[85]  grid grid-cols-3 grid-rows-2 my-8 rounded-[10px] py-[15px] px-[32px] max-[620px]:my-[23px]">
            <p className="text-[#4b6a9b] dark:text-[#fff] font-normal text-[13px]  max-[620px]:text-[11px] ">
              Repos
            </p>
            <p className="text-[#4b6a9b] dark:text-[#fff] font-normal text-[13px]  max-[620px]:text-[11px] ">
              Followers
            </p>
            <p className="text-[#4b6a9b] dark:text-[#fff] font-normal text-[13px]  max-[620px]:text-[11px] ">
              Following
            </p>
            <p className=" text-[#2b3442] dark:text-[#fff] text-[22px] font-bold max-[620px]:text-[16px]">
              {data.public_repos}
            </p>
            <p className=" text-[#2b3442] dark:text-[#fff] text-[22px] font-bold max-[620px]:text-[16px]">
              {data.followers}
            </p>
            <p className=" text-[#2b3442] dark:text-[#fff] text-[22px] font-bold max-[620px]:text-[16px]">
              {data.following}
            </p>
          </div>
          <div className="social-box max-w-[480px] gap-y-[19px] gap-x-[62px] grid grid-cols-2 grid-rows-2 w-full #0079ff max-[620px]:grid-cols-1 max-[620px]:grid-rows-4 ">
            <p className="location flex gap-4 cursor-pointer">
              <Location />
              <span className="font-normal text-[15px] text-[#4b6a9b] dark:text-[#fff]">
                {data.location == null ? "No location" : data.location}
              </span>
            </p>
            <a
              href={
                data.twitter_username == null ? "#!" : data.twitter_username
              }
              className="tiwiter flex gap-4 opacity-5"
            >
              <Twiter />
              <span className="font-normal text-[15px] text-[#4b6a9b] dark:text-[#fff]">
                {data.twitter_username == null
                  ? "Not Available"
                  : data.twitter_username}
              </span>
            </a>

            <a
              href={data.html_url}
              className="github-link flex gap-4"
              target="_blank"
            >
              <Link />
              <span className="font-normal text-[15px] hover:underline text-[#4b6a9b] dark:text-[#fff]">
                {data.login}
              </span>
            </a>

            <a
              href={data.organizations_url}
              className="github-userName flex gap-4"
            >
              <Office />
              <span className="font-normal text-[15px] text-[#4b6a9b] dark:text-[#fff]">
                {data.company == null ? "No company" : data.company}
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
