import * as React from 'react';
import {
    Button, StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    ToastAndroid,
    TouchableHighlight
} from 'react-native';

class Register extends React.Component {

    static navigationOptions = function (props) {
        return {
            title: 'Register',
            headerRight: <View />,
            headerRight: <TouchableHighlight onPress={() => props.navigation.navigate('People')} style={{ margin: 12 }}>
                <Text>
                    PEOPLE
                </Text>
            </TouchableHighlight>

        }

    }

    constructor(props) {
        super(props);

        this.state = {
            apiData: [],
            newData: [],
            name: null,
            lastname: null,
            address: null,
            id: null,
            product_id: null,

        }

        this.addItem = this.addItem.bind(this);

    }

    componentWillMount() {
        //call this function automatically while rendering page
        this.state.product_id = this.props.navigation.state.params.product
    }
    showToastMassage() {
        ToastAndroid.show('Your informations have taken, succesfuly!', ToastAndroid.LONG);
    }
    onPressed() {
        this.addItem();
        this.showToastMassage();
        this.props.navigation.navigate('People');
    }

    addItem() {
        fetch('http://192.168.1.64:3000/people', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                lastname: this.state.lastname,
                address: this.state.address,
                product_id: this.state.product_id,
            }),

        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({ newData: jsonData })
        }).done();
        this.state.id = null;
        this.state.name = null;
        this.state.lastname = null;
        this.state.address = null;
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>


                <ScrollView >
                    <Text style={styles.text}>
                        INFORMATİONS:
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.name}
                        placeholder="Firstname"
                        //set the value in state.
                        onChangeText={name => this.setState({ name })}
                        underlineColorAndroid="transparent"
                    />

                    <TextInput
                        value={this.state.lastname}
                        style={styles.input}
                        placeholder="Lastname"
                        onChangeText={lastname => this.setState({ lastname })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        value={this.state.address}
                        style={styles.input}
                        placeholder="Address"
                        onChangeText={address => this.setState({ address })}
                        underlineColorAndroid="transparent"
                    />


                    <View style={styles.buttonContainer} >
                        <Button

                            onPress={()=>this.onPressed()}
                            title="Submit"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'pink',
        height: '110%',
        paddingTop: 10
    },
    buttonContainer: {
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 8

    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 8
    },
    images: {
        width: 400,
        height: 300
    },
    buttonStyle: {
        marginHorizontal: 10,
        marginVertical: 15
    },

    text: {
        fontSize: 24,
        marginLeft: 10,
        marginTop: 15,
        color: '#424242'
    },


});

export default Register; 