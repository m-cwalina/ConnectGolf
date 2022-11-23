import React from "react";
import {Form, useLoaderData} from "react-router-dom";
import Select from 'react-select'

export async function loader() {
  const URL = "/api/v1/users";
  try {
    let response = await fetch(URL);
    let members = await response.json();
    return members
  } catch (error) {
    console.error(error);
  }
};

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
}

export default function AdminBooking() {
  const members = useLoaderData()

  return (
    <div>
      <Form method="post">
        <Select
          options={members}
          getOptionLabel={(member) => member.name}
          getOptionValue={(member) => member.id}
          name="users"
          value={members.id}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <input placeholder="How many people?" type="text" name="size" />
        <button type="submit">submit</button>
      </Form>
    </div>
  );
}
