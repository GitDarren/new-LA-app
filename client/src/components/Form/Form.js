import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <h4>
        <strong>Title</strong>
      </h4>
      <input
        className="form-control"
        value={props.title}
        name="title"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>Description Here!</strong>
      </h4>
      <input
        className="form-control"
        value={props.description}
        name="description"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
