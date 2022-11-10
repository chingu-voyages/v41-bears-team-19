import './Categories.css';
import catIcon from '../../images/cat-icon.png';
import dogIcon from '../../images/dog-icon.png';
import birdIcon from '../../images/bird-icon.png';
import bunnyIcon from '../../images/bunny-icon.png';
import spiderIcon from '../../images/spider-icon.png';

import React from 'react';

const Categories = () => {
  const categoryButtons = [
    { name: 'cats', image: catIcon },
    { name: 'dogs', image: dogIcon },
    { name: 'birds', image: birdIcon },
    { name: 'bunnies', image: bunnyIcon },
    { name: 'others', image: spiderIcon },
  ];

  return (
    <div className="categories">
      {categoryButtons.map(({ name, image }, index) => (
        <button className="categories__button" key={index}>
          <img src={image} alt="" className="button__icon" />{' '}
          <p className="button__name">{name}</p>
        </button>
      ))}
    </div>
  );
};

export default Categories;
