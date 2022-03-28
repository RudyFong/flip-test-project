import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default {
  container: {
    paddingHorizontal: 10, 
    flex: 1, 
    paddingBottom: 20
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  containerModalInner: {
    backgroundColor: 'white',
    widht: 150, 
    height: 220, 
    borderRadius: 5
  },
  paddingInsideDialog: {
    paddingTop: 10, 
    paddingHorizontal: 40,
    paddingBottom: 30
  },
  containerInsideDialog: {
    padding: 10, 
    flexDirection: 'row'
  },
  dotOuterStyling: {
    borderColor: 'red',
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotInnerStylingActive: {    
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 20
  },
  dotInnerStylingNonActive: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 20
  },
  paddingSortText: {
    paddingLeft: 15
  },
  containerSearchSortBox: {
    flexDirection: 'row', 
    padding: 10, 
    justifyContent: 'space-between', 
    backgroundColor: 'white', 
    marginBottom: 5, 
    borderRadius: 5
  },
  row: {
    flexDirection: 'row'
  },
  searchIcon: {
    width: 20, 
    height: 20, 
    alignSelf: 'center'
  },
  textInputStyle: {
    height: 40,
    padding: 10,
    width: 0.55 * width
  },
  boxSortStyle: {
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingRight: 7, 
    flexDirection: 'row'
  },
  sortingTextStyle: {
    paddingRight: 7,
    color: 'orange',
    fontSize: 12,
    fontWeight: '700'
  },
  arrowIconStyle: {
    width: 17, 
    height: 17
  },
  errorBoxContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 20
  },
  errorBoxStyles: {
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: 'black', 
    backgroundColor: 'white'
  },
  errorText: {
    padding: 5, 
    color: 'black'
  },
  constainerTransactionStyle: {
    backgroundColor: 'white', 
    marginVertical: 5, 
    borderRadius: 10, 
    flexDirection: 'row'
  },
  styleListSuccess: {
    width: 8,
    backgroundColor: 'green', 
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  styleListPending: {
    width: 8,
    backgroundColor: 'orange', 
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  listTransactionListBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flex: 1
  },
  listTransactionListBoxPadding: {
    padding: 15
  },
  bankSenderStyle: {
    fontWeight: '700',
    paddingRight: 5
  },
  blackArrowIcon: {
    width: 10, 
    height: 10, 
    alignSelf: 'center'
  },
  bankBenefitStyle: {
    fontWeight: '700',
    paddingLeft: 5
  },
  generalFontWeight: {
    fontWeight: '500'
  },
  outterBlackdotstyle: {
    alignItems: 'center', 
    height: 10, 
    width: 10, 
    justifyContent: 'center'
  },
  innerBlackdotstyles: { 
    borderRadius: 10, 
    height: 6, 
    width: 6, 
    backgroundColor: 'black', 
    paddingHorizontal: 3
  },
  styleAmountDatebox: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  containerSuccesPendingBox: {
    padding: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  successBoxStyle: {
    backgroundColor: 'green', 
    padding: 7, 
    borderRadius: 5
  },
  pendingBoxStyle: {
    borderWidth: 1, 
    borderColor: 'orange', 
    padding: 7, 
    borderRadius: 5
  },
  successText: {
    color: 'white', 
    fontWeight: '600'
  },
  pendingText: {
    fontWeight: '600'
  }
};
