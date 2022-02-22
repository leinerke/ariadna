const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    case 'OPEN_MENU':
      return {
        ...state,
        openMenu: true,
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        openMenu: false,
      };
    case 'SELECT_FILTER':
      const filterSelected = state.grid.filters.findIndex(filter => !!filter.active);
      const filters = [...state.grid.filters];
      filters[filterSelected].active = false;
      filters[action.payload].active = true;
      return {
        ...state,
        grid: {
          ...state.grid,
          filters,
        },
      };
    default:
      return state;
  }
};

export { reducer };