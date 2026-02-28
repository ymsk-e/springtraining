package jp.alhinc.springtraining.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import jp.alhinc.springtraining.entity.User;
import jp.alhinc.springtraining.form.CreateUserForm;
import jp.alhinc.springtraining.service.CreateUserService;
import jp.alhinc.springtraining.service.GetAllUsersService;

@Controller
public class UsersController {

    @Autowired
    private GetAllUsersService getAllUsersService;

    @Autowired
    private CreateUserService createUserService;

    @GetMapping("/users")
    public String index(Model model) {
        List<User> users = getAllUsersService.getAllUsers();
        model.addAttribute("users", users);
        return "users/index";
    }

    @GetMapping("/users/create")
    public String createForm(Model model) {
        model.addAttribute("form", new CreateUserForm());
        return "users/create";
    }

    @PostMapping("/users/create")
    public String create(@ModelAttribute("form") CreateUserForm form) {

        createUserService.create(form);

        return "redirect:/users";
    }
}