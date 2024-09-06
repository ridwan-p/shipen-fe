import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";

const UsersCard = (props) => {
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
            <div><strong>All Users</strong> 32</div>
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
                <th><Form.Check /></th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>admin</td>
                <td>
                  <a href="mailto:" />
                </td>
                <td>Admin</td>
                <td>
                  <Button variant="outline-primary">Edit</Button>
                  <Button variant="outline-danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

      </Card.Body>
    </Card>
  );
}

export default UsersCard;