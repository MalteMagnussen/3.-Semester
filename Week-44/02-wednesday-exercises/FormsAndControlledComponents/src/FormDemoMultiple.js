import React, { useState } from "react";

/**
 * a) To see the real beauty of the controlled component pattern create a new file FormDemoMultiple.js
 * and paste in the code below, inspired by this (class component)  example
 */

/**
 * b) Make the necessary changes to index.js to render this example.
 */

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  /**
   * c) When you execute this example, you won’t really see something interesting,
   * since it deliberately does not have a submit button.
   * But to demonstrate that state ALWAYS holds the current value of all fields,
   * add this line just below the forms end-tag:
   */

  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
          onChange={handleChange}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
