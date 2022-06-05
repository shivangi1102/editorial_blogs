import React, { useState } from 'react'
import Edit from './Edit';
import { Card, Button } from 'react-bootstrap'
import './style.css';
import { Link } from 'react-router-dom';

export default function Article({ id, articleid, authorname, content, title, admin }) {
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <>
      <Card className="article">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>{authorname}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
          {admin ? <Link to="edit" state={{ id: { id }, title: { title }, authorname: { authorname }, content: { content } }}><Button variant="primary">Edit</Button></Link> : ""}
        </Card.Body>
      </Card>

    </>
  )
}
