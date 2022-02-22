import React from 'react';
import bem  from '../../../_utils/bem';
import Link  from '../../../01-atoms/links/Link';

const SiteFooter = ( ) => {
  const block = 'footer';
  return (
    <footer className={bem(block)}>
      <div className={bem(block, 'inner')}>
        <div className={bem(block, 'copyright')}>
          <p>Copyright &copy; {new Date().getFullYear()} AMovies. All rights reserved. Powered by <Link url="https://github.com/leinerke/ariadna" target="_blank">Leinerke Suarez</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
