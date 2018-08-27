import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, StyleSheet } from 'react-native';

class ListItem extends Component {
    render() {
        return(
            <CardSection>
                <Text style={styles.headerText}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        paddingLeft: 15,
    }
})

export default ListItem;