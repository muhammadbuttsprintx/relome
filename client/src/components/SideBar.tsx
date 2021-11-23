import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({ setSideBarOpen }: Props) => {
  const sideBarLinks = [
    {
      name: 'Home',
      imgLink: 'https://relome.io/static/media/home.7d537422.svg',
      link: '/',
    },
    {
      name: 'Mission',
      imgLink: 'https://relome.io/static/media/missionLogo.6b06c307.svg',
      link: '/mission',
    },
    {
      name: 'How it Works',
      imgLink: 'https://relome.io/static/media/oneLogo.cc44caf3.svg',
      link: '/howitworks',
    },
    {
      name: 'Feedback!',
      imgLink: 'https://relome.io/static/media/twoLogo.59cc637e.svg',
      link: '/feedback',
    },
  ];

  return (
    <>
      <>
        <div className="grid grid-cols-3 ">
          <div className="flex items-center ml-3">
            <button
              className="hover:shadow-md hover:bg-transparent rounded-full"
              onClick={() => {
                setSideBarOpen(false);
              }}
            >
              <svg width="20" height="20" viewBox="0 0 320 512">
                <path
                  fill="#4882b3"
                  d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center ml-3">
            <img className="" src="/Logo/4982B2.png" alt="logo" width="90" />
          </div>
        </div>
        <div className="flex flex-col">
          {sideBarLinks.map(({ name, imgLink, link }) => (
            <Link
              to={link}
              className="flex items-center border-b-2 py-4 ml-5 hover:shadow-md hover:text-black"
              onClick={() => {
                setSideBarOpen(false);
              }}
            >
              <img src={imgLink} alt={name} width="22px" height="22px" />
              <span className="sideBarTextBlue text-xl font-medium ml-7 mt-1">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </>
    </>
  );
};

export default SideBar;
