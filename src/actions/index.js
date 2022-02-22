export const getData = payload => ({
  type: 'GET_DATA',
  payload: payload,
});

export const openMenu = () => ({
  type: 'OPEN_MENU',
});

export const closeMenu = () => ({
  type: 'CLOSE_MENU',
});

export const selectFilter = payload => ({
  type: 'SELECT_FILTER',
  payload,
});
