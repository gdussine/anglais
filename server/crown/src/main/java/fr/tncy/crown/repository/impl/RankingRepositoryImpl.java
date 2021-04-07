package fr.tncy.crown.repository.impl;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.repository.RankingRepository;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class RankingRepositoryImpl implements RankingRepository {

  private List<RankingRepository> rankings;
  private ObjectMapper mapper;
  private File rankingFile;


  public RankingRepositoryImpl(){
    rankingFile = new File("ranking.json");
    mapper = new ObjectMapper();
    try {
      FileReader reader = new FileReader(rankingFile);
      JavaType type = mapper.getTypeFactory().constructCollectionLikeType(List.class, WordsList.class);
      rankings = mapper.readValue(reader, type);
      reader.close();
    } catch (IOException e) {
      try {
        rankingFile.createNewFile();
        rankings = new ArrayList<>();
      } catch (IOException ioException) {
        ioException.printStackTrace();
      }
    }
  }

}
