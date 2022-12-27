import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglecocktails } from "../redux/features/cocktailSlice";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import SpinnerAnimation from "../components/shared/SpinnerAnimation";
import SingleProduct from "../components/shared/SingleProduct";

const ProductDetails = () => {
  const [modifiedCocktail, setmodifiedCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSinglecocktails({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strAlcoholic: info,
        strGlass: glass,
        strCategory: category,
        strDrinkThumb: img,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      ];
      const newCocktail = { name, info, glass, category, img, ingredients };
      setmodifiedCocktail(newCocktail);
    } else {
      setmodifiedCocktail(null);
    }
  }, [id, cocktail]);
  if (!modifiedCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    // const { name, info, glass, category, img, ingredients } = modifiedCocktail;
    return (
      <>
        {loading ? (
          <SpinnerAnimation />
        ) : (
          <Layout>
              <SingleProduct item={modifiedCocktail} />
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
