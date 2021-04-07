package fr.tncy.crown.service;

import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;

import java.util.List;

public interface RankingService {
  public void reset(String name);
  public void setScore(User user, WordsList wordsList, int score);
  public List<Ranking> getTop(WordsList wordsList);
}
