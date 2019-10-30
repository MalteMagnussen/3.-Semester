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
    const value = target.type === "checkbox" ? !target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
    window.alert(JSON.stringify(reservation));
    setReservation(initialValue);
  };

  /**
   * c) When you execute this example, you won’t really see something interesting,
   * since it deliberately does not have a submit button.
   * But to demonstrate that state ALWAYS holds the current value of all fields,
   * add this line just below the forms end-tag:
   */
  /**
   * e) In the form, add the missing input fields to fill out the remainings of a customer.
   * Don't touch anything else in the code,
   * this is meant to demonstrate how “smart” the highlighted part of the code has made you form.
   */
  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Pay by Credit Card:
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
          />
        </label>
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="Last Name"
        />
        <br />
        <input name="email" value={reservation.email} placeholder="email" />
        <br />
        <input name="phone" value={reservation.phone} placeholder="phone" />
        <br />
        <input name="street" value={reservation.street} placeholder="street" />
        <br />
        <input name="city" value={reservation.city} placeholder="city" />
        <br />
        <input name="zip" value={reservation.zip} placeholder="zip" />
        <br />
        <input
          name="country"
          value={reservation.country}
          placeholder="country"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
  // f) Finally, add a button below the form to submit the code.
  // Just pop up an alert box with all the values to be submitted.
}
export default ReservationForm;
