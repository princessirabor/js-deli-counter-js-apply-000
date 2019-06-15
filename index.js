function takeANumber(currentList, newName){
  var newNumberIndex = currentList.length
  var newNo = currentList.length +1;
  currentList[newNumberIndex] = newName;
  return "Welcome, "+newName+". You are number "+newNo+" in line."
}

function nowServing(currentList){
  var first = currentList[0];
  currentList[0].remove();
  return first;
  
}