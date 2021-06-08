import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Spinner from "react-bootstrap/Spinner";

class App extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let { posts } = this.state;
    if (posts.length === 0) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return (
        <div className="container">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"></ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <ul className="list-group">
                  {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                      {post.id}<br></br>
                      {post.title}
                    </li>
                  ))}
                </ul>
              </Card.Link>
              <Card.Link href="#">
              
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}

export default App;
