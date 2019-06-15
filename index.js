function takeANumber(currentList, newName){
  var newNumberIndex = currentList.length
  var newNo = currentList.length +1;
  currentList[newNumberIndex] = newName;
  return "Welcome, "+newName+". You are number "+newNo+" in line."
}