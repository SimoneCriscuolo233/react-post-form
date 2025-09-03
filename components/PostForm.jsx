import axios from "axios";
import { useState } from "react";
const PostForm = ({ apiEndpoint }) => {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(formData => ({ ...formData, [name]: type === 'checkbox' ? checked : value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiEndpoint, formData)
      .then(res => {
        console.log(res.data)
        alert('Post submitted successfully!');
        setFormData({ author: '', title: '', body: '', public: false });
      }).catch(error => {
        console.log('Error:', error);
        alert(`There was an error submitting the post. ${error}`);
      });

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">

        <div className="col-6 mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name='author'
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author"
            required
          />
        </div>

        <div className="col-6 mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </div>

        <div className="col-12 mb-3">
          <label className="form-label">Body</label>
          <textarea
            type='text'
            className="form-control"
            name='body'
            rows="5"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter post body"
            required
          ></textarea>
        </div>

        <div className="col-12 mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="public"
              checked={formData.public}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="public">Public</label>
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

