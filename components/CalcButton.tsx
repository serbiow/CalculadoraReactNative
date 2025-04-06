import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CalcButtonProps = {
  label: string;
  onPress: (value: string) => void;
};

export default function CalcButton({ label, onPress }: CalcButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
