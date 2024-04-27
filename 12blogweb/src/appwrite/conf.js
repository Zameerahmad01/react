import config from "../config/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.client);
    }

    // slug as document id use kr rhy hn 
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("appwrite :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title,  content, featuredImage, status,}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite :: updatePost :: error",error);
        }
        }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("appwrite :: deletePost :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite :: getPost :: error",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            
        } catch (error) {
            console.log("appwrite :: getPosts :: error",error);
            return false;
        }
    }

    //upload file 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite :: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("appwrite :: deleteFile :: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}


const services = new Services();    

export default services;