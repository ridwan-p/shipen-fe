import { useEffect, useState } from "react";
import { Button, Card, Dropdown, Form, InputGroup, Table } from "react-bootstrap";
import * as usersService from '../../services/user-management/users';

const UsersCard = () => {
  const [users, setUsers] = useState({ data: [] })

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await usersService.getUsers();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <Card.Title>User Management</Card.Title>
            <div>To manage all users in the system, including customers, drivers, and admins.</div>
          </div>
          <div>
            <Button variant="primary"><i className="bi bi-plus-circle"></i> Add user</Button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div><span className="fw-medium">All Users</span> 32</div>
          </div>
          <div>
            <InputGroup>
              <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
              <Form.Control placeholder="search" />
            </InputGroup>
          </div>
        </div>
        <div>
          <Table striped hover responsive className="mt-4">
            <thead>
              <tr>
                <th className="align-middle"><Form.Check /></th>
                <th>Username</th>
                <th>Role</th>
                <th>Last active</th>
                <th>Date added</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                users.data.map((user, key) => {

                  return (
                    <tr key={key}>
                      <th className="align-middle"><Form.Check /></th>
                      <td>
                        <div className="fw-medium">{user.fullName}</div>
                        <div>{user.email}</div>
                      </td>
                      <td>{user.role}</td>
                      <td>{user.lastLogin}</td>
                      <td>{user.createdAt}</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="success">
                            <i className="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>

      </Card.Body>
    </Card>
  );
}

export default UsersCard;