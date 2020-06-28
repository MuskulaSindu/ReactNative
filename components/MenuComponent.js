import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Dishdetail from './DishdetailComponent';
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

     renderMenuItem = ({item, index}) => {
         return (
             <ListItem
                 key={index}
                 title={item.name}
                 subtitle={item.description}
                 hideChevron={true}
                 onPress={() => this.props.onPress(item.id)}
                //<Dishdetail dish={item} />
                 leftAvatar={{ source: require('../assets/images/logo.png') }} />
         );
     };
    render(){
    return (
            <FlatList 
                data={this.props.dishes}
                renderItem={this.renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}
}


export default Menu;