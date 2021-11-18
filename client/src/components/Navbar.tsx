import React, { useState } from 'react';
import SideBar from './SideBar';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../helpers/useWindowDimensions';

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const links = [
    { name: 'Mission', link: '/mission' },
    { name: 'How it Works', link: '/howitworks' },
    { name: 'Feedback!', link: '/feedback' },
  ];

  return (
    <>
      <div className=" mx-0 sticky top-0 z-30 bgAppBlue">
        <div className="container flex justify-between py-4 items-center">
          {width !== null && width < 768 && (
            <>
              <button
                className="hover:shadow-md hover:bg-transparent p-3 rounded-full"
                onClick={() => {
                  setSideBarOpen((prev) => !prev);
                }}
              >
                <svg width="30" height="30" viewBox="0 0 448 512">
                  <path
                    fill="#fff"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>

              {sideBarOpen && (
                <Modal
                  className="absolute w-3/4 h-screen left-0 top-0 bg-white pl-4 border-0"
                  show={sideBarOpen}
                  onHide={() => {
                    setSideBarOpen(false);
                  }}
                >
                  <SideBar setSideBarOpen={setSideBarOpen} />
                </Modal>
              )}
            </>
          )}
          <Link to="/">
            <img src="/Logo.svg" alt="logo" width="90" />
          </Link>
          {width !== null && width > 768 && (
            <div className="flex items-center">
              {links.map(({ name, link }) => (
                <Link
                  key={uuidv4()}
                  to={link}
                  className={`mx-7 text-xl text-white font-medium ${
                    location.pathname === link && 'border-b-2 '
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
          {width !== null && width < 768 && (
            <a className="p-3 rounded-full hover:shadow-md" href="#top">
              <svg width="30" height="30" viewBox="0 0 512 512">
                <path
                  fill="#fff"
                  d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
