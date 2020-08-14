import User from './user.js';
import Log from './logging.js';

let user = new User('Foo', 26);
console.log(user);

Log.table(user)