import {createStackNavigator} from 'react-navigation';
import TransactionList from './Pages/ListTransaction.pages';
import DetailTransaction from './Pages/TransactionDetail.pages';

// to disable yellow box until dev done
console.disableYellowBox = true;

export default createStackNavigator({
  TransactionscreenList: {
    screen: TransactionList,
    navigationOptions:{
      headerTitle: 'Transaction List'
    }
  },
  DetailTrsactionscreenList: {
    screen: DetailTransaction,
    navigationOptions:{
      headerTitle: 'Detail Transaction',
      headerTintColor: 'black',
    }
  },
});
