import React from 'react';
import bem, { bemPrototype } from '../../../_utils/bem';

const LogoImage = require('../../../../assets/images/logo.png');

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