package fr.tncy.crown.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.util.Objects;

public class Ranking {

  private int userId;
  private int wordsListId;
  private int score = 0;

  public Ranking(){

  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public int getWordsListId() {
    return wordsListId;
  }

  public void setWordsListId(int wordsListId) {
    this.wordsListId = wordsListId;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    if(this.score < score)
      this.score = score;
  }

  public static Ranking getDefault(int userId, int wordsListId){
    Ranking r =  new Ranking();
    r.setWordsListId(wordsListId);
    r.setUserId(userId);
    return r;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Ranking ranking = (Ranking) o;
    return userId == ranking.userId && wordsListId == ranking.wordsListId;
  }

  @Override
  public int hashCode() {
    return Objects.hash(userId, wordsListId);
  }
}
