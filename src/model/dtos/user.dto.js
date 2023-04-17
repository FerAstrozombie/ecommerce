class UserDto{
    constructor({nombre, apellido, email, dni, avatar, _id, admin}){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.dni = dni,
        this.avatar = avatar,
        this.id = _id,
        this.admin = admin
    }
}

export const convertUserToDto = (users) => {
    if(Array.isArray(users)){
        return users.map(user => new UserDto(user));
    } else {
        return new UserDto(users);
    }
}
export { UserDto }