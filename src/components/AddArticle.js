import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddArticle extends Component {
  state = {
    title: '',
    img: ''
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addArticle(this.state)
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Add An Article</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label style={{color: 'white'}} for="articleTitle">Title</Label>
            <Input type="text" name="title" id="articleTitle" placeholder="Title..." value={this.state.title} onChange={this.handleChange}  />
          </FormGroup>
          <FormGroup>
            <Label style={{color: 'white'}} for="articleImg">Image</Label>
            <Input type="text" name="img" id="articleImg" placeholder="Img Link..." value={this.state.img} onChange={this.handleChange} />
          </FormGroup>
          
          <Button>Submit</Button>
        </Form>
      </>
    )
  }
}
