package fr.tncy.crown.service.impl;

import fr.tncy.crown.model.User;
import fr.tncy.crown.repository.UserRepository;
import fr.tncy.crown.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  private int autoIncrement;
  private UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository){
    this.userRepository = userRepository;
    this.autoIncrement = userRepository.all().stream().map(x->x.getId()).max(Integer::compareTo).orElse(0);
  }

  @Override
  public List<User> all() {
    return this.userRepository.all();
  }

  @Override
  public User byName(String name) {
    User user = this.userRepository.all().stream().filter(x->x.getName().equals(name)).findAny().orElse(null);
    if(user == null){
      user = new User();
      user.setName(name);
      user.setId(++autoIncrement);
      this.userRepository.create(user);
    }
    return user;
  }

  public User byId(int id){
    User user = this.userRepository.all().stream().filter(x->x.getId()==id).findAny().orElse(null);
    return user;
  }
}
