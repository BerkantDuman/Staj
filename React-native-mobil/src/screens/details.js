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

class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            apiData: [],
            name: null,
            lastname: null,
            address: null,
            id: null,
            product_id: null,
            price: null,
            productName: null,
            produt_detail: null,
        }
        this.searchData = this.searchData.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    componentWillMount() {
        //call this function automatically while rendering page
        this.searchData();
    }


    searchData() {
        fetch('http://192.168.1.64:3000/people/' + this.props.navigation.state.params.Data, {
            method: 'GET',


        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({ apiData: jsonData })
        }).done();
        this.state.id = null;

    }

    deleteData(id) {
        fetch('http://192.168.1.64:3000/people/' + (id), {
            method: 'DELETE',


        }).then((responseData) => {
            return responseData.json();
        }).done();
        this.props.navigation.push('People');

    }


    updateData() {
        fetch('http://192.168.1.64:3000/people', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                lastname: this.state.lastname,
                address: this.state.address,
                id: this.props.navigation.state.params.Data
            }),

        }).then((responseData) => {
            return responseData.json();
        }).done();
        this.state.id = null;
        this.state.name = null;
        this.state.lastname = null;
        this.state.address = null;
        this.componentWillMount();
        this.props.navigation.push('People')

    }

    renderItem(item) {

        return (


            <View key={item.id} style={{ flexDirection: 'row', backgroundColor: 'grey', margin: 8, borderRadius: 8, }}>

                <Text style={{ flex: 3, color: 'white', fontSize: 18, marginLeft: 12 }}>
                    Name: {item.name}  {'\n'}
                    Lastname: {item.lastname} {'\n'}
                    Address: {item.address} {'\n'}
                    Product: {item.productName} {'\n'}
                    ProductPrice: {item.price}
                </Text>


                <TouchableHighlight style={styles.touchableButton} onPress={() => this.deleteData(item.id)}>
                    <Text style={styles.deleteButton} >
                        Delete
                    </Text>
                </TouchableHighlight>

            </View>

        );

    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'pink' }}>
                {
                    this.state.apiData.map((item) => this.renderItem(item))
                }

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

                        onPress={this.updateData}
                        title="Update"
                    />
                </View>

            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    deleteButton: {
        color: 'white',
        fontSize: 18,
        backgroundColor: '#ba68c8',
        flex: 1,
        borderRadius: 8,
        textAlign: 'center',
        width: 100,
        height: 30,


    },

    touchableButton: {
        justifyContent: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
        width: 100,
        height: 30,
        borderRadius: 8,
        marginTop: 28,
        alignContent: 'center',
        marginRight: 12,

    },
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

});

export default Details;