import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    backgroundColor: '#222',
  },
  display: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  displayText: {
    color: 'white',
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
