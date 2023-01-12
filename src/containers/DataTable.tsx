import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { userData } from "../shared/data";

const DataTable = () => {
  const [data, setData] = useState(userData);
  const [count, setCount] = useState(5);
  const [btnDisable, setBtnDisable] = useState(false);
  const filterData = (count: any) => {
    if (count === 5) {
      const datas = userData.filter((e) => {
        return e.id < count;
      });
      setData(datas);
    } else if (count === 10) {
      const datas = userData.filter((e) => {
        return e.id < count;
      });
      setData(datas);
    } else if (count === 15) {
      const datas = userData.filter((e) => {
        return e.id < count;
      });
      setData(datas);
    } else if (count === 20) {
      const datas = userData.filter((e) => {
        return e.id < count;
      });
      setData(datas);
    } else if (count === 25) {
      setCount(30);
      const datas = userData.filter((e) => {
        return e.id < count;
      });
      setBtnDisable(true);
      setData(datas);
    }
    // console.log(count, datas);
  };
  useEffect(() => {
    filterData(count);
  }, [count]);
  return (
    <>
      <Table striped className=" responsive">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Subject</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Assigned to</Table.HeaderCell>
            <Table.HeaderCell>Due Date</Table.HeaderCell>
            <Table.HeaderCell>
              <select name="active" className="border-0 " style={{ background: "transparent" }} id="select-option">
                <option value="1"> Status</option>
              </select>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((user: any) => {
            console.log(user);
            return (
              <>
                <Table.Row>
                  <Table.Cell>{user?.id}</Table.Cell>
                  <Table.Cell style={{ color: "#4a90e2" }}>{user.company.title}</Table.Cell>
                  <Table.Cell>{user?.gender}</Table.Cell>
                  <Table.Cell>{user.firstName + " " + user.lastName}</Table.Cell>
                  <Table.Cell>{user.birthDate}</Table.Cell>
                  <Table.Cell>Not Started</Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
      {!btnDisable ? (
        <div
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-end text-warning"
          onClick={() => setCount(count + 5)}
        >
          View More
        </div>
      ) : null}
    </>
  );
};

export default DataTable;
