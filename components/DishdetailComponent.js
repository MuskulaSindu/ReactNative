import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import {DISHES} from '../shared/dishes';


class Dishdetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId',' ');
        const dish=this.state.dishes[+dishId];
          //  <RenderDish dish={this.state.dishes[+dishId]} />
         // const dish=this.state.dishes.filter(dish => dish.id===[+dishId]);
          if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('../assets/images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
    }
}

export default Dishdetail;