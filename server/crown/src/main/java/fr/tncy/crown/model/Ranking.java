package fr.tncy.crown.model;

import java.time.LocalDateTime;

public class Ranking {

  private User user;
  private WordsList wordsList;
  private int score;

  public Ranking(){

  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public WordsList getWordsList() {
    return wordsList;
  }

  public void setWordsList(WordsList wordsList) {
    this.wordsList = wordsList;
  }

  public int getScore() {
    return score;
  }


  public void setScore(int score) {
    if(this.score < score)
      this.score = score;
  }

}
