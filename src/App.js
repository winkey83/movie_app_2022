import React from "react";
import PropTypes from 'prop-types';

function Food({ name, img, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={img} alt={name} height='300' />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    rate: '2',
    image: 'https://recipes.timesofindia.com/thumb/55178711.cms?imgsize=259728&width=800&height=800'
  },
  {
    id: 2,
    name: 'potato',
    rate: '3',
    image: 'https://www.cultivariable.com/wp-content/uploads/2019/09/potatoes-greened-scaled.jpg'
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map(x=> (<Food key={x.id} name={x.name} img={x.image} rating={x.rate}/>))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

export default App;
