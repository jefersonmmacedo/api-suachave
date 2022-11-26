import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  company?:mongoDB.Collection,
  account?:mongoDB.Collection,
 } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

      // company
      const companyCollection: mongoDB.Collection = db.collection(process.env.COMPANY_COLLECTION_NAME);
      collections.company = companyCollection;
      console.log(`Successfully connected to database: ${db.databaseName} and collection: ${companyCollection.collectionName}`);

            // client
            const accountCollection: mongoDB.Collection = db.collection(process.env.ACCOUNT_COLLECTION_NAME);
            collections.account = accountCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      }
  
