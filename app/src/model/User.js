
export default class User {
    user_id: number;
    user_name: string;
    user_contact: string;
    user_address: string;


    constructor(user_id = 1, user_name = '', user_address = '', user_contact = '') {
        this.user_id = user_id;
        this.user_name= user_name;
        this.user_address = user_address;
        this.user_contact = user_contact;
    }

    getRealmObject() {
        return {
            user_id: this.user_id,
            user_name: this.user_name,
            user_address: this.user_address,
            user_contact: this.user_contact,
        };
    }

    updateObjectInfo(user: any) {
        if (!user)
            return;

        user['user_name'] = this.user_name;
    }

    clone() {
        return new User(this.user_id, this.user_name, this.user_contact, this.user_address);
    }
}

const UserSchema= {
            name: 'user_details',
            properties: {
                user_id: { type: 'int', default: 0 },
                user_name: 'string',
                user_contact: 'string',
                user_address: 'string',
    }
    };

User.schema = UserSchema;

