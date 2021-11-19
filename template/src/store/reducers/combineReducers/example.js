import actions from '@store/actions';
import {reducerDefault} from '@store/common';

export const example = (...props) => {
  return reducerDefault(...props, actions.GET_BIRTHDAY);
};
