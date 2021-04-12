package fr.tncy.crown.service.impl;

import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.repository.WordsListRepository;
import fr.tncy.crown.service.WordsListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordsListServiceImpl implements WordsListService {


  private final WordsListRepository repository;

  @Autowired
  public WordsListServiceImpl(WordsListRepository repository){
      this.repository = repository;
  }


  @Override
  public List<WordsList> all() {
    return repository.all();
  }
}
