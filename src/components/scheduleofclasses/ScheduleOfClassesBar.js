import React, { useState } from "react";
import SegmentedControl from "../segemented/SegmentedControl";
import { MdOutlineBackpack } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi"
import { SegmentedButtonText } from "../segemented/SegmentedButton";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const day = ["M", "T", "W", "T", "F", "S", "S"];
const IntheBag = {
  courses: [
    {
      id: 26352,
      departmentName: "ENGR",
      courseLevel: "70",
      type: "LAB",
      pass: false,
      waitlist: false,
      units: 2,
      location: "SSL 78",
      Instructor: "Serate, K.",
      day: [2, 4],
      time: [8, 11],
      opacity: 1,
    },
  ],
};

function ScheduleOfClassesBar(props) {
  const [modalShow, setModalShow] = useState(false);
  const handle = () => setModalShow(false);
  const handleClick = () => {
    setModalShow(true);
    console.log("backpack clicked");
  };

  const close = () => {
    setModalShow(false);
  };

  const submit = () => {
    //submit to the calander
    setModalShow(false);
    //dispatch for redux
  };
  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl>
          <SegmentedButtonText
            name="Class Search"
            selected={props.classSearchSelected}
            onClick={() => {
              props.setMapSelected(false);
              props.setClassSearchSelected(true);
            }}
          />
          <SegmentedButtonText
            name="Map"
            selected={props.mapSelected}
            onClick={() => {
              props.setClassSearchSelected(false);
              props.setMapSelected(true);
            }}
          />
        </SegmentedControl>
      </div>
      <div>
        <div className="flex flex-row items-center" onClick={handleClick}>
          <MdOutlineBackpack size={32} />
        </div>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={modalShow} onHide={handle} className="w-100">
            <Modal.Header closeButton>
              <Modal.Title>Your Backpack</Modal.Title>
            </Modal.Header>

            <Modal.Body className="">
              <div>
                {IntheBag.courses.map((item, key) => (
                  <div className="bg-gray-100 p-3 rounded flex">
                    <div className="">{item.id}</div>
                    <div className="ml-10">
                      {item.departmentName} {item.courseLevel}
                    </div>
                    <div className="ml-10">{item.type}</div>
                    <div className="">
                      <Form className="flex">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          variant="danger"
                          label="PASS/FAIL"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          variant="warning"
                          label="Waitlist"
                        />
                      </Form>
                    </div>
                    <div className="text-2xl ">
                      {/* <HiOutlineTrash/> */}
                    </div>

                  </div>
                ))}
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={close}>
                Close
              </Button>
              <Button class="text-#000000" variant="primary" onClick={submit}>
                Enroll Now
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ScheduleOfClassesBar;
