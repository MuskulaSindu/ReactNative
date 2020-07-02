import React ,{Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {Card} from 'react-native-elements';




function RenderItem(props){
    const item=props.item;
    if(item!=null){
        return(
            <Card 
                featuredTitle={item.name}
                featuredSubtitle = {item.designation}
                image={require('../assets/images/uthappizza.png')}
            >
            <Text style={{margin : 20}}>
                {item.description}
            </Text>
            </Card>
        )
    }


}
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            leaders : LEADERS,
            promotions : PROMOTIONS
        }
    }
    static NavigationOption={
        title:'Home'
    }
    // RenderDish = (item) => {
    //     if(item!=null){
    //         return(
    //             <Card 
    //                 featuredTitle={item.name}
    //                 featuredSubtitle = {item.designation}
    //                 image={require('../assets/images/uthappizza.png')}
    //             >
    //             <Text style={{margin : 20}}>
    //                 {item.description}
    //             </Text>
    //             </Card>
    //         )
    //     }

    // }
    render(){
        // const dish1=this.state.dishes.filter((dish) => dish.featured);
        // const dish2=this.state.promotions.filter((promo) => promo.featured);
        // const dish3=this.state.leaders.filter((leader) => leader.featured);

        return(
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
               {/* {() => this.renderDish(dish1)}
               {() => this.renderDish(dish2)}
               {() => this.renderDish(dish3)} */}
            </ScrollView>
        )
    }
}
export default Home;