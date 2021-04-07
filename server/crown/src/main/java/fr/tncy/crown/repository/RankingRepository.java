package fr.tncy.crown.repository;

import fr.tncy.crown.model.Ranking;

import java.util.List;

public interface RankingRepository {

  public void update(Ranking ranking);
  public List<Ranking> all();


}
