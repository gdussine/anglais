package fr.tncy.crown.repository;

import fr.tncy.crown.model.User;

import java.util.List;


public interface UserRepository {

  public List<User> all();

  public void create(User user);
}
