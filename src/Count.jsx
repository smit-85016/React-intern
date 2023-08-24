import React, { useState } from "react";

const Count = () => {
const [count, setCount] = useState(10);
const [userName, setUserName] = useState("Jimmy");
const [email, setEmail] = useState("Jimmy@gmail.com");

const incFunction = () => {
console.log(" button clicked");
setCount(count + 1);
};

const decFunction = () => {
setCount(count - 1);
};

const changeEmail =(e)=>{
setEmail(e.target.value);
}

return (
<>
    <div>Count {count} </div>
    <button onClick={incFunction}> + </button>
    <button onClick={decFunction}> - </button>
    <p>
        <input type="text" name="username" onChange={(e)=> {setUserName(e.target.value);}} />
        <input type="text" name="email" onChange={(e)=>{ changeEmail(e); }} />


    </p>
    <p>
        User name is {userName} and email is {email}
    </p>
</>
);
};

export default Count;