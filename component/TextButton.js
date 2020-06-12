import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class TextButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    pressButton = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const { active } = this.state
        const { text, onPress } = this.props
        return (
            <TouchableOpacity
                behavior={'padding'}
                style={active ? styles.buttonActive
                                :styles.buttonInactive}
                onPress={() => {
                    this.pressButton();
                    onPress();
                }}
            >
                
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    buttonInactive: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    text: {
        fontSize: 6,
        fontWeight: 'bold',
        margin: 10,
    },
    buttonActive: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#BF327D',
        borderRadius: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
})

export default TextButton