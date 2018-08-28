import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation, Platform, UIManager } from 'react-native';
import * as actions from '../actions';
if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true) }

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDiscription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex:1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.headerText}>{title}</Text>
                    </CardSection>
                    {this.renderDiscription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        paddingLeft: 15,
        textAlign: 'center',
    }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);