package fr.tncy.crown.mapper;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import fr.tncy.crown.model.Ranking;

import java.io.IOException;

public class RankingSerializer extends StdSerializer<Ranking> {


  public RankingSerializer() {
    this(null);
  }

  public RankingSerializer(Class<Ranking> t) {
    super(t);
  }

  @Override
  public void serialize(Ranking value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {

    jgen.writeStartObject();
    jgen.writeNumberField("user", value.getUser().getId());
    jgen.writeNumberField("wordsList", value.getWordsList().getId());
    jgen.writeNumberField("score", value.getScore());
    jgen.writeEndObject();
  }
}
