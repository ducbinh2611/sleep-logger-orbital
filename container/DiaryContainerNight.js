import { ScrollView, Text, View, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import QuestionText from '../component/QuestionText'
import TextButton from '../component/TextButton';
import Icon from 'react-native-vector-icons/Feather';


class DiaryContainerNight extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Night',
        tabBarIcon: ({color}) => (
            <Icon name='moon' color={'yellow'} size={20} />
        )
    }

    state = {
        napMorning: '',
        napAfternoon: '',
        napMEvening: '',
        caffeineMorning: '',
        caffeineAfternoon: '',
        caffeineEvening: '',
    }

    handleNapMorning = (value) => {
        this.setState({
            napMorning: value
        })
    }

    handleNapAfternoon = (value) => {
        this.setState({
            napAfternoon: value
        })
    }

    handleNapEvening = (value) => {
        this.setState({
            napEvening: value
        })
    }

    handleCafMorning = (value) => {
        this.setState({
            caffeineMorning: value
        })
    }

    handleCafAfternoon = (value) => {
        this.setState({
            caffeineAfternoon: value
        })
    }

    handleCafEvening = (value) => {
        this.setState({
            caffeineEvening: value
        })
    }

    render() {
        const { napMorning, napAfternoon, napEvening,
            caffeineMorning, caffeineAfternoon, caffeineEvening } = this.state
        return (
            <ScrollView>
                <View style={styles.container}>

                    <QuestionText
                        style={styles.questionComponent}
                        question={'How much caffeine did you take?'}
                        style={styles.question}
                    >
                        <View style={styles.options}>
                            <Text style={styles.text}>Morning    </Text>
                            <TextButton size={'30'} text={'None'}
                                onPress={() => this.handleCafMorning('0')}> </TextButton>
                            <TextButton size={'30'} text={'Low'}
                                onPress={() => this.handleCafMorning('1')}> </TextButton>
                            <TextButton size={'30'} text={'Medium'}
                                onPress={() => this.handleCafMorning('2')}> </TextButton>
                            <TextButton size={'30'} text={'High'}
                                onPress={() => this.handleCafMorning('3')}> </TextButton>
                        </View>

                        <View style={styles.options}>
                            <Text style={styles.text}>Afternoon</Text>
                            <TextButton size={'30'} text={'None'}
                                onPress={() => this.handleCafAfternoon('0')}> </TextButton>
                            <TextButton size={'30'} text={'Low'}
                                onPress={() => this.handleCafAfternoon('1')}> </TextButton>
                            <TextButton size={'30'} text={'Medium'}
                                onPress={() => this.handleCafAfternoon('2')}> </TextButton>
                            <TextButton size={'30'} text={'High'}
                                onPress={() => this.handleCafAfternoon('3')}> </TextButton>
                        </View>

                        <View style={styles.options}>
                            <Text style={styles.text}>Night         </Text>
                            <TextButton size={'30'} text={'None'}
                                onPress={() => this.handleCafEvening('0')}> </TextButton>
                            <TextButton size={'30'} text={'Low'}
                                onPress={() => this.handleCafEvening('1')}> </TextButton>
                            <TextButton size={'30'} text={'Medium'}
                                onPress={() => this.handleCafEvening('2')}> </TextButton>
                            <TextButton size={'30'} text={'High'}
                                onPress={() => this.handleCafEvening('3')}> </TextButton>
                        </View>
                    </QuestionText>

                    <QuestionText
                        style={styles.questionComponent}
                        question={'Did you nap in the'}
                    >
                        <View style={styles.options}>
                            <Text style={styles.text}>Morning?    </Text>
                            <TextButton size={'30'} text={'Yes'}
                                onPress={() => this.handleNapMorning('1')}> </TextButton>
                            <TextButton size={'30'} text={'No'}
                                onPress={() => this.handleNapMorning('0')}> </TextButton>

                        </View>

                        <View style={styles.options}>
                            <Text style={styles.text}>Afternoon?</Text>
                            <TextButton size={'30'} text={'Yes'}
                                onPress={() => this.handleNapAfternoon('1')}> </TextButton>
                            <TextButton size={'30'} text={'No'}
                                onPress={() => this.handleNapAfternoon('0')}> </TextButton>

                        </View>

                        <View style={styles.options}>
                            <Text style={styles.text}>Evening?     </Text>
                            <TextButton size={'30'} text={'Yes'}
                                onPress={() => this.handleNapEvening('1')}> </TextButton>
                            <TextButton size={'30'} text={'No'}
                                onPress={() => this.handleNapEvening('0')}> </TextButton>

                        </View>
                    </QuestionText>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                if (napMorning && napAfternoon && napEvening
                                    && caffeineAfternoon && caffeineEvening && caffeineMorning) {
                                    console.warn('nap morn ' + napMorning);
                                    console.warn('nap aft ' + napAfternoon);
                                    console.warn('nap even ' + napEvening);
                                    console.warn('caf mor ' + caffeineMorning);
                                    console.warn('caf aft ' + caffeineAfternoon);
                                    console.warn('caf eve ' + caffeineEvening);
                                } else {
                                    alert("Key in all data first")
                                }
                            }}
                        >
                            <Text style={styles.textInput}>
                                Submit
                        </Text>

                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#291D54',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    question: {
        fontSize: 20,
        marginBottom: 10,
    },
    questionComponent: {
        marginTop: 20,
        marginBottom: 20,
    },
    options: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        marginTop: 21,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    },
    button: {
        alignItems: 'center',
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: 'yellow',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 40,
        marginBottom: 40,
        
    },
    textInput: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default DiaryContainerNight