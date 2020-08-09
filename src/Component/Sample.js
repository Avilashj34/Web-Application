import React from "react";
import { Container, Row, Col } from "react-bootstrap";

 

function _renderComments(comm) {
  return (
    <div>
      <Container
        align="left"
        style={{ marginTop: "15px", border: "1px solid black" }}
      >
        <Row>
          <Col>
            <b>{comm.title}</b>
          </Col>
        </Row>
        <Row>
          <Col>
            {`Posted on ` + comm.date_posted} {`Created on ` + comm.createdAt}
          </Col>
        </Row>
        {/* Blog Info */}
        <Row>
          <Col>{`Email :` + comm.email} </Col>
          <Col>{`Post ID :` + comm.post_id} </Col>
          <Col>{`User ID :` + comm.user_id} </Col>
          <Col>{`Username :` + comm.username} </Col>
        </Row>
        {/* Content */}
        <Row style={{ marginTop: "10px" }}>
          <Col>{comm.content}</Col>
        </Row>
        {comm.comments.map(item => _renderComm(item))}
      </Container>
    </div>
  );
}

 

function _renderComm(comment: any) {
  return (
    <div>
      <Row style={{ marginTop: "10px" }}>
        <Col>{comment.comment}</Col>
        <Col>{comment.commentedAt}</Col>
        <Col>
          {`Upvotes : ` +
            comment.upvotes +
            `    DownVotes : ` +
            comment.downvotes}
        </Col>
      </Row>
    </div>
  );
}

 

export default function App() {
  const sample_json = `{
    "message": [
    
      {
        "comments": [
          {
            "comment": "Thank you",
            "commentedAt": "Wed, 05 Aug 2020 09:50:34 GMT",
            "downvotes": 0,
            "upvotes": 11
          }
        ],
        "content": "HTLM, Css",
        "createdAt": "Wed, 05 Aug 2020 06:49:46 GMT",
        "date_posted": "Wed, 05 Aug 2020 09:18:44 GMT",
        "email": "avilash@gmail.com",
        "image_file": "default.jpg",
        "post_id": 17,
        "title": "Frontend Developement",
        "user_id": 18,
        "username": "avilash"
      },
      {
        "comments": [],
        "content": "HTLM, Css",
        "createdAt": "Wed, 05 Aug 2020 06:49:46 GMT",
        "date_posted": "Wed, 05 Aug 2020 09:23:26 GMT",
        "email": "avilash@gmail.com",
        "image_file": "default.jpg",
        "post_id": 18,
        "title": "Frontend Developement",
        "user_id": 18,
        "username": "avilash"
      },
      {
        "comments": [
          {
            "comment": "",
            "commentedAt": "Wed, 05 Aug 2020 09:30:18 GMT",
            "downvotes": 0,
            "upvotes": 0
          },
          {
            "comment": "Thank you",
            "commentedAt": "Wed, 05 Aug 2020 09:48:14 GMT",
            "downvotes": 0,
            "upvotes": 10
          }
        ],
        "content": "HTLM, Css",
        "createdAt": "Wed, 05 Aug 2020 06:49:46 GMT",
        "date_posted": "Wed, 05 Aug 2020 09:30:18 GMT",
        "email": "avilash@gmail.com",
        "image_file": "default.jpg",
        "post_id": 21,
        "title": "Frontend Developement",
        "user_id": 18,
        "username": "avilash"
      },
      {
        "comments": [
          {
            "comment": "",
            "commentedAt": "Wed, 05 Aug 2020 14:30:57 GMT",
            "downvotes": 0,
            "upvotes": 0
          }
        ],
        "content": "tedrdf vfgrt bgfv",
        "createdAt": "Wed, 05 Aug 2020 12:57:03 GMT",
        "date_posted": "Wed, 05 Aug 2020 14:30:57 GMT",
        "email": "preetijha@gmail.com",
        "image_file": "default.jpg",
        "post_id": 22,
        "title": "Software Engineer",
        "user_id": 28,
        "username": "preeti.jha"
      }
    ]
   }`;

 

  const jsonObj = JSON.parse(sample_json);
  return (
    <div className="App">
      {jsonObj.message.map(item => (
        <div>{_renderComments(item)}</div>
      ))}
    </div>
  );
}
