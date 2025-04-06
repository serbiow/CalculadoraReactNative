import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import CalcButton from '../components/CalcButton';
import { calculate } from '../utils/operations';
import { styles } from '../styles/calculadoraStyle';

export default function Calculadora() {
  const [input, setInput] = useState('');

  const handlePress = (val: string) => {
    if (val === 'C') {
      setInput('');
    } else if (val === '=') {
      setInput(calculate(input));
    } else {
      setInput((prev) => prev + val);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <CalcButton label={input || '0'} onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <CalcButton label="7" onPress={handlePress} />
        <CalcButton label="8" onPress={handlePress} />
        <CalcButton label="9" onPress={handlePress} />
        <CalcButton label="÷" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <CalcButton label="4" onPress={handlePress} />
        <CalcButton label="5" onPress={handlePress} />
        <CalcButton label="6" onPress={handlePress} />
        <CalcButton label="×" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <CalcButton label="1" onPress={handlePress} />
        <CalcButton label="2" onPress={handlePress} />
        <CalcButton label="3" onPress={handlePress} />
        <CalcButton label="-" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <CalcButton label="0" onPress={handlePress} />
        <CalcButton label="." onPress={handlePress} />
        <CalcButton label="=" onPress={handlePress} />
        <CalcButton label="+" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <CalcButton label="C" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}
