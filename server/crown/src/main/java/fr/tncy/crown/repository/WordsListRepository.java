package fr.tncy.crown.repository;

import fr.tncy.crown.model.WordsList;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface WordsListRepository {
  public List<WordsList> all();
}
