// import { gql } from "@apollo/client";
// import { TableCell, TableHead, TableRow, TextField } from "@mui/material";
// import React, { useState } from "react";

// const UPDATE_MUTATION = gql`
//   mutation UpdatePickupMutation($input: PickupInput!) {
//     savePickup(input: $input) {
//       id
//       code
//       date
//       timeFrom
//       timeTo
//       shipmentsCount
//       notes
//     }
//   }
// `;
// export default function UpdatePickup(id) {
//   const [formData, setFormData] = useState({
//     code: "",
//     date: "",
//     timeFrom: "",
//     timeTo: "",
//     shipmentsCount: 0,
//     notes: "",
//   });
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <TableRow>
//         <TableCell>
//           <TextField
//             name="code"
//             value={formData.code}
//             onChange={handleChange}
//             label="Code"
//           ></TextField>
//         </TableCell>
//       </TableRow>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const UPDATE_MUTATION = gql`
  mutation UpdatePickupMutation($input: PickupInput!) {
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

const UpdatePickup = (props) => {
  //const props = useLocation();
  //const data = props.match.params.id;
  console.log(useLocation(props));
  console.log(props);
  // const [updatePickup, { loading, error }] = useMutation(UPDATE_MUTATION);
  // const [formData, setFormData] = useState({
  //   code: pickup.code || "",
  //   date: pickup.date || "",
  //   timeFrom: pickup.timeFrom || "",
  //   timeTo: pickup.timeTo || "",
  //   shipmentsCount: pickup.shipmentsCount || 0,
  //   notes: pickup.notes || "",
  // });
  //console.log(pickup);
  // const handleUpdate = (pickup) => {
  //   updatePickup({
  //     variables: {
  //       input: {
  //         id: pickup.id,
  //         code,
  //         timeFrom,
  //         timeTo,
  //         notes,
  //       },
  //     },
  //   })
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   updatePickup({
  //     variables: {
  //       input: {
  //         id: pickup.id,
  //         ...formData,
  //       },
  //     },
  //   })
  //     .then((result) => {
  //       console.log("Pickup updated successfully", result.data.updatePickup);
  //       // Handle success, e.g., show a success message or redirect
  //     })
  //     .catch((error) => {
  //       console.error("Error updating pickup", error);
  //       // Handle error, e.g., show an error message
  //     });
  // };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <TextField
  //         name="code"
  //         label="Code"
  //         value={formData.code}
  //         onChange={handleChange}
  //         fullWidth
  //       />
  //       <TextField
  //         name="date"
  //         label="Date"
  //         value={formData.date}
  //         onChange={handleChange}
  //         fullWidth
  //       />
  //       <TextField
  //         name="timeFrom"
  //         label="Time From"
  //         value={formData.timeFrom}
  //         onChange={handleChange}
  //         fullWidth
  //       />
  //       <TextField
  //         name="timeTo"
  //         label="Time To"
  //         value={formData.timeTo}
  //         onChange={handleChange}
  //         fullWidth
  //       />
  //       <TextField
  //         name="shipmentsCount"
  //         label="Shipments Count"
  //         type="number"
  //         value={formData.shipmentsCount}
  //         onChange={handleChange}
  //         fullWidth
  //       />
  //       <TextField
  //         name="notes"
  //         label="Notes"
  //         value={formData.notes}
  //         onChange={handleChange}
  //         fullWidth
  //       />
  //       <Button type="submit" variant="contained" disabled={loading}>
  //         Update Pickup
  //       </Button>
  //     </form>
  //   </div>
  // );
};

export default UpdatePickup;
