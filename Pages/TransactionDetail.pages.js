import React from 'react';
import {Text, View, Image, TouchableOpacity, Clipboard} from 'react-native';
import CopyIcon from '../Images/copy-icon-orange.jpeg';
import arrowBlack from  '../Images/black-arrow.png';
import {formatAmount, dateFormatter} from '../Utils/Transformer.utils';
import styles from './TransactionDetail.styles';

const TransactionDetailPage = ({navigation}) => {
  const datatransaction = navigation.state.params.dataValue;
  const idTransaction = datatransaction.id;
  const fromBankName = (datatransaction.sender_bank).toUpperCase();
  const toBankName = (datatransaction.beneficiary_bank).toUpperCase();
  const toAccountName = (datatransaction.beneficiary_name).toUpperCase();
  const toAccountNumber = datatransaction.account_number;
  const amount = datatransaction.amount;
  const remark = datatransaction.remark;
  const uniqueCode = datatransaction.unique_code;
  const dateCreate = datatransaction.created_at;

  // function to copy id trx to clipboard and can be paste, example copy : FT123456
  const copyTocllipboard = () => {
    Clipboard.setString(idTransaction);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <View style={styles.containerTrxBox}>
          <View>
            <Text style={styles.idTrxText}>ID TRANSAKSI:#{idTransaction}</Text>
          </View>
          <TouchableOpacity onPress={copyTocllipboard()}>
            <Image source={CopyIcon} style={styles.copyIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.detailTrxTextstyle}>
          <View>
            <Text style={styles.detailTrxText}>Detail Transaksi</Text>
          </View>
          <View style={styles.stylesCloseBox}>
            <Text style={styles.closeText}>Tutup</Text>
          </View>
        </View>
        <View style={styles.greyLine}/>
        <View style={styles.containerBankInfo}>
          <View>
            <Text style={styles.fromBankNameStyle}>{fromBankName}</Text>
          </View>
          <Image source={arrowBlack} style={styles.blackArrow}/> 
          <View>
            <Text style={styles.toBankNameStyle}>{toBankName}</Text>
          </View>
        </View>
        <View style={styles.containerDetailStyle}>
          <View>
            <View style={styles.paddingStyle}>
              <Text style={styles.accountNameStyle}>{toAccountName}</Text>
              <Text style={styles.accountNumberStyle}>{toAccountNumber}</Text>
            </View>
            <View style={styles.paddingStyle}>
              <Text style={styles.remarkTitleStyle}>BERITA TRANSFER</Text>
              <Text style={styles.remarkValueStyle}>{remark}</Text>
            </View>
            <View style={styles.paddingStyle}>
              <Text style={styles.timeTitleStyle}>WAKTU DIBUAT</Text>
              <Text style={styles.timeValueStyle}>{dateFormatter(dateCreate)}</Text>
            </View>
          </View>
          <View style={styles.containerStylesUniqueNominal}>
            <View style={styles.paddingStyle}>
              <Text style={styles.amountTitleStyle}>NOMINAL</Text>
              <Text style={styles.amountValueStyle}>Rp{formatAmount(amount)}</Text>
            </View>
            <View style={styles.paddingStyle}>
              <Text style={styles.uniqueCodeTitleStyle}>KODE UNIK</Text>
              <Text style={styles.uniqueCodeValueStyle}>{uniqueCode}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  ); 
};

export default TransactionDetailPage;