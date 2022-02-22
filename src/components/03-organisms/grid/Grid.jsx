import React from 'react';
import bem from '../../_utils/bem';
import Card from '../../02-molecules/Card/Card';
import ListItem from '../../01-atoms/lists/ListItem';
import { connect } from 'react-redux';
import { selectFilter } from '../../../actions';

const Grid = ({ block = 'AM-grid', items, filters, selectFilter }) => {
  const [itemsFiltered, setItemsFiltered] = React.useState(items);

  const filterItems = (event, type, by, key) => {
    event.preventDefault();
    selectFilter(key);
    switch (type) {
      case 'sort':
        const sorted = [...items].sort((a, b) => b[by] - a[by]);
        setItemsFiltered(sorted);
        break;
      case 'filter':
        const filtered = [...items].filter(item => !!item[by]);
        setItemsFiltered(filtered);
        break;
      default:
        setItemsFiltered(items);
        break;
    }
  };

  React.useEffect(function () {
    setItemsFiltered(items);
  }, [items]);

  return (
    <div className={bem(block)}>
      <div className={bem(block, 'inner')}>
        <div className={bem(block, 'filters')}>
          <ul className={bem('filter-list')}>
            {filters && filters.map(({ name, type, by, active }, key) => (
              <ListItem key={key} element="filter-item" modifiers={active ? ['active'] : []}>
                <a onClick={(event) => filterItems(event, type, by, key)}>
                  {name}
                </a>
              </ListItem>
            ))}
          </ul>
        </div>
        <div className={bem(block, 'content')}>
          {itemsFiltered && itemsFiltered.map(({ image, heading, buttons }, key) => (
            <Card
              key={key}
              image={image}
              heading={heading}
              buttons={buttons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ grid }) => ({
  items: grid?.items,
  filters: grid?.filters,
});

const mapDispatchToProps = {
  selectFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);