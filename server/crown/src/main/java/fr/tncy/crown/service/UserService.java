package fr.tncy.crown.service;

import fr.tncy.crown.model.User;

import java.util.List;
import java.util.Set;

public interface UserService{

  public Set<User> all();

  public User byName(String name);

}
