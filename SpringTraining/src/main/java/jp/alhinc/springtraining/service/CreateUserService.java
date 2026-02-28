package jp.alhinc.springtraining.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.alhinc.springtraining.entity.User;
import jp.alhinc.springtraining.form.CreateUserForm;
import jp.alhinc.springtraining.mapper.UserMapper;

@Service
public class CreateUserService {

    @Autowired
    private UserMapper mapper;

    @Transactional
    public int create(CreateUserForm form) {

        User entity = new User();

        entity.setLoginId(form.getLoginId());
        entity.setName(form.getName());
        entity.setBranchId(form.getBranchId());
        entity.setDepartmentId(form.getDepartmentId());
        entity.setActive(true);

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        entity.setPassword(encoder.encode(form.getPassword()));

        return mapper.create(entity);
    }
}