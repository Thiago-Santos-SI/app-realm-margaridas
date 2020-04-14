import {ObjectSchema} from "realm";

const UserSchema: ObjectSchema = {
    name: 'user_details',
    properties: {
        user_id: { type: 'int', default: 0 },
        user_name: 'string',
        user_contact: 'string',
        user_address: 'string',
    }
};


