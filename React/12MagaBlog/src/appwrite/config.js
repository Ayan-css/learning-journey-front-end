import conf from "../conf/conf";
import {Client, Databases, Storage, Query, ID} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDBid,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
        }

    }
    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDBid,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
        }

    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDBid,
                conf.appwriteCollectionId,
                slug,
                
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
            return false
        }

    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDBid,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDBid,
                conf.appwriteCollectionId,
                queries,
                100,
                0
            )
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
            return false
        }
    }

    //?file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
            return false
        }
    }
    async deletFile(file){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default Service