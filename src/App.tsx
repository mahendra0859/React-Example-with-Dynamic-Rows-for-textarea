import React, { useState } from "react";
import { Form, ButtonToolbar, Button } from "react-bootstrap";
import "./App.scss";

const App = () => {
  let element: any;
  const [textareaValue, setTextareaValue] = useState("");
  return (
    <div className="container">
      <h1>Hello World, React!</h1>
      <h5>Dynamic Rows for textarea</h5>
      <Form>
        <Form.Group controlId="FormTextarea">
          <Form.Control
            as="textarea"
            className="shadow-none noresize border-right-0 border-left-0 border-top-0 rounded-0"
            placeholder="Add any description"
            value={textareaValue}
            rows={1}
            ref={ref => (element = ref)}
            required
            // Dynamic rows for the textarea element
            onChange={(event: any) => {
              const textareaLineHeight = 24;
              const minRows = 1;
              event.target.rows = minRows;
              const currentRows = ~~(
                event.target.scrollHeight / textareaLineHeight
              );
              event.target.rows = currentRows;
              setTextareaValue(event.target.value);
            }}
          />
        </Form.Group>

        <ButtonToolbar className="d-flex flex-row-reverse float-right">
          <Button
            type="button"
            className="mx-3"
            onClick={() => {
              alert(`You have entered ${textareaValue}`);
              element.rows = 1;
              setTextareaValue("");
            }}
          >
            Ok
          </Button>
          <Button
            variant="light"
            type="button"
            className="mx-3"
            onClick={() => {
              element.rows = 1;
              setTextareaValue("");
            }}
          >
            Cancel
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default App;
