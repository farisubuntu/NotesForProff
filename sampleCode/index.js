console.log("starting index.js script");
function strcmp(a,b){
  if(a===b){
    return 0;
  }
  if(a>b){
    return 1;
  }
  return -1;
}

var arr = ["bananas", "cranberries", "apples"];
arr.sort(function(a, b) {
return a.localeCompare(b);
 });
console.log(arr); // [ "apples", "bananas", "cranberries" ]
