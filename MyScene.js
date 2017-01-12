import React, {Component} from 'react'
import { View, Text, Navigation } from "react-native"

export default class MyScene extends Component {
    static get defaultProps() {
        return {
            title: 'MyScene'
        }
    }

    render() {
        return (
            <Navigator 
                initialRout={{title: 'My Initial Scene', index:0}}
                renderScene={(route, navigator) => {
                return <MyScene title={route.title} />
                }}
            />
            <View>
                <Text>Hi! My name is {this.props.title}</Text>
            </View>
        )
        
    }
}
