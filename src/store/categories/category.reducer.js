import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const CATEOGRIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEOGRIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

// import { CATEGORIES_ACTION_TYPES } from "./category.type";

// export const CATEOGRIES_INITIAL_STATE = {
//   categories: [],
//   isLoading: false,
//   error: null,
// };

// export const categoriesReducer = (
//   state = CATEOGRIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };
