import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dishes : DISHES
        }
    }
    static navigationOptions ={
        title : 'Menu'
    }
    renderMenuItem = ({item, index}) => {
        const {navigate}= this.props.navigation;
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                //onPress={() => this.props.navigation.navigate('Dishdetail', {dishId : item.id})}

                onPress={() => navigate('Dishdetail', {dishId : item.id})}
               //<Dishdetail dish={item} />
                leftAvatar={{ source: require('../assets/images/logo.png') }} />
        );
    };
     
    render(){
        
       // const {navigate}= this.props.navigation;
    return (
            <FlatList 
                data={this.state.dishes}
                renderItem={this.renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}
}


export default Menu;