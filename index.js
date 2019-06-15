function takeANumber(currentList, newName){
  newNumberIndex = currentList.length
  newNo = currentList.length +1;
  currentList[newNumberIndex] = newName;
  return "Welcome, "+newName+". You are number "+newNo+" in line."
}