import React from "react";
import {Form} from "react-router-dom";

export default function AdminBooking() {
  return (
    <>
      <Form method="post" action="/admin_booking">
        <input type="text" name="size" />
        <input type="text" name="description" />
        <button type="submit">submit</button>
      </Form>
    </>
  );
}
