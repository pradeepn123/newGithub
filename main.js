//model controller
var modelController = (function () {
    var data = [{adults : 1, childrens : 0, infants : 0}]

    return {
        data : function (e) {
            if(e.target.className === 'adult_dec' && data[0].adults > 1){
                data[0].adults -= 1;
            }else if(e.target.className === 'adult_inc' && data[0].adults < 9){
                if(data[0].adults + data[0].childrens < 9){
                    data[0].adults += 1;
                }
            }else if(e.target.className === 'children_dec' && data[0].childrens > 0){
                data[0].childrens -= 1;
            }else if(e.target.className === 'children_inc'){
                if(data[0].adults + data[0].childrens < 9){
                    data[0].childrens += 1;
                }
            }else if(e.target.className === 'infant_dec' && data[0].infants > 0){
                data[0].infants -= 1;
            }else if(e.target.className === 'infant_inc' && data[0].adults >= data[0].infants && data[0].infants < data[0].adults ){
                data[0].infants += 1;
            }else if(e.target.className === 'btn'){
                this.postData();
            }
            return data;
        }
    }
})();
//ui controller
var uiController = (function () {
    var DomStrings = {
        adultDec : '.cards',
        heading : '.header',
        adults : '#adults',
        childrens : '#childrens',
        infants : '#infants'
    }
    return {
        updateData : function () {
            var data = modelController.data(event);
            document.querySelector(DomStrings.adults).value = data[0].adults;
            document.querySelector(DomStrings.childrens).value = data[0].childrens;
            document.querySelector(DomStrings.infants).value = data[0].infants;
        },
        getDomStrings : function () {
            return DomStrings;
        }
    }
})();
//app controller
var controller = (function (modelCtrl, uiCtrl) {
    document.querySelector(uiCtrl.getDomStrings().adultDec).addEventListener('click', uiCtrl.updateData);
})(modelController, uiController);