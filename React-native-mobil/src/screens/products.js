import * as React from 'react';
import {
    Button,
    StyleSheet,
    View,
    ToastAndroid,
    ScrollView,
    Text,
    Image
} from 'react-native';

import { Card } from 'react-native-elements';



class Products extends React.Component {
    static navigationOptions = function (props) {
        return {
            title: 'WorldWideWeb',
        }

    }
    showToastMassage() {
        ToastAndroid.show('Your product added to cart!', ToastAndroid.SHORT);
    }
    onPressed() {
        var RandomNumber = Math.floor(Math.random() * 3) + 1 ;
 
        this.showToastMassage();
        this.props.navigation.navigate('Register', {
            product: RandomNumber
        });
    }
    render() {
        //const navigate olarak tanımlayınca uygulama çalışmıyor fakat test başarılı oluyor.
        //const { navigate }  = this.props.navigation;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.head}>
                        COMPUTERS
                    </Text>
                    <View >
                        <Card
                            style={styles.images}
                            image={require('../images/laptop1.jpeg')} >


                        </Card>
                        <Text style={styles.textHead}>
                            899$
                    </Text>
                        <Text style={styles.textDetail}>
                            DELL 15-DB0023NT AMD RYZEN 3 2200U 2.5GHZ-4GB-1TB HDD-15.6-AMD-W10 NOTEBOOK
                    </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title="Buy"
                            onPress={() => this.onPressed()}
                        />
                    </View>

                    <View >
                        <Card
                            image={require('../images/laptop2.jpeg')}>

                        </Card>
                        <Text style={styles.textHead}>
                            769$
                    </Text>
                        <Text style={styles.textDetail}>
                            ASUS S430FN CORE I7 8565U 1.8GHZ-8GB RAM-256GB SSD-14-MX150 2GB-W10 - NOTEBOOK
                    </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title="Buy"
                            onPress={() => this.onPressed()}
                        />
                    </View>
                    <View >
                        <Card
                            image={require('../images/laptop3.jpeg')}>

                        </Card>
                        <Text style={styles.textHead}>
                            999$
                    </Text>
                        <Text style={styles.textDetail}>
                            HP X540LA CORE I3 5005U 2.0GHZ-4GB RAM-500GB HDD-15.6W10 NOTEBOOK
                    </Text>

                    </View>

                    <View style={styles.buttonStyle}>
                        <Button
                            title="Buy"
                            onPress={() => this.onPressed()}
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
    },
    buttonContainer: {
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 8

    },
    textHead: {
        textAlign: 'center',
        fontSize: 24,

    },
    textDetail: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 8,

    },
    head: {
        textAlign: 'center',
        fontSize: 28,
        paddingHorizontal: 8,

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



export default Products;