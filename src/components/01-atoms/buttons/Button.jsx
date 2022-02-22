import React from 'react';
import PropTypes from 'prop-types';
import bem, { bemPrototype } from '../../_utils/bem';

const Button = (
  {
    block = 'button',
    element,
    modifiers,
    additionalClasses,
    children,
    onClick,
  },
) => {
  return (
    <button
      type="button"
      className={bem(block, element, modifiers, additionalClasses)}
      aria-label="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  ...bemPrototype,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
