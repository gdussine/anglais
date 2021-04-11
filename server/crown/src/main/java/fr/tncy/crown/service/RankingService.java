package fr.tncy.crown.service;

import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;

import java.util.List;

public interface RankingService {

  public Ranking byUserbyWordsList(int userId, int wordsList);
  public List<Ranking> byWordsList(int wordsList);
  public List<Ranking> byUser(int userId);
  public void addOne(int userId, int wordsList, int score);
  public List<Ranking> all();

  public void reset();
}
