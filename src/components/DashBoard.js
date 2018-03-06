import React, { Component } from "react";
import Calculator from "../util/Calculator";
import {
  Modal,
  Button,
  Table,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      bagArr: [], //the final bag array
      quantity: "",
      bagSize: "",
      show: false, // show add item modal
      answer: "",
      edeges: ""
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    let obj = {
      volume: this.state.bagSize ? this.state.bagSize : 736,
      quantity: this.state.quantity
    };
    let bagArray = [];
    bagArray.push(obj);
    this.setState({
      bagArr: [...this.state.bagArr, obj],
      show: false,
      quantity: "",
      bagSize: ""
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleOnChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: parseInt(value)
    });
  };

  renderItemByVolumne(value) {
    if (!value) {
      return "200g";
    } else if (value === 736) {
      return "200g";
    } else if (value === 1144) {
      return "400g";
    }
    return "1000g";
  }

  onRemove(index) {
    let bagArray = this.state.bagArr.filter(
      (item, itemIndex) => itemIndex !== index
    );
    this.setState({ bagArr: bagArray });
  }

  renderItem() {
    return this.state.bagArr.map((item, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{this.renderItemByVolumne(item.volume)}</td>
        <td>{item.quantity}</td>
        <td>
          <span
            onClick={() => this.onRemove(index)}
            className="glyphicon glyphicon-remove"
          />
        </td>
      </tr>
    ));
  }

  onSubmit(e) {
    const { bagArr, edeges } = this.state;
    const box = [edeges];
    this.setState({ answer: Calculator(bagArr, box), bagArr: [] });
  }

  render() {
    return (
      <div className="container">
        <h1>Calculate how many boxes are needed to fit these coffee bags</h1>
        <p>Answer: {this.state.answer ? this.state.answer : ""}</p>
        <br />
        <Form className="cubic_form" inline>
          <FormGroup controlId="formInlineName">
            <label>
              Length of the edege of the cubic box (any number from 30-100)cm,
              it has 3 edeges, they are the same length
            </label>
            <br />
            <ControlLabel>Length of each edege : </ControlLabel>{" "}
            <FormControl
              name="edeges"
              value={this.state.edeges}
              onChange={this.handleOnChange}
              placeholder="number from 30 to 100"
            />
          </FormGroup>{" "}
        </Form>
        <br />
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Bag Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{this.renderItem()}</tbody>
        </Table>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add coffee bag
        </Button>
        <Button bsStyle="danger" bsSize="large" onClick={() => this.onSubmit()}>
          Calculate now!
        </Button>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: !this.state.show })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add different size of coffe bags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div>
                <label>coffee bag size </label>
                <select name="bagSize" onChange={this.handleOnChange}>
                  <option value="736">200g</option>
                  <option value="1144">400g</option>
                  <option value="3460">1000g</option>
                </select>
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Quantity</ControlLabel>{" "}
                  <FormControl
                    value={this.state.quantity}
                    onChange={this.handleOnChange}
                    placeholder="quantity"
                    name="quantity"
                  />
                </FormGroup>{" "}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Add item</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DashBoard;
