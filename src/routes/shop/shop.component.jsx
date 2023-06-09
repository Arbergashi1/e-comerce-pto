import { Routes, Route, } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      console.log({categoriesArray});
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import "./shop.styles.scss";
// import CategoriesPreview from "../categories-preview/categories-preview.component";
// import Category from "../category/category.component";
// import { fetchCategoriesAsync } from "../../store/categories/category.action";
// const Shop = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCategoriesAsync());
//   }, []);
//   return (
//     <Routes>
//       <Route index element={<CategoriesPreview />} />
//       <Route path=":category" element={<Category />} />
//     </Routes>
//   );
// };

// export default Shop;

