import { Client, Databases } from 'appwrite';

export const PROJECT_ID = '65c0818e2598512cf8ca'
export const DATABASE_ID ='65c082fda4f5e781efdd'
export const COLLECTION_ID_MESSAGES ='65c08314cdcdb2dba083'



const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c0818e2598512cf8ca');

export const databases = new Databases(client);


export default client;