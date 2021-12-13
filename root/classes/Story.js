class Story{
  constructor(){
    this.storyText = "";
    this.wordList = [];
  }

  setStory(storyText){
    this.storyText = storyText;
  }

  setWordList(wordList){
    this.wordList = wordList;
  }

  push(word){
    this.wordList.push(new Word(word));
  }

  getWordList(){
    return this.wordList;
  }

  getWordIndex(index){
    return this.wordList[index];
  }

  setWordValue(index, value){
    this.wordList[index].setWordValue(value);
  }

  getStory(){
    var revised = this.storyText;
    for(var i = 0; i < this.wordList.length; i++){
      revised = revised.replace("[" + i + "]", this.wordList[i].wordValue);
    }
    return revised;
  }
}