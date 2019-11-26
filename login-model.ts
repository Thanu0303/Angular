export class LoginModel {
    public UserName: string;
    public Password: string;

    constructor(uname, pwd)
    {
        this.UserName=uname;
        this.Password=pwd;
    }
}
