import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CREATE_PICKUP_MUTATION = gql`
  mutation CreatePickupMutation($input: PickupInput!) {
    savePickup(input: $input) {
      id
      code
      date
      timeFrom
      timeTo
      shipmentsCount
      notes
    }
  }
`;

export default function CreatePickup() {
  const [formData, setFormData] = useState({
    code: "",
    date: "",
    timeFrom: "",
    timeTo: "",
    shipmentsCount: 0,
    notes: "",
  });
  const [createPickup, error, loading] = useMutation(CREATE_PICKUP_MUTATION);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createPickup({
      variables: {
        input: {
          // date:formData.date,
          timeFrom: formData.timeFrom,
          timeTo: formData.timeTo,
          shipmentsCount: parseInt(formData.shipmentsCount),
          notes: formData.notes,
        },
      },
    })
      .then((response) => {
        console.log("Pickup created:", response.data.savePickup);
        window.location.href = "/dataList";
      })
      .catch((error) => {
        console.log("Error creating pickup:", error);
      });
  };
  return (
    <TableRow>
      <TableCell>
        <TextField
          name="code"
          value={formData.code}
          onChange={handleChange}
          label="Code"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="date"
          value={formData.date}
          onChange={handleChange}
          label="Date"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="timeFrom"
          value={formData.timeFrom}
          onChange={handleChange}
          label="Time From"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="timeTo"
          value={formData.timeTo}
          onChange={handleChange}
          label="Time To"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="shipmentsCount"
          type="number"
          value={formData.shipmentsCount}
          onChange={handleChange}
          label="Shipments Count"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          label="Notes"
        />
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          Create
        </Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </TableCell>
    </TableRow>
  );
}
