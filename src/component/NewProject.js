import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";

function NewProject() {
  const arrayDatas = ["Age", "Credit Score", "Account Balance"];
  const Operator = [">", "<", "≥", "≤", "="];
  const [selectData, setSelectData] = useState("");
  const [selectOperator, setSelectOperator] = useState("");
  const [value, setValue] = useState("");
  const [score, setScore] = useState("");
  const [logicOperator, setLogicOperator] = useState();
  const [formDataArray, setFormDataArray] = useState([]);
  const handleLogicOperatorChange = (event) => {
    let checkToValue = event.target.value;
    event.preventDefault();
    setLogicOperator(checkToValue);
  };

  useEffect(() => {
    if (logicOperator) {
      // Create a new object with the form data
      const formDataObject = {
        selectData,
        selectOperator,
        value,
        score,
        logicOperator,
        // Add additional properties as needed
      };

      // Update the array with the new object
      setFormDataArray([...formDataArray, formDataObject]);

      // Reset form fields
      setSelectData("");
      setSelectOperator("");
      setValue("");
      setScore("");
      setLogicOperator("");
      console.log("aasdasaadad", formDataObject);
    }
  }, [logicOperator]);

  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Select
              className="w-100"
              options={
                Array.isArray(arrayDatas) &&
                arrayDatas?.map((tag) => ({
                  value: tag,
                  label: tag,
                }))
              }
              onChange={(selectedOption) => {
                setSelectData(selectedOption.label);
                //   setSingleSelectTemplates(selectedOption.value);
                //   setInputTemplate(selectedOption.label);
                //   handleShowTemplate(selectedOption.label);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Select
              className="w-100"
              options={
                Array.isArray(Operator) &&
                Operator?.map((tag) => ({
                  value: tag,
                  label: tag,
                }))
              }
              onChange={(selectedOption) => {
                setSelectOperator(selectedOption.label);

                //   setSingleSelectTemplates(selectedOption.value);
                //   setInputTemplate(selectedOption.label);
                //   handleShowTemplate(selectedOption.label);
              }}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Score</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="d-flex mt-5 ms-5">
            <Form.Check
              type="radio"
              aria-label="radio 1"
              label="AND"
              className="me-5"
              name="logicOperator"
              value="AND"
              checked={logicOperator === "AND"}
              onChange={handleLogicOperatorChange}
            />
            <Form.Check
              type="radio"
              aria-label="radio 1"
              label="OR"
              className="ms-5"
              name="logicOperator"
              value="OR"
              checked={logicOperator === "OR"}
              onChange={handleLogicOperatorChange}
            />
          </Form.Group>
        </Row>
      </Form>

      {formDataArray.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Type</th>
              <th>Operator</th>
              <th>Value</th>
              <th>Score</th>
              <th>Operator</th>
            </tr>
          </thead>
          <tbody>
            {formDataArray?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.selectData}</td>
                <td>{item.selectOperator}</td>
                <td>{item.value}</td>
                <td>{item.score}</td>
                <td>{item.logicOperator}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default NewProject;
