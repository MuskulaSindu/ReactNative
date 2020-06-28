import React from 'react';
import {View,Text} from 'react-native';
import {Card} from 'react-native-elements';

class Dishdetail extends React.Component{
        constructor(props){
            super(props);
            this.state={

            }
        }
        render(){
            const dish=this.props.dish;
            if(dish!=null){
            return(
                <Card
                    featuredTitle={dish.name}
                    image={require('../assets/images/logo.png')}
                >
                    <Text style={{margin :10}}>
                        {dish.description}
                    </Text>
                </Card>
            )
        }
        else{
            return(
                <View></View>
            )
        }
    }
}

export default Dishdetail;