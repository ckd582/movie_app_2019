import React from 'react';
import Proptypes from "prop-types";
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
      );
}

Food.propTypes ={
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
};

const foodIlike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-pNQI_9YAcJM%2FVBTxavO6YMI%2FAAAAAAAACk4%2F-OHN-keA9UU%2Fs1600%2F20140909_204156.jpg&f=1&nofb=1",
      rating: 4.9
  },
  {
    id:3,
    name: "Bibimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.huffingtonpost.com%2Fasset%2F5727ef362200003600255394.jpeg%3Fcache%3DXowoERt6W4%26ops%3D1910_1000&f=1&nofb=1",
      rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthemintymusings.files.wordpress.com%2F2015%2F11%2F22101267883_09d02672eb_z.jpg&f=1&nofb=1",
      rating: 4.7
  }
];

function renderFood(dish){
  return <Food name = {dish.name} picture={dish.image} />;
}

//변화하는 데이터를 사용하기 위해 만듬 
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  add= () => {
    console.log("add");
    this.setState(current => ({count : this.state.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count : this.state.count -1}));
  };
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("I just updated")
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world")
  }
  render (){
    console.log("I'm rendering");
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
      </div>;
  }
}

export default App;
