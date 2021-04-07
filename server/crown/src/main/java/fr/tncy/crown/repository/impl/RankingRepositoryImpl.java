package fr.tncy.crown.repository.impl;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.repository.RankingRepository;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class RankingRepositoryImpl implements RankingRepository {

  private List<Ranking> rankings;
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

  @Override
  public void update(Ranking ranking) {
    rankings.remove(ranking);
    rankings.add(ranking);
    try {
      FileWriter writer = new FileWriter(rankingFile);
      mapper.writeValue(writer, rankingFile);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public List<Ranking> all(){
    return rankings;
  }
}
