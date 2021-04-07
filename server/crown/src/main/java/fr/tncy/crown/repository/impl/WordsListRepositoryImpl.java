package fr.tncy.crown.repository.impl;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.repository.WordsListRepository;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@Repository
public class WordsListRepositoryImpl implements WordsListRepository {

  private List<WordsList> wordsLists;
  private ObjectMapper mapper;
  private File wordsFile;


  public WordsListRepositoryImpl(){
    wordsFile = new File("words.json");
    mapper = new ObjectMapper();
    try {
      FileReader reader = new FileReader(wordsFile);
      JavaType type = mapper.getTypeFactory().constructCollectionLikeType(List.class, WordsList.class);
      wordsLists = mapper.readValue(reader, type);
      reader.close();
    } catch (IOException e) {
      try {
        wordsFile.createNewFile();
        wordsLists = new ArrayList<>();
      } catch (IOException ioException) {
        ioException.printStackTrace();
      }
    }
  }

  @Override
  public List<WordsList> all() {
    return wordsLists;
  }
}
