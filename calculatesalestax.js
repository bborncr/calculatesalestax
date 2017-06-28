var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}
];

function calculateSalesTax(salesData, taxRates) {
  // create object
  var sales = {};

  for(var company in salesData){
    // get the company name
    var companyName = salesData[company]['name'];
    // get the province
    var companyProvince = salesData[company]['province'];
    // use the province to get the taxRate
    var taxRate = taxRates[companyProvince];
    // get the company sales object
    var companySales = salesData[company]['sales'];
    //console.log(companySales);
    var totalSales = 0;
    var totalTaxes = 0;

    // loop through the company sales to do the calculations
    for(var sale in companySales){
      totalSales += companySales[sale];
      totalTaxes += companySales[sale] * taxRate;
      //console.log(companySales[sale]);
    }
    if (sales[companyName] == undefined){
      sales[companyName] = {'totalSales': totalSales, 'totalTaxes': totalTaxes};
    } else {
      sales[companyName]['totalSales'] += totalSales;
      sales[companyName]['totalTaxes'] += totalTaxes;
    }
  }

  return sales;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
sales =
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

// for each entry
//   get the name
//   get the province
//   get the taxRate for the province
//   create the name in the sales object
//         create totalSales
//         create totalTaxes
//       for sale in sales
//         totalSales = totalSales + sale
//         totalTaxes = totalTaxes + (sale * taxRate)



