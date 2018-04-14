import React from "react";

console.log(this.state);
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
      <select name="category" onChange={props.handleInputChange} required>
        <option defaultValue={true} disabled>
          Select a category...
        </option>
        <option>Baseball</option>
        <option>Basketball</option>
        <option>Football</option>
        <option>Hockey</option>
        <option>Tennis</option>
      </select>

      <h4>
        <strong>Write yo shit Here!</strong>
      </h4>
      <textarea
        className="form-control"
        value={props.description}
        name="description"
        onChange={props.handleInputChange}
        required
      />

      <input
        className="form-control"
        value={props.topics}
        name="topics"
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
