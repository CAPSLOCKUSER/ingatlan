import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import s from './NumberPicker.style';

const createPickerItem = (itemValue, pickerValue, onChange) => {
  const selectedBox = itemValue === pickerValue ? s.numberSelected : null;
  const selectedText = itemValue === pickerValue ? s.numberSelectedText : null;

  return (
    <TouchableOpacity
      key={itemValue}
      onPress={onChange}
    >
      <View style={[s.number, selectedBox]}>
        <Text style={[s.numberText, selectedText]}>{itemValue}</Text>
      </View>
    </TouchableOpacity>
  );
};

class NumberPicker extends Component {

  static propTypes = {};

  handleChange = value => () => {
    this.props.onChange(value);
  };

  render() {
    const numbers = this.props.options.map(itemValue => {
      const onClick = this.handleChange(itemValue);
      return createPickerItem(itemValue, this.props.value, onClick);
    });
    return (
      <View style={s.root}>
        <Text style={s.label}>{this.props.label}</Text>
        <View style={s.well}>
          {numbers}
        </View>
      </View>
    );
  }
}

export default NumberPicker;
