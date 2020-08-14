import {users} from './users';
import {styleBody, addTitle} from './dom';

styleBody();
addTitle('WebPack the power of modern JS!');

console.log(users);

const greeting = (name) => {
    console.log(`Welcome to the babel ninja: ${name}`);
}
class User {
    constructor(name,email,type){
        this.name = name;
        this.email = email;
        this.type = type;
    }

    showName(){
        console.log( this.name );
    }

    showEmail(){
        console.log( this.email );
    }

}

const admin = new User('admin', 'admin@app.com', 'admin');
admin.showName();
const user = new User('foo', 'foo@bar.com', 'user');
user.showName();
