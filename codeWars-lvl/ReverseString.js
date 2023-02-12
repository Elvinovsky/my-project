function solution(str){
    let reversStr = "";
    for ( i = str.length - 1; i >= 0; i--){
      reversStr += str[i];
    }
      return reversStr;
  }