import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import React, { useState} from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {

    let [calc, setCalc] = useState ({
        num: 0,
        sign: "",
        res: 0
    })

    const resetClickHandler = (e) => {

    };

    const invertClickHandler = (e) => {

    };


    const moduloClickHandler = (e) => {

    };

    const equalsClickHandler = (e) => {

    };

    const commaClickHandler = (e) => {

    };

    const signClickHandler =  (e) => {

    };

    const numberClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        if (calc.num.length < 16) {
            setCalc({
              ...calc,
              num:
                calc.num === 0 && value === "0"
                  ? "0"
                  : calc.num % 1 === 0
                  ? Number(calc.num + value)
                  : calc.num + value,
              res: !calc.sign ? 0 : calc.res,
            });
        }
    };



    return (
        <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
            {
            btnValues.flat().map((btn, i) => {
                return (
                <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={
                        btn === "C"
                        ? resetClickHandler
                        : btn === "+-"
                        ? invertClickHandler
                        : btn === "%"
                        ? moduloClickHandler
                        : btn === "="
                        ? equalsClickHandler
                        : btn === "X" || btn === "-" || btn === "/" || btn === "+"
                        ? signClickHandler
                        : btn === "."
                        ? commaClickHandler
                        : numberClickHandler
                    }
                />
                );
            })
            }
        </ButtonBox>
        </Wrapper>
    );
};

export default App;