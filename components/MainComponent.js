import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import {View} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selecteddish:null
    };
  }
  onDishSelect(dishId){
      this.setState({
          selecteddish:dishId
      })
  }

  render() {
 
    return (
        <View style={{flex:1}}>
        <Menu dishes={this.state.dishes} 
            onPress={(dishId) => this.onDishSelect(dishId)}    
            />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id===this.state.selecteddish)[0]} />
        </View>
    );
  }
}
  
export default Main;