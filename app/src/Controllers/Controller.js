import Message from "../model/Message";
import User from "../model/User";
let Realm = require('realm');
let realm = new Realm({ path: 'UserDatabase.realm', schema: [User.schema] });

// result: realm objects
export const getAllUsers = () => {
    let msg = new Message();
    try {
        msg.result = realm.objects('User');
        msg.message = 'Get all heroes successful!';
    } catch(e) {
        msg.result = [];
        msg.message = 'Get all heroes failed!';
    } finally {
        return msg;
    }
};

// result: realm object
export const getUserById = (id: number) => {
    let msg = new Message();
    let heroes = getAllUsers().result;
    let findHero = heroes.filtered(`user_id=${id}`); // return collections
    if (findHero.length == 0) {
        msg.result = null;
        msg.message = `Not found hero with id=${id}`;
    } else {
        msg.result = findHero[0];
        msg.message = `Found 1 hero with id=${id}`;
    }
    return msg;
};

const checkIfUsersExists = (id: number) => {
    let hero = getUserById(id).result;
    return hero != null;
};

export const deleteUserById = (user: User) => {
    let msg = new Message();
    if (!user) {
        msg.result = false;
        msg.message = 'Invalid hero input!';
        return msg;
    }

    let findHero = getUserById(user.user_id).result;
    if (!findHero) {
        msg.result = false;
        msg.message = `Not found hero with id=${user.user_id}`;
        return msg;
    }

    try {
        realm.write(() => {
            realm.delete(findHero);
        });
        msg.result = true;
        msg.message = `Delete hero with id=${user.user_id} successful`;
    } catch(e) {
        msg.result = false;
        msg.message = `Delete hero with id=${user.user_id} failed: ${e.message}`;
    } finally {
        return msg;
    }
};
