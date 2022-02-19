import React from 'react';
import PropTypes from 'prop-types';
import { bem, bemPrototype } from '../../_utils/bem';

const Link = (
  {
    block = 'link',
    element,
    modifiers,
    additionalClasses,
    children,
    url,
    target,
    title,
  }) => {
  return (
    <a
      href={url}
      target={target}
      title={title}
      className={bem(block, element, modifiers, additionalClasses)}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  ...bemPrototype,
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  title: PropTypes.string,
};

export { Link };
