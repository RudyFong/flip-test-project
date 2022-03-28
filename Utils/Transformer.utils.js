// function to format amount ,example 1000 -> 1.000
export const formatAmount = (valueRaw) => {
  const value = Math.floor(valueRaw);
  const amount = (!value && parseInt(value) !== 0) ? '' :
        value.toString().replace(/([,.])+/g, '');
  const expectedSeparator = Math.floor(amount.length / 3);
  const separator = '.';
  const separatorAmount = (amount.split(separator).length - 1);
  const regexRightFormat = /(\.)(?=(\d{3}))/g; // if id/en
  if (regexRightFormat.test(value) && expectedSeparator === separatorAmount) 
    return value;
  else {
    const replaceRegex = /(\d)(?=(\d{3})+(?!\d))/g;
    const replaceValue = '$1' + separator;
    const returnValue = (!value && parseInt(value) !== 0) ? '' : value.toString().replace(replaceRegex, replaceValue);
    return returnValue;
  }
};

// function to format date
export const dateFormatter = (value) => {
  const t = value.split(/[- :]/);
  const getActualMonth = t[1] - 1;
  const d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  let nameOfMonth = '';
  switch (getActualMonth) {
  case 0:
    nameOfMonth = 'Januari';
    break;
  case 1:
    nameOfMonth = 'Februari';
    break;
  case 2:
    nameOfMonth = 'Maret';
    break;
  case 3:
    nameOfMonth = 'April';
    break;
  case 4:
    nameOfMonth = 'Mei';
    break;
  case 5:
    nameOfMonth = 'Juni';
    break;
  case 6:
    nameOfMonth = 'Juli';
    break;
  case 7:
    nameOfMonth = 'Agustus';
    break;
  case 8:
    nameOfMonth = 'September';
    break;
  case 9:
    nameOfMonth = 'Oktober';
    break;
  case 10:
    nameOfMonth = 'November';
    break;
  case 11:
    nameOfMonth = 'Desember';
    break;
  }
  const finalFormatDate = t[2].toString() + ' ' + nameOfMonth + ' ' + t[0].toString();
  return finalFormatDate;
};

// for filter by search or filter, name - bank name sendr or beneficery - amount
export const checkSearchFunction = (item, inputSearch) => {
  const filteringItem = item.filter((value) => {
    const textSearch = inputSearch.toLowerCase();
    const searchbyName = String(value.beneficiary_name).toLowerCase().indexOf(textSearch);
    const searchbyToBankName = String(value.beneficiary_bank).toLowerCase().indexOf(textSearch);
    const searchbyFromBankName = String(value.sender_bank).toLowerCase().indexOf(textSearch);
    const searchbyAmount = String(value.amount).indexOf(textSearch);
    const finalSearch = searchbyName !== -1 || searchbyToBankName !== -1 || searchbyFromBankName !== -1 || searchbyAmount !== -1;
    return finalSearch;
  });
  return filteringItem;
};