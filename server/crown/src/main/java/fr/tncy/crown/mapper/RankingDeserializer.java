package fr.tncy.crown.mapper;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import fr.tncy.crown.model.Ranking;
import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;

import java.io.IOException;

public class RankingDeserializer extends JsonDeserializer<Ranking> {

  @Override
  public Ranking deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
    ObjectCodec codec = p.getCodec();
    JsonNode node = codec.readTree(p);
    WordsList wordsList = new WordsList();
    wordsList.setId(node.get("wordsList").asInt());
    User user = new User();
    user.setId(node.get("user").asInt());
    Ranking ranking = new Ranking();
    ranking.setScore(node.get("score").asInt());
    ranking.setUser(user);
    ranking.setWordsList(wordsList);
    return ranking;
  }
}
