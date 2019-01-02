// import layer from './components/layer/layer.js'

const App = function() {
    console.log(layer);
    var workbook = new Excel.Workbook();
    console.log(__dirname);
    workbook.xlsx.readFile(__dirname + './statics/fee-excel.xlsx').then(function(res) {
        console.log(res, '11111111');
    });

};

// new App();