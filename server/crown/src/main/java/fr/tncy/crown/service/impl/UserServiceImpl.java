package fr.tncy.crown.service.impl;

import fr.tncy.crown.model.User;
import fr.tncy.crown.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

  private Set<User> data = new HashSet<>();

  private static int autoIncrement = 0;

  @Override
  public Set<User> all() {
    return data;
  }

  @Override
  public User byName(String name) {
    User user = data.stream().filter(x->x.getName().equals(name)).findAny().orElse(null);
    if(user == null){
      user = new User();
      user.setName(name);
      user.setId(++autoIncrement);
      data.add(user);
    }
    return user;
  }
}
