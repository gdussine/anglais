package fr.tncy.crown.controller;

import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.service.WordsListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class WordsListController {

  private WordsListService wordsListService;

  @Autowired
  public WordsListController(WordsListService wordsListService){
    this.wordsListService = wordsListService;
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/wordslist", method = RequestMethod.GET)
  @ResponseBody
  public List<WordsList> all() {
    return wordsListService.all();
  }


}
