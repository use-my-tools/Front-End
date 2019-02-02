import React, { Component } from "react";

class AddProductPage extends Component {
  render() {
    return (
      <div>
        {/* Default input */}
        <label htmlFor="exampleForm2">Default input</label>
        <input
          type="text"
          id="exampleForm2"
          className="form-control"
          placeholder="tool name "
        />
      </div>
    );
  }
}

export default AddProductPage;
