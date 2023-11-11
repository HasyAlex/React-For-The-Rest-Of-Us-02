import React, { useState } from "react";
import Page from "./Page";

export default function PlayGround() {
  return (
    <Page>
      <p>State Didn't Update immediate</p>
      <StateDidntUpdateimmediate></StateDidntUpdateimmediate>
      <br />
      <hr />
      <p>Conditional Rereandering</p>
      <ConditionalRereandering id="100"></ConditionalRereandering>
      <br />
      <hr />
      <p>Updating Object State</p>
      <UpdatingObjectState></UpdatingObjectState>
      <br />
      <hr />
      <p>Object State Instead Of Multiple Smaller Ones</p>
      <ObjectStateInsteadOfMultipleSmallerOnes></ObjectStateInsteadOfMultipleSmallerOnes>
      <br />
      <hr />
      <p>Infomation Can Be Derived From State</p>
      <InfomationCanBeDerivedFromState></InfomationCanBeDerivedFromState>
    </Page>
  );
}

/////////////////////////////////StateDidntUpdateimmediate///////////////////////////////
function StateDidntUpdateimmediate() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {count}
    </div>
  );
}

function ConditionalRereandering({ id }) {
  return <div>{!id ? "Id is null" : `Id is ${id}`}</div>;
}
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////UpdatingObjectState///////////////////////////////
function UpdatingObjectState() {
  const [user, setUser] = useState({
    name: "Hasitha",
    age: 33,
    city: "Matara",
  });
  console.log(user);

  const handleChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Your Name"
      ></input>
      <div>{user.name}</div>
    </form>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////ObjectStateInsteadOfMultipleSmallerOnes/////////////////////
function ObjectStateInsteadOfMultipleSmallerOnes() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log(form);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="flex flex-col gap-y-2">
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="first name"
        className="px-4 py-2"
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        placeholder="last name"
        className="px-4 py-2"
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="email"
        className="px-4 py-2"
      />
    </form>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////ObjectStateInsteadOfMultipleSmallerOnes/////////////////////
const Price_PER_ITEM = 5;

function InfomationCanBeDerivedFromState() {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * Price_PER_ITEM;

  const addHandleClick = () => {
    setQuantity(quantity + 1);
  };

  const removeHandleClick = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <button onClick={addHandleClick}>Add 1 More Item</button>
      <button onClick={removeHandleClick}>Remove 1 More Item</button>
      <p>Total Price:</p>
      <p>{totalPrice}</p>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////
