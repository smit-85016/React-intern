import React, { useState } from "react";

const Button = () => {
const [count, setCount] = useState(0);

const incFunction = () => {
console.log(" button clicked");
setCount(count + 1);
};

const decFunction = () => {
setCount(count - 1);
};


return (
<>
    <div>Count {count} </div>
    <button onClick={incFunction}> + </button>
    <button onClick={decFunction}> - </button>
    
</>
);
};

export default Button;