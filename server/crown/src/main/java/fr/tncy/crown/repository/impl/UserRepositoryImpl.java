package fr.tncy.crown.repository.impl;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.tncy.crown.model.User;
import fr.tncy.crown.repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.io.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;


@Repository
public class UserRepositoryImpl implements UserRepository {

  private List<User> users;
  private File userFile;
  private ObjectMapper mapper;

  public UserRepositoryImpl(){
    userFile = new File("user.json");
    mapper = new ObjectMapper();
    try {
      FileReader reader = new FileReader(userFile);
      JavaType type = mapper.getTypeFactory().constructCollectionLikeType(List.class, User.class);
      users = mapper.readValue(reader, type);
      reader.close();
    } catch (IOException e) {
      try {
        userFile.createNewFile();
        users = new ArrayList<>();
      } catch (IOException ioException) {
        ioException.printStackTrace();
      }
    }
  }

  @Override
  public List<User> all() {
    return users;
  }

  @Override
  public void create(User user) {
    users.add(user);
    try {
      FileWriter writer = new FileWriter(userFile);
      mapper.writeValue(writer, users);
    } catch (IOException e) {
      e.printStackTrace();
    }

  }
}
