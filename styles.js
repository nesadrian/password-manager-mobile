import { StyleSheet } from 'react-native'

export const colors = {
  mainColorBackground: '#FFF',
  darkGrey: '#606060'
} 

export const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.mainColorBackground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  /* PIN */
  pinButtonsContainer: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%"
  },
  pinButtonContainer: {    
    marginBottom: 12,
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
  },
  pinButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "black",
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pinButtonText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  pinContainer: {
    width: '100%',
  },
  pinNumberContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  pinNumberDisplayContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 50
  },
  pinError: {
    color: 'red'
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
