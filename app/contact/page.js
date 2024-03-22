"use client";
import About from "@/components/About";
import { useState } from "react";

const page = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputValue({
      ...inputValue,
      [name]: value,
    }); // end setInputValue
  }; // end handleChange

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/ContactForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValue),
        }
      );

      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    } // end try catch
  }; // end handleSubmitted

  return (
    <>
      <div>
        <h1 className="text-4xl uppercase text-center font-semibold">
          Contact page
        </h1>
        <form onSubmit={handlesubmit} className="w-2/4 mx-auto py-10">
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleChange}
              className="p-2 border-2"
              name="name"
              value={inputValue.value}
              type="text"
              placeholder="Type your name"
              required
            />
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 border-2"
              type="email"
              onChange={handleChange}
              value={inputValue.value}
              name="email"
              placeholder="Type your Email"
              required
            />
          </div>
          <div>
            <label className="block" htmlFor="message">
              Message Me
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              onChange={handleChange}
              value={inputValue.value}
              rows="5"
              className="p-2 border-2"
            ></textarea>
          </div>
          <button
            className="p-2 bg-gray-800 text-white rounded-md font-semibold"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>


      <About/>
    </>
  );
};

export default page;
