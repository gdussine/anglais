package fr.tncy.crown.service.impl;

import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.service.WordsListService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordsListServiceImpl implements WordsListService {
  @Override
  public List<WordsList> all() {
    WordsList w = new WordsList();
    w.setName("ok");
    return List.of(w);
  }
}
