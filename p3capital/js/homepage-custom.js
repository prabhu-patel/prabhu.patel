function renderSalesDetails(data){
    $('.sales_growth').html(data.warehouse_set.sales_growth);
    $('.sales_growth_3years').html(data.warehouse_set.sales_growth_3years);
    $('.sales_growth_10years').html(data.warehouse_set.sales_growth_10years);
}

function renderProfitGrowth(data){
    $('.profit_growth_5years').html(data.warehouse_set.profit_growth_5years);
    $('.profit_growth_10years').html(data.warehouse_set.profit_growth_10years);
}

function renderReturnOnEquity(data){
    $('.average_return_on_equity_3years').html(data.warehouse_set.average_return_on_equity_3years);
    $('.average_return_on_equity_10years').html(data.warehouse_set.average_return_on_equity_10years);
}

function renderAdditionalSummaryData(data){
    $('.dividend_yield').html(data.warehouse_set.dividend_yield);
    $('.face_value').html(data.warehouse_set.face_value);
    $('.industry').html(data.warehouse_set.industry);
    $('.price_to_earning').html(data.warehouse_set.price_to_earning);
    $('.market_capitalization').html(data.warehouse_set.market_capitalization);
}


function renderAnnualisedNetProfit(data){

}

function renderAnnualisedDividend(data){

}

function renderAnnualisedEPS(data){

}