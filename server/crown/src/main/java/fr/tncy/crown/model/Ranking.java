package fr.tncy.crown.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import fr.tncy.crown.mapper.RankingSerializer;

import java.time.LocalDateTime;

@JsonSerialize(using = RankingSerializer.class)
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
