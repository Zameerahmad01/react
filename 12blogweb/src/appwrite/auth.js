import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    Account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.Account = new Account(this.client);
    }

    async createAccount ({email,password,name}) {
        try {
             const userAccount = await this.Account.create(ID.unique(), email, password, name);
        if (userAccount){
            // call another method
            return this.login({email, password});
        }
        else{
            return userAccount;
        }
        } catch (error) {
            throw error;
        }
        
       
    }

    async login({email, password}){
        try {
            return await this.Account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.Account.get();
        } catch (error) {
            console.log("appwrite :: currentuser :: error ", error)
        }

        // agar koi user na mila to 
        return null;
    }

    async logOut () {
        try {
            return this.Account.deleteSessions();
        } catch (error) {
            console.log("appwrite :: logout :: error",error);
        }
    }

}

const authService = new AuthService();

export default authService