import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import optus from '../../assets/optus.jpeg';
function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Great Chance to develop your skills.</Modal.Title>
        </Modal.Header>
        {/* eslint-disable-next-line */}
        <Modal.Body><marquee><b>Join Now. 1199/- for UIET Students exclusively!</b></marquee>
        <img
              className='mt-2'
              src={optus}
              alt="optus ad"
            />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;