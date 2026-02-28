package jp.alhinc.springtraining.form;

import java.io.Serializable;

public class CreateUserForm implements Serializable {

    // ログインID
	private String loginId;

    // 氏名
    private String name;
    
    // パスワード
    private String password;

    // 確認用パスワード
    private String passwordConfirm;
    
    // 支店ID
    private Integer branchId;

    // 部署ID
    private Integer departmentId;

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }

    public Integer getBranchId() {
        return branchId;
    }

    public void setBranchId(Integer branchId) {
        this.branchId = branchId;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }
}
