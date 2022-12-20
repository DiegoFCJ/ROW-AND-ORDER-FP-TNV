package com.tnv.userManager.controller.UsersControllersByRole;

import com.tnv.userManager.model.User;
import com.tnv.userManager.UserDetailsService.JpaUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminUsersController {
    JpaUserDetailsService userService;

    @Autowired
    public AdminUsersController(JpaUserDetailsService userService) {
        this.userService = userService;
    }

    @GetMapping("/hi")
    public String admin() {
        return "Hello, Admin!";
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userService.getUser(id);
    }

    @GetMapping("/all")
    public Iterable<User> allUsers() {
        return userService.allUsers();
    }

    @GetMapping("/email/{email}")
    public List<User> findByEmailContains(@PathVariable("email") String email) {
        return userService.findByEmailContains(email);
    }

    @GetMapping("/username/{username}")
    public List<User> findByUsernameContains(@PathVariable("username") String username) {
        return userService.findByUsernameContains(username);
    }

    @GetMapping("/score/{id}")
    public int userScore(@PathVariable("id") Long id) {
        return userService.userScore(id);
    }

    @GetMapping("/allScore")
    public ArrayList<Integer> allScores() {
        return userService.allScores();
    }

    @GetMapping("/allUsersDescending")
    public Collection<User> allUsersDescendByScore() {
        return userService.allUsersDescendByScore();
    }

    @GetMapping("/allUsersIncrease")
    public Collection<User> allUsersIncreaseByScore() {
        return userService.allUsersIncreaseByScore();
    }

    @GetMapping("/usernamesAndScoresList")
    public ArrayList<String> allScoresAndUsernames() {
        return userService.allScoresAndUsernames();
    }

    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        return userService.deleteUser(id);
    }

    @PatchMapping("/IncrementScore/{id}")
    public String incrementUserScore(@PathVariable("id") Long userId) {
        return userService.incrementUserScore(userId);
    }

    @PatchMapping("/name/{id}")
    public String updateUserName(@PathVariable("id") Long userId, @RequestBody User userDetails) {

        return userService.updateUserChoice(userId, userDetails, "name");
    }

    @PatchMapping("/surname/{id}")
    public String updateUserSurname(@PathVariable("id") Long userId, @RequestBody User userDetails) {

        return userService.updateUserChoice(userId, userDetails, "surname");
    }

    @PatchMapping("/username/{id}")
    public String updateUserUsername(@PathVariable("id") Long userId, @RequestBody User userDetails) {
        return userService.updateUserChoice(userId, userDetails, "username");
    }

    @PatchMapping("/password/{id}")
    public String updateUserPassword(@PathVariable("id") Long userId, @RequestBody User userDetails) {

        return userService.updateUserChoice(userId, userDetails, "password");
    }

    @PatchMapping("/email/{id}")
    public String updateUserEmail(@PathVariable("id") Long userId, @RequestBody User userDetails) {

        return userService.updateUserChoice(userId, userDetails, "email");
    }

    @PatchMapping("/score/{id}")
    public String updateUserScore(@PathVariable("id") Long userId, @RequestBody User userDetails) {

        return userService.updateUserChoice(userId, userDetails, "score");
    }
}
