import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchcocktails } from "../redux/features/cocktailSlice";
import SpinnerAnimation from "../components/shared/SpinnerAnimation";
import CardItems from "../components/shared/CardItems";

const Homepage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strDrink,
          strAlcoholic,
          strGlass,
          strDrinkThumb,
          strInstructions,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
          des: strInstructions,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <SpinnerAnimation />;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>Cocktail Not found!!</h2>
      </Layout>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
      <div className="container">
        <div className="row">
          {modifiedCocktails.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <CardItems item={item} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Homepage;
