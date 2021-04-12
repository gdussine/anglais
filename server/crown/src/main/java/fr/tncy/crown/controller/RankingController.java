package fr.tncy.crown.controller;

import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class RankingController {

  private RankingService rankingService;

  @Autowired
  public RankingController(RankingService rankingService){
    this.rankingService = rankingService;
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/rank/new", method = RequestMethod.GET)
  @ResponseBody
  public void newRank(
    @RequestParam(value = "userId")String userId,
    @RequestParam(value = "wordsListId")String wordsListId,
    @RequestParam(value = "score")String score) {
    rankingService.addOne(Integer.parseInt(userId), Integer.parseInt(wordsListId), Integer.parseInt(score));
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/rank/by-words", method = RequestMethod.GET)
  @ResponseBody
  public List<Ranking> newRank(
    @RequestParam(value = "wordsListId")String wordsListId) {
    return rankingService.byWordsList(Integer.parseInt(wordsListId));
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/rank", method = RequestMethod.GET)
  @ResponseBody
  public List<Ranking> all() {
    return rankingService.all();
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/rank/reset", method = RequestMethod.GET)
  @ResponseBody
  public void reset() {
    this.rankingService.reset();
  }



}
