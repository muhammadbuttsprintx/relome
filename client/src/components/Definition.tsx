import React, { Dispatch, SetStateAction } from 'react';
import { Modal } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { definitions } from '../helpers/mockData';

interface Props {
  showDef: boolean;
  setShowDef: Dispatch<SetStateAction<boolean>>;
}

const Definition = ({ showDef, setShowDef }: Props) => {
  return (
    <>
      <Modal
        className="mt-16"
        show={showDef}
        onHide={() => {
          setShowDef(false);
        }}
      >
        <Modal.Body>
          <div className="flex justify-between items-center pb-2">
            <h3 className="text-lg font-semibold">Neighborhood Definitions</h3>

            <button
              className="hover:shadow-md hover:bg-transparent p-1 md:mr-3 rounded-full"
              onClick={() => {
                setShowDef(false);
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 320 512">
                <path
                  fill="#000"
                  d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {definitions.map(({ imgLink, descriptionTitle, description }) => (
              <div className="flex flex-col-reverse md:flex-col" key={uuidv4()}>
                <img
                  className="rounded-md"
                  src={imgLink}
                  alt={descriptionTitle + 'Pic'}
                />
                <p className="text-sm font-medium pb-3 md:pb-1 md:mt-3">
                  <span className="md:underline">{descriptionTitle}</span>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Definition;
