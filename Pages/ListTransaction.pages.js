import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image, Text, View, Modal, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {formatAmount, dateFormatter, checkSearchFunction} from '../Utils/Transformer.utils';
import SearchIcon from '../Images/search-icon.png';
import ArrowDownIcon from '../Images/down-arrow-orange.png';
import BlackArrow from '../Images/black-arrow.png';
import styles from './ListTransaction.styles';

const TransactionListPage = ({navigation}) => {
  // state for save data from api, or from another function
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [isVisible, setVisibility] = useState(false);
  const [valueOfSortingName, setSortValueName] = useState('URUTKAN');
  const [valueOfSorting, setSortValue] = useState(0);
  const [sortingItem, setSortingMenu] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const getTansactionList = () => fetch('https://recruitment-test.flip.id/frontend-test').
    then((response) => response.json()).
    then((json) => {
      setTimeout(() =>  setLoading(false), 1000);
      setData(Object.keys(json).map((k) => json[k]));
      // for default order
      const defaultData = Object.keys(json).map((k) => json[k]);
      // for A-Z order
      const ascendAtoZ = Object.keys(json).map((k) => json[k]).sort(function (a, b) {
        var textA = a.beneficiary_name.toUpperCase();
        var textB = b.beneficiary_name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      // for Z-A order
      const descendZtoA = Object.keys(json).map((k) => json[k]).sort(function (a, b) {
        var textA = a.beneficiary_name.toUpperCase();
        var textB = b.beneficiary_name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      // date newest, run must be without debuging mode,  untuk run diharapkan tanpa debug mode dikarenakan perbedaan cara membaca antra simulator dan debug ,sehingga result akan berubah
      const finalsortingDateNew = Object.keys(json).map((k) => json[k]).sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      // oldest date sorting
      const finalsortingDateOld = Object.keys(json).map((k) => json[k]).sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      setSortingMenu([defaultData, ascendAtoZ, descendZtoA.reverse(), finalsortingDateNew, finalsortingDateOld.reverse()]);
    }).
    catch(() => {
      // jika error akan muncul reload button
      setLoading(false);
      setError(true);
    });

  useEffect(() => {
    // getTansactionList -> function to get data tranasction List
    getTansactionList();
  }, []);

  // untuk menuju ke halaman detail transaction
  const goToDetailTranasaction = (value) => () => {
    navigation.navigate('DetailTrsactionscreenList', {dataValue: value});
  };

  // untuk render list transaksi
  const renderlistItems = (item) => {
    // untuk check apakah ada filter atau search berlangsung
    const checkinputSearch = inputSearch === '' ? item : checkSearchFunction(item, inputSearch);
    return checkinputSearch.map((value) =>
      <TouchableOpacity onPress={goToDetailTranasaction(value)} style={styles.constainerTransactionStyle}>
        <View style={value.status.toUpperCase() === 'SUCCESS' ? styles.styleListSuccess : styles.styleListPending} />
        <View style={styles.listTransactionListBox}>
          <View style={styles.listTransactionListBoxPadding}>
            <View style={styles.row}>
              <Text style={styles.bankSenderStyle}>{value.sender_bank.toUpperCase()}</Text>  
              <Image source={BlackArrow} style={styles.blackArrowIcon}/> 
              <Text style={styles.bankBenefitStyle}>{value.beneficiary_bank.toUpperCase()}</Text>
            </View>
            <Text style={styles.generalFontWeight}>{value.beneficiary_name.toUpperCase()}</Text>
            <View style={styles.styleAmountDatebox}>
              <Text style={styles.generalFontWeight}>Rp{formatAmount(value.amount)}</Text>
              <View style={styles.outterBlackdotstyle}>
                <View style={styles.innerBlackdotstyles}/>
              </View>
              <Text style={styles.generalFontWeight}>{dateFormatter(value.created_at)}</Text>
            </View>
          </View>
          <View style={styles.containerSuccesPendingBox}>
            <View style={value.status.toUpperCase() === 'SUCCESS' ? styles.successBoxStyle : styles.pendingBoxStyle}>
              <Text style={value.status.toUpperCase() === 'SUCCESS' ? styles.successText : styles.pendingText }>{value.status.toUpperCase() === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</Text> 
            </View>
          </View>
        </View>
      </TouchableOpacity>
      ); 
  };

  const onChangeNumber = (item) => {
    // untuk set input search or filter
    setInputSearch(item);
  };

  const visibleOverlay = () => {
    setVisibility(true);
  };

  const sortingValue = (value) => () => {
    setSortValueName(value.name);
    setSortValue(value.value);
    setVisibility(false);
  };

  // function dimana jika data tidak tereload maka bisa di coba kembali - function if something error occured, then can be try again with button
  const ifErrorOccured = () => {
    setLoading(true);
    setError(false);
    getTansactionList();
  };

  // menu sorting static
  const sortingMenu = [{name: 'URUTKAN', value: 0}, {name: 'NAMA A-Z', value: 1}, {name: 'NAMA Z-A', value: 2}, {name: 'Tanggal Terbaru', value: 3}, {name: 'Tanggal Terlama', value: 4}];
  return (
    <View style={styles.container}>
      <Modal visible={isVisible} animationType='fade'
        transparent={true} >
        <View style={styles.containerModal}>
          <View style={styles.containerModalInner}>
            <View style={styles.paddingInsideDialog}>
              {sortingMenu.map((value) =>
                <TouchableOpacity onPress={sortingValue(value)} style={styles.containerInsideDialog}>
                  {value.name === valueOfSortingName ?
                    <View style={styles.dotOuterStyling}>
                      <View style={styles.dotInnerStylingActive}/>
                    </View>
                            :
                    <View style={styles.dotOuterStyling}>
                      <View style={styles.dotInnerStylingNonActive}/>
                    </View>
                  }
                  <View style={styles.paddingSortText}>
                    <Text>{value.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.containerSearchSortBox}>
        <View style={styles.row}>
          <Image source={SearchIcon} style={styles.searchIcon}/>
          <TextInput
        style={styles.textInputStyle}
        onChangeText={onChangeNumber}
        placeholder='Cari nama, bank, atau nominal'
      />
        </View>
        <TouchableOpacity onPress={visibleOverlay} style={styles.boxSortStyle}>
          <Text style={styles.sortingTextStyle}>{valueOfSortingName}</Text>
          <Image source={ArrowDownIcon} style={styles.arrowIconStyle}/>
        </TouchableOpacity>
      </View>
      {isLoading ? <ActivityIndicator/> : isError ?  
        <TouchableOpacity onPress={ifErrorOccured} style={styles.errorBoxContainer}>
          <View style={styles.errorBoxStyles}>
            <Text style={styles.errorText}>Try Again reload</Text>
          </View>
        </TouchableOpacity>
      : (
        <ScrollView>
          {valueOfSorting === 0 ? 
          renderlistItems(data)
        :
          renderlistItems(sortingItem[valueOfSorting])
          }
        </ScrollView>
      )}
    </View>
  );
};

export default TransactionListPage;