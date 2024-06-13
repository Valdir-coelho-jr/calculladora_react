import { useState } from "react";
import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinus = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleDivide = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divide = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation("");
    }
  };

  const handleRemain = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const remain = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(remain));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          const sum = Number(firstNumber) + Number(currentNumber);
          setCurrentNumber(String(sum));
          setFirstNumber("0");
          setOperation("");
          break;
        case "-":
          const minus = Number(firstNumber) - Number(currentNumber);
          setCurrentNumber(String(minus));
          setFirstNumber("0");
          setOperation("");
          break;
        case "/":
          const divide = Number(firstNumber) / Number(currentNumber);
          setCurrentNumber(String(divide));
          setOperation("");
          break;
        case "%":
          const remain = Number(firstNumber) % Number(currentNumber);
          setCurrentNumber(String(remain));
          setOperation("");
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" />
          <Button label="/" onClick={handleDivide} />
          <Button label="C" onClick={handleClear} />
          <Button label="%" onClick={handleRemain} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinus} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
