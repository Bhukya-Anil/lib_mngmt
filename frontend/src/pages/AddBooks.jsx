import React, { useState } from "react";
import axios from "axios";
const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image:"",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }
  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/add", Data).then((res) => alert(res.data.message));
    setData({
      bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  }
  console.log(Data);
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "93vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Name of the Book"
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Name of Author"
            name="author"
            onChange={change}
            value={Data.author}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description of the Book"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The URL of the Image"
            name="image"
            onChange={change}
            value={Data.image}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Price of the Book"
            name="price"
            onChange={change}
            value={Data.price}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;
