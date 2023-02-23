import UserService from "../src/service/userService";
import expect from "expect";
describe('User Service save function', () => {
    it('adds a new user', async () => {
        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            dob: "11/11/2022"
        };

        let userservice = new UserService();
        expect(await userservice.saveUser(user)).toEqual(user.id);
    });
});

describe('User Service get function', () => {
    it('It Should return new user', async () => {
        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            dob: "11/11/2022"
        };

        let userservice = new UserService();
        expect(await userservice.getUser(1)).toEqual(user);
    });
});
describe('User Service delete user function', () => {
    it('it should delete user by id', async () => {
        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            dob: "11/11/2022"
        };

        let userservice = new UserService();
        expect(await userservice.deleteUser(1)).toEqual(true);
    });
});
describe('User Service delete user function', () => {
    it('it should return false ', async () => {
        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            dob: "11/11/2022"
        };

        let userservice = new UserService();
        expect(await userservice.deleteUser(1)).toEqual(false);
    });
});

describe('User Service get function', () => {
    it('it should return undefined', async () => {
        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            dob: "11/11/2022"
        };

        let userservice = new UserService();
        expect(await userservice.getUser(1)).toEqual(undefined);
    });
});