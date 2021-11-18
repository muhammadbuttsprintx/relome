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
        show={showDef}
        onHide={() => {
          setShowDef(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Neighborhood Definitions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {definitions.map(({ imgLink, descriptionTitle, description }) => (
              <div key={uuidv4()}>
                <img src={imgLink} alt={descriptionTitle + 'Pic'} />
                <p className="text-base font-semibold">
                  <span className="underline">{descriptionTitle}</span>
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
