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

     
    render(){
        const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', {dishId : item.id})}
                   //<Dishdetail dish={item} />
                    leftAvatar={{ source: require('../assets/images/logo.png') }} />
            );
        };
        const {navigate}= this.props.navigation;
    return (
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}
}


export default Menu;