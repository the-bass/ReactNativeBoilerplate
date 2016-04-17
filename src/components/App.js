import React, { Component, PropTypes, StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../redux/modules/counter'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FEFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    fontSize: 200
  },
  button: {
    margin: 5,
    backgroundColor: '#00AAFF',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
})

const touchableHightlightBaseConfig = {
  underlayColor: '#9CDEFF',
  style: styles.button
}

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    const { counter, increment, doubleAsync } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
          {counter}
        </Text>
        <TouchableHighlight onPress={increment} {...touchableHightlightBaseConfig}>
          <Text>
            Increment
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={doubleAsync} {...touchableHightlightBaseConfig}>
          <Text>
            Double (Async)
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync
})(App)
