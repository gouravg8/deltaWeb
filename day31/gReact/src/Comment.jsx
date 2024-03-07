import { useState } from "react";

function Comment() {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ username: "", remark: "", rating: 5 });
    console.log(formData);
  }
  return (
    <>
      <h2 className="text-lg">Comments</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center align-middle gap-3"
      >
        <input
          className="px-2 py-1 text-white border border-white bg-black"
          type="text"
          name="username"
          id="username"
          placeholder="@username"
          onChange={handleChange}
          value={formData.username}
        />
        <textarea
          className="px-2 py-1 text-white border border-white bg-black"
          name="remark"
          id="remark"
          cols="30"
          rows="5"
          placeholder="Nice place to visit!!"
          value={formData.remark}
          onChange={handleChange}
        ></textarea>
        <input
          className="px-2 py-1 text-white border border-white bg-black"
          type="number"
          name="rating"
          id="rating"
          placeholder="4"
          onChange={handleChange}
          value={formData.rating}
          min={1}
          max={5}
        />
        <button
          className="bg-white text-black w-fit px-2 py-1 mx-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Comment;
