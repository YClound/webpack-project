var Excel = require('exceljs');
var fs = require('fs');

function changeRowsToDict(worksheet) {
    let dataArray = [];
    let keys = [];
    worksheet.eachRow(function(row, rowNumber) {
        if (rowNumber == 1) {
            keys = row.values;
        } else {
            let rowDict = cellValueToDict2(keys, row);
            dataArray.push(rowDict);
        }
    });
    return dataArray;
}

function cellValueToDict2(keys, row) {
    let data = {};
    row.eachCell(function(cell, colNumber) {
        if (keys[colNumber]) {
            var value = cell.value;

            if (typeof value == 'object') {
                value = value.text;
            }

            data[keys[colNumber]] = value;
        }
    });
    return data;
}

var workbook = new Excel.Workbook();
workbook.xlsx.readFile(__dirname + '/fee-excel.xlsx').then(function() {
    var worksheet = workbook.getWorksheet(3);
    var dataArray = changeRowsToDict(worksheet);
    fs.writeFileSync(__dirname + '/formatJson.json ', JSON.stringify(dataArray))
});