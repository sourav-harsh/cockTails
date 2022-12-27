import React from "react";
import {Link} from 'react-router-dom'

const SingleProduct = ({ item }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-28 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-6 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={item.img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
              {item.name}
            </h1>
            <p className="mb-3 leading-relaxed">Category : {item.category}</p>
            <p className="mb-3 leading-relaxed">Type : {item.info}</p>
            <p className="mb-3 leading-relaxed">Glass : {item.glass}</p>
            <p className="mb-3 leading-relaxed">Ingredients : {item.ingredients+", "}</p>
            {/* <p className="mb-2 leading-relaxed">Ingredients : {item.ingredients.map((itemss)=>
            (itemss!==null?itemss:<h1>No ingredients</h1>))}</p> */}
            <div className="flex justify-center">
              <Link to="/" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg hover:bg-indigo-600 text-white">
                GO BACK
              </Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                TRY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
