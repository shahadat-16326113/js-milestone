//1
function feetToMile(feet){

    var mile = feet/5280;
    return mile;

}

var mileResult =feetToMile(1);
console.log(mileResult);




//2
function woodCalculator(chair,table,bed){

    var chairQuantity = chair * 1 *(3*1*0.5);
    var tableQuantity = table * 3 *(3*1*0.5);
    var bedQuantity   = bed   * 5 *(3*1*0.5);

    var totalQuantity =chairQuantity + tableQuantity + bedQuantity;
    return totalQuantity;

}

var woodQuantityResult =woodCalculator(10,2,12);  //amount of chair,table,bed passing parameter
console.log(woodQuantityResult);




//3
function brickCalculator(n){
    var ans=0;

    if(n>20){

        ans+= (15*1000*10)+(12*1000*10)+(10*1000*(n-20));
    }

    else if(n>=11 && n<=20){

        ans+= (15*1000*10)+(12*1000*(n-10));
    }
    else if(n>=1 && n<=10){

        ans+= (15*1000*n);
    }
    return ans;


}

var result= brickCalculator(19);
console.log(result);



//4
function tinyFriend(smallFriend){

    var min=smallFriend[0];
    for(var i=0; i<3; i++){
        if(smallFriend[i].length < min.length){
            min=smallFriend[i];
        }
    }
    return  min;

}

var result=tinyFriend(["saadat","tuhin","sami"]);
console.log(result);
