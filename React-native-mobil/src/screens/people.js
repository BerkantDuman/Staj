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

class People extends React.Component {
    static navigationOptions = function (props) {
        return {
            title: 'People',
            headerRight: <View />,
            headerRight: <TouchableHighlight onPress={() => props.navigation.navigate('Products')} style={{ margin: 12 }}>
                <Text>
                    HOME
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

        }


        this.getData = this.getData.bind(this);
        this.searchData = this.searchData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    componentWillMount() {
        //call this function automatically while rendering page
        this.getData();
    }

    componentWillUpdate(){
        this.componentWillMount()
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
                id: this.state.id,
            }),

        }).then((responseData) => {
            return responseData.json();
        }).done();
        this.state.id = null;
        this.state.name = null;
        this.state.lastname = null;
        this.state.address = null;
    }

    deleteData(id) {
        fetch('http://192.168.1.64:3000/people/' + (id), {
            method: 'DELETE',


        }).then((responseData) => {
            return responseData.json();
        }).done();
        this.componentWillMount();

    }


    searchData() {
        fetch('http://192.168.1.64:3000/people/' + (this.state.id), {
            method: 'GET',


        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({ apiData: jsonData })
        }).done();
        this.state.id = null;
    }

    getData() {
        fetch('http://192.168.1.64:3000/people', {
            method: 'GET'

        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            this.setState({ apiData: jsonData })
        }).done();
        this.state.id = null;
    }



    renderItem(item) {
        return (

            <View key={item.id} style={{ flexDirection: 'row', height: 75, backgroundColor: 'grey', margin: 8, borderRadius: 8, }}>

                <Text style={{ flex: 3, color: 'white', fontSize: 18, marginLeft: 18, marginTop: 10 }}>
                    Name: {item.name}  {'\n'}
                    Lastname: {item.lastname} {'\n'}
                </Text>
                <View>
                    <TouchableHighlight style={styles.touchableButton} onPress={() => this.deleteData(item.id)}>
                        <Text style={styles.deleteButton}>
                            Delete
                    </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.touchableButton} onPress={() => this.props.navigation.navigate('Details', {
                        Data: item.id,
                    })}>
                        <Text style={styles.detailButton}>
                            Details
                    </Text>
                    </TouchableHighlight>
                </View>

            </View>

        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>


                <ScrollView>
                    <Text style={styles.text}>
                        Search by ID:
                    </Text>
                    <TextInput
                        value={this.state.id}
                        style={styles.input}
                        placeholder="Find person with ID"
                        onChangeText={id => this.setState({ id })}
                        underlineColorAndroid="transparent"

                    />


                    <View style={styles.buttonContainer} >

                        <Button

                            onPress={this.searchData}
                            title="Search"
                        />
                    </View>




                    <ScrollView>
                        {
                            this.state.apiData.map((item) => this.renderItem(item))
                        }

                    </ScrollView>

                </ScrollView >
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'pink',
        height: '100%'
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
    text: {
        fontSize: 24,
        marginLeft: 10,
        marginTop: 15,
        color: '#424242'
    },
    images: {
        width: 400,
        height: 300
    },
    buttonStyle: {
        marginHorizontal: 10,
        marginVertical: 15
    },
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
    detailButton: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'green',
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
        marginTop: 5,
        marginRight: 12,

    }


});

export default People; 