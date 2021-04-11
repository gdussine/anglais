package fr.tncy.crown.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.repository.RankingRepository;
import fr.tncy.crown.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RankingServiceImpl implements RankingService {

  private final RankingRepository repository;

  @Autowired
  public RankingServiceImpl(RankingRepository repository){
    this.repository = repository;
  }

  @Override
  public Ranking byUserbyWordsList(int userId, int wordsListId) {
    return repository.all().stream()
      .filter(x -> x.getUserId() == userId && x.getWordsListId() == wordsListId)
      .findAny()
      .orElse(Ranking.getDefault(userId,wordsListId));
  }

  @Override
  public List<Ranking> byWordsList(int wordsList) {
    return repository.all().stream().filter(x->x.getWordsListId() == wordsList).sorted(new Comparator<Ranking>() {
      @Override
      public int compare(Ranking o1, Ranking o2) {
        return Integer.compare(o2.getScore(), o1.getScore());
      }
    }).collect(Collectors.toList());
  }

  @Override
  public List<Ranking> byUser(int userId) {
    return repository.all().stream().filter(x->x.getUserId() == userId).collect(Collectors.toList());
  }

  @Override
  public void addOne(int userId, int wordsList, int score) {
    Ranking r = this.byUserbyWordsList(userId, wordsList);
    r.setScore(score);
    try {
      System.out.println(new ObjectMapper().writeValueAsString(r));
    } catch (JsonProcessingException e) {
      e.printStackTrace();
    }
    repository.update(r);
  }

  @Override
  public void reset(){
    repository.reset();
  }

  @Override
  public List<Ranking> all() {
    return repository.all();
  }
}
