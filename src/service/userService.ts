

let users: User[] = [];
export default class UserService{

    async saveUser(input:User):Promise<number>{
        users.push(input);
        return input.id;
    }
    async getUser(id:number){
        const user = await users.find(user => user.id === id);
        return user;
    }
    async deleteUser(id:number):Promise<boolean>{
        const index = users.findIndex(user => user.id === id);

        if (index !== -1) {
          users.splice(index, 1);
          return true;
        }else{
            return false;
        }

    }
}
