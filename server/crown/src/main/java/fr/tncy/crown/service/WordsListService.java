package fr.tncy.crown.service;

import fr.tncy.crown.model.WordsList;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WordsListService {

  public List<WordsList> all();



}
