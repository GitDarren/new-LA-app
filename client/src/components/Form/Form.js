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
      <h4>
        <strong>Link (https://example.com) - Optional</strong>
      </h4>
      <input
        className="form-control"
        value={props.URL}
        name="URL"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>Category</strong>
      </h4>
      <select name="categoryId" onChange={props.handleInputChange} required>
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
        <strong>Content</strong>
      </h4>
      <textarea
        className="form-control"
        value={props.content}
        name="content"
        onChange={props.handleInputChange}
        required
      />
      <h5>
        <strong>Tags</strong>
      </h5>
      <input
        className="form-control"
        value={props.tagId}
        name="tagId"
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
