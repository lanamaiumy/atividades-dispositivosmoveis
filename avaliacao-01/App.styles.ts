import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  loadingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold'
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D2D2D',
    textTransform: 'uppercase'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 5
  },
  switchLabel: {
    fontSize: 16,
    color: '#333'
  }
});