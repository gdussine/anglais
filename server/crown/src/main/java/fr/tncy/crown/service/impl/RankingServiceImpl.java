package fr.tncy.crown.service.impl;

import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.service.RankingService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RankingServiceImpl implements RankingService {

  private List<Ranking> data;

  public RankingServiceImpl(){
    data = new ArrayList<>();
  }

  @Override
  public void reset(String name) {
    data.stream().filter(x->x.getUser().getName().equals(name)).forEach(x->x.setScore(0));
  }

  @Override
  public void setScore(User user, WordsList wordsList, int score) {
    Ranking userRanks = data.stream().filter(x->x.getUser().equals(user) && x.getWordsList().equals(wordsList)).findAny().orElse(null);
    if(userRanks == null){
      userRanks = new Ranking();
      userRanks.setUser(user);
      userRanks.setWordsList(wordsList);
    }
    userRanks.setScore(score);
  }

  @Override
  public List<Ranking> getTop(WordsList wordsList) {
    return data.stream().filter(x->x.getWordsList().equals(wordsList)).sorted(new Comparator<Ranking>() {
      @Override
      public int compare(Ranking o1, Ranking o2) {
        return Integer.compare(o2.getScore(), o1.getScore());
      }
    }).collect(Collectors.toList());
  }
}
