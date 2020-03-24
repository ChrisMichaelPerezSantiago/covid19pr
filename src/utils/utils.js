const { ExportToCsv } = require('export-to-csv');

const formatNumber = (number) =>{
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

const renameKey = (obj, old_key, new_key) => {
  if (old_key !== new_key) {
    Object.defineProperty(obj, new_key,
      Object.getOwnPropertyDescriptor(obj, old_key));
    delete obj[old_key];
  }
};

const convertToCSV = (data , headers , title) =>{
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: `${title}`,
    useTextFile: false,
    useBom: true,
    filename: title,
    useKeysAsHeaders: true,
    headers: headers
  };
  const csvExporter = new ExportToCsv(options);
  csvExporter.generateCsv(data);
};

const exportCSVFile = (data, headers , title) =>{
  convertToCSV(data , headers , title);
};

const exportJSONFile = (obj , title) =>{
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj , null , 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", title + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}


module.exports = {
  renameKey,
  exportCSVFile,
  exportJSONFile,
  formatNumber
};