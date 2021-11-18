import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Feedback = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bgAppBlue pb-40">
          <div className="flex justify-center max-h-24">
            <h1 className=" text-white text-5xl font-bold text-center">
              Feedback!
            </h1>
          </div>
        </div>
        <div className="page flex justify-center">
          <div className="container bg-white mt-3 md:mt-5 p-5 rounded-lg shadow-md w-11/12">
            <h3 className="font-semibold text-xl">How does this all work?</h3>
            <div className="md:w-8/12 font-medium text-lg">
              <p className="mt-4">
                We exist purely to help you find the best place to live. This is
                your chance to tell us what you need! Blow off some steam, have
                some fun, and put on your imagination hat below and tell us:
              </p>
              <ul className="mt-4 list-disc">
                <li>Did we spark you to actually consider a certain place?</li>
                <li>
                  What other types of information do you need to narrow down
                  your options?
                </li>
                <li>
                  Are there other sites you use that do something really well
                  that we should incorporate?
                </li>
                <li>
                  How are other things you use letting you down that we can fix?
                </li>
              </ul>
            </div>
            <textarea
              className="w-full md:w-8/12 bg-blue-50 border-0 p-4 mt-4 rounded-md"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Write Here ..."
            ></textarea>
            <div className="md:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <input
                className="bg-blue-50 border-0 p-4 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
              <input
                className="bg-blue-50 border-0 p-4 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Your Email"
              />
            </div>
            <div className="md:w-8/12 md:flex md:justify-between md:items-center">
              <div className="flex-1 px-2 items-center" key={uuidv4()}>
                <input className="mr-4 font-semibold" type="checkbox" />
                <label className="font-semibold mt-5">
                  I acknowledge RELO's privacy policy
                </label>
              </div>
              <button className="px-5 py-3 bgAppBlue rounded-md text-white font-medium mt-4 md:mt-0 w-full md:w-auto">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
