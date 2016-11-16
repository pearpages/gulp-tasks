function User() {

    this.name = '';
    this.lastName = '';
}

User.prototype.getName = function () {
    return this.name;
};

User.prototype.getLastName = function () {
    return this.lastName;
};