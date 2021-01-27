import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pinContainer: {
    height: '100%',
    width: '100%',
  },
  pinNumberContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  pin: {
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height : 1
    },
    shadowRadius: 1,
    shadowOpacity : 0.4 
  },
  pinText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 20,
    marginBottom: 7.5
  }
});
