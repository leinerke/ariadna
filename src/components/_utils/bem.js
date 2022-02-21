import PropTypes from 'prop-types';

const bem = (
  block = '',
  element = '',
  modifiers = [],
  additionalClasses = [],
) => {
  const base =
    block && element ? block + '__' + element : [block, element].join('');

  const componentClasses = `${base} ${modifiers.map((mod) => `${base}--${mod}`).join(' ')}`.trim();

  if (additionalClasses.length) {
    return componentClasses + ' ' + additionalClasses.join(' ');
  }

  return componentClasses;
};

const bemPrototype = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

bem.prototype = bemPrototype;

export { bem, bemPrototype };
