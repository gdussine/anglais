package fr.tncy.crown.controller;

import fr.tncy.crown.model.User;
import fr.tncy.crown.model.WordsList;
import fr.tncy.crown.service.UserService;
import fr.tncy.crown.service.WordsListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@Controller
public class UserController {


  private final UserService service;

  @Autowired
  public UserController(UserService service){
    this.service = service;
  }

  @CrossOrigin(origins = "*")
  @GetMapping(value = "/users")
  @ResponseBody
  public List<User> all() {
    return service.all();
  }

  @CrossOrigin(origins = "*")
  @GetMapping(value = "/users/{name}")
  @ResponseBody
  public User byName(@PathVariable(value = "name") String name) {
    return service.byName(name);
  }

  @CrossOrigin(origins = "*")
  @GetMapping(value = "/users/id/{id}")
  @ResponseBody
  public User byId(@PathVariable(value = "id") int id) {
    return service.byId(id);
  }

}
