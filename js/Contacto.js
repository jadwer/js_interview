class Contacto {
    constructor(name, lastname, moLastname, age, gender, email, tel) {
        this.id = this.uid();
        this.name = name;
        this.lastname = lastname;
        this.moLastname = moLastname;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.tel = tel;
    }
    uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
}