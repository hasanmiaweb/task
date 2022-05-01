import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Table,
} from "react-bootstrap";
import shortid from "shortid";

function App() {

  const [createMode, setCreateMode] = useState(false)
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
   
    const data = [
      {id:shortid.generate(),
        title:"i phone",
        description:'sdfsdf',
        priority:'High'
      },
      {id:shortid.generate(),
        title:"i phone",
        description:'sdfsdf',
        priority:'Low'
      },
      {id:shortid.generate(),
        title:"How are you",
        description:"lorem ipsum",
        priority:'medeum'
      }
    ]
    setTaskList(data)
 
  
  }, [])
  
  return (
    <div>
      <div className="navMenu">
  
{  console.log(taskList)}

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Task App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">TASK LIST</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </div>
      <br />

      <Container>
        {
          createMode === true && (
            <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option value={""}>Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medeum">Medeum</option>
            <option value="High">High</option>
          </Form.Select>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          )
        }
        <div className="main_title">
          <h1 className="text-center">Task Menegement Application</h1>
          <div>
            <span>{createMode ? 'Close': "Create"}</span>
            <button onClick={()=> setCreateMode(createMode ? false :true )} className="btn btn-success">{createMode ? 'Close':"create"}</button>
          </div>
          <hr />
        </div>
      </Container>

      <div className="container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
      {
        taskList.map((item)=> (
          <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.priority}</td>
          <td>
            <Button>Edit</Button>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        ))
      }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
