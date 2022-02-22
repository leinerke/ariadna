import React from 'react';
import LogoImage from '../../../../assets/images/logo.png';
import bem, { bemPrototype } from '../../../_utils/bem';

const Logo = ({ block, element = 'logo', modifiers = [] }) => (
  <img
    className={bem(block, element, modifiers)}
    src={LogoImage}
    alt="Logo"
  />
);

Logo.prototype = {
  ...bemPrototype,
};

export default Logo;