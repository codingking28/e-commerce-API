let files = {
  searchRecords: (data, val) => {
    function find(data) {
      if (
        data === val ||
        (data.toString &&
          val.toString &&
          data.toString().toLowerCase().includes(val.toString().toLowerCase()))
      )
        return true;
      return data === Object(data) && Object.values(data).some(find);
    }
    return (Array.isArray(data) ? data : Object.values(data)).filter(find);
  },
  getConsolidatedRecords: (array) => {
    let recordArr = [];
    array.map((data, i) => {
      recordArr.push(...data.records);
    });
    return recordArr;
  },
  getRecordsByStatus: (recordArr, status) => {
    return recordArr.filter((data) => data.status === status);
  },
};

module.exports = files;
