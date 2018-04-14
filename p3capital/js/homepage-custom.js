function renderSalesDetails(data) {
    $('.sales_growth').html(data.warehouse_set.sales_growth);
    $('.sales_growth_3years').html(data.warehouse_set.sales_growth_3years);
    $('.sales_growth_10years').html(data.warehouse_set.sales_growth_10years);
}

function renderProfitGrowth(data) {
    $('.profit_growth_5years').html(data.warehouse_set.profit_growth_5years);
    $('.profit_growth_10years').html(data.warehouse_set.profit_growth_10years);
}

function renderReturnOnEquity(data) {
    $('.average_return_on_equity_3years').html(data.warehouse_set.average_return_on_equity_3years);
    $('.average_return_on_equity_10years').html(data.warehouse_set.average_return_on_equity_10years);
}

function renderAdditionalSummaryData(data) {
    $('.dividend_yield').html(data.warehouse_set.dividend_yield);
    $('.face_value').html(data.warehouse_set.face_value);
    $('.industry').html(data.warehouse_set.industry);
    $('.price_to_earning').html(data.warehouse_set.price_to_earning);
    $('.market_capitalization').html(data.warehouse_set.market_capitalization);
}


function renderAnnualisedNetProfit(annualData) {
    var domObj = "";
    var netProfit = fetchAnnualData(annualData, "Net Profit");
    $('#annual_netprofit').empty();
    $('#annual_netprofit').append(netProfit);
}

function renderAnnualisedDividend(annualData) {
    var domObj = "";
    var netProfit = fetchAnnualData(annualData, "Dividend Payout");
    $('#annual_dividend').empty();
    $('#annual_dividend').append(netProfit);
}

function renderAnnualisedEPS(annualData) {
    var domObj = "";
    var netProfit = fetchAnnualData(annualData, "EPS (unadj)");
    $('#annual_eps').empty();
    $('#annual_eps').append(netProfit);
}

function fetchAnnualData(annualData, searchStr) {
    var result;
    $.each(annualData, function (index, value) {
        if (value[0] == searchStr) {
            result = createDescripList(value[1]);
            return false;
        }
    });
    return result;
}

function createDescripList(valueObj) {
    var rowEle = "";
    var entries = Object.entries(valueObj);
    $.each(entries, function (index1, value1) {
        rowEle = rowEle + '<dt>' + value1[0] + '</dt><dd>' + value1[1] + '</dd>';
    });
    return rowEle;
}

function loadCompanyData(selectdEle){
    var compName = selectdEle;
    $.getJSON("json/"+compName+".json").done(function (data) {
        console.log(data.short_name);
        $('.compName').html(data.name);
        renderSalesDetails(data);
        renderAdditionalSummaryData(data);
        renderReturnOnEquity(data);
        renderProfitGrowth(data);
        var annualData = jsonPath(data,"$..annual");
        renderAnnualisedNetProfit(annualData[0]);
        renderAnnualisedEPS(annualData[0]);
        renderAnnualisedDividend(annualData[0]);
      });
}