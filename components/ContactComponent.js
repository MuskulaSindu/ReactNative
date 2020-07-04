import React from 'react';
import {Card} from 'react-native-elements';
import {Text,View} from 'react-native';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        const item="Contact info";
        return(
            // <Card>
            //     <Text style={{alignSelf : 'center', fontWeight:'bold', fontSize: 20}}>Contact Information</Text><Text></Text>
            //     <View
            //     style={{
            //         borderBottomColor: '',
            //         borderBottomWidth: 0.5,
            //     }}
            //     />
            <Card
                title="Contact Information">
                <Text></Text>
                <Text>121, Clear Water Bay Road</Text>
                <Text></Text>
                <Text>Clear Water Bay, Kowloon</Text>
                <Text></Text>
                <Text>HONG KONG</Text>
                <Text></Text>
                <Text>Tel: +852 1234 5678</Text><Text></Text>
                <Text>Fax: +852 8765 4321</Text><Text></Text>
                <Text>Email:confusion@food.net</Text>
            </Card>
   
        )
    }
}
export default Contact;