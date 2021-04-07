package fr.tncy.crown.model;

import java.util.List;
import java.util.Objects;

public class WordsList {

  private int id;
  private String name;
  private int score;
  private List<Word> words;

  public WordsList(){

  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }

  public List<Word> getWords() {
    return words;
  }

  public void setWords(List<Word> words) {
    this.words = words;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    WordsList wordsList = (WordsList) o;
    return id == wordsList.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}
