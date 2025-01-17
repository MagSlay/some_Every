function hadOddNumber(arr){
    return arr.some(function(val){
        return val  % 2 !== 0;
    });
}

function hasAZero(num){
    return num.toString().split('').some(function(val){
        return val === "0";
    });
}

function hadOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val  % 2 !== 0;
    });
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

  function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val
    });
  }

  function hasCertainValue(arr, key, searcValue){
    return arr.every(function(val){
        return val[key] === searcValue;
    });
  }

