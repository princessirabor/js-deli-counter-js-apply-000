function takeANumber(currentList, newName){
  var newNumberIndex = currentList.length
  var newNo = currentList.length +1;
  currentList[newNumberIndex] = newName;
  return "Welcome, "+newName+". You are number "+newNo+" in line."
}

function nowServing(currentList){
  var msg = ""
  if(currentList.length>0){
  var first = currentList[0];
  currentList.splice(0,1);
  }
  return "Currently serving "+first+".";
  
}