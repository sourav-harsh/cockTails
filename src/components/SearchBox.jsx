import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchcocktails } from "../redux/features/cocktailSlice";

const SearchBox = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchcocktails({ searchText }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-row align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-10 w-80">
            <input
              type="email"
              ref={searchTerm}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search Here"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
