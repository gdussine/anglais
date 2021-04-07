package fr.tncy.crown.service;

import fr.tncy.crown.model.User;

import java.util.List;

public interface UserService{

  public List<User> all();

  public User byName(String name);

}
