import { users } from "./db";

const resolvers = {
    Query: {
        hello: () => {return "Hello graphQL!"}
    },
    User: {
        user: (parent, { id }, context, info) => {
            return users.find(user => user.id === id);
        },
        users: (parent, args, context, info) => {
            return users;
        }
    }
};

export default resolvers;