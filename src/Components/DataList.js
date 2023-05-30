import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Button, Typography } from "@mui/material";
import UpdatePickup from "./UpdatePickup";
import { Link } from "react-router-dom";

const GET_DATA = gql`
  query GetData {
    listPickups {
      data {
        id
        code
        date
        timeFrom
        timeTo
        shipmentsCount
        notes
      }
    }
  }
`;
const DataList = (token) => {
  const { loading, error, data } = useQuery(GET_DATA, {
    skip: !token,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  console.log(data);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const handleCreate = () => {
    window.location.href = "/createPickup";
  };
  const handleUpdate = (pickup) => {
    //setSelectedPickup(pickup);
    console.log(pickup);
    window.location.href = `/updatePickup/${pickup.id}`;
    //navigate(`/updatePickup?id=${pickup.id}`);
    //history.push(`/updatePickup?id=${pickup.id}`);
    //window.location.href = `/updatePickup?id=${pickup.id}`;
  };
  // useEffect(() => {
  //   if (selectedPickup) {
  //     window.location.href = `/updatePickup${id}`;
  //     //navigate(`/updatePickup?id=${selectedPickup.id}`);
  //   }
  // }, [selectedPickup]);
  const handleUpdateBack = () => {
    setSelectedPickup(null);
  };
  const itemDetails = (pickup) => {
    window.location.href = "/updatePickup";
  };
  if (!token) {
    return <p>Please login to view the data.</p>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const listPickups = data?.listPickups?.data || [];
  if (listPickups.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <Typography variant="h2">DATA LIST</Typography>
      <Button sx={{ m: 2 }} onClick={handleCreate}>
        CREATE
      </Button>
      {selectedPickup ? (
        <UpdatePickup pickup={selectedPickup} onBack={handleUpdateBack} />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="data table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>code</TableCell>
                <TableCell>timeFrom</TableCell>
                <TableCell>timeto</TableCell>
                <TableCell>notes</TableCell>
                {/* Add more table headers based on your data structure */}
              </TableRow>
            </TableHead>
            <TableBody>
              {listPickups.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.timeFrom}</TableCell>
                  <TableCell>{item.timeTo}</TableCell>
                  <TableCell>{item.notes}</TableCell>
                  <TableCell>
                    <Link
                      to={`/updatePickup/${item.id}`}
                      state={{
                        id: item.id,
                      }}
                    >
                      Edit
                    </Link>
                    {/* <Button onClick={() => handleUpdate(item)}>Update</Button> */}
                    {/* <Button onClick={() => handleUpdate(item.id)}>View</Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
export default DataList;
