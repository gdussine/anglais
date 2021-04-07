package fr.tncy.crown.controller;

import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RankingController {

  private RankingService rankingService;

  @Autowired
  public RankingController(RankingService rankingService){
    this.rankingService = rankingService;
  }

  @RequestMapping(value = "/rank/reset", method = RequestMethod.GET)
  @ResponseBody
  public void reset(@RequestParam(value = "name", defaultValue = "Anonymous")String name) {
    rankingService.reset(name);
  }

}
