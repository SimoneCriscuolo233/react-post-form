import axios from "axios";
import { useState } from "react";
const PostForm = () => {
  return (
    <form>
      <div className="row">

        <div className="col-6 mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" name='author' placeholder="Enter author" />
        </div>

        <div className="col-6 mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name='title' placeholder="Enter title" />
        </div>

        <div className="col-12 mb-3">
          <label className="form-label">Body</label>
          <textarea className="form-control" name='body' rows="5" placeholder="Enter post body"></textarea>
        </div>

        <div className="col-12 mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" name="publicCheck" />
            <label className="form-check-label" htmlFor="publicCheck">Public</label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </div>
    </form>
  );
};

export default PostForm;
