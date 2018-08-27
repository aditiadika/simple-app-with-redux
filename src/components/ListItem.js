import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.headerText}>{title}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        paddingLeft: 15,
    }
})

export default connect(null, actions)(ListItem);