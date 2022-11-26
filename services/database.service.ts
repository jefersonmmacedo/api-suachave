import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  company?:mongoDB.Collection,
  account?:mongoDB.Collection,
  property?:mongoDB.Collection,
  myPlain?:mongoDB.Collection,
  plains?:mongoDB.Collection,
  payments?:mongoDB.Collection,
  favorite?:mongoDB.Collection,
  contact?:mongoDB.Collection,
  scheduling?:mongoDB.Collection,
  clientCompany?:mongoDB.Collection,
  bank?:mongoDB.Collection,
  negotiations?:mongoDB.Collection,
  paymentRent?:mongoDB.Collection,
  financer?:mongoDB.Collection,
  notification?:mongoDB.Collection,
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

                  // property
      const propertyCollection: mongoDB.Collection = db.collection(process.env.PROPERTY_COLLECTION_NAME);
      collections.property = propertyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);


            const paymentsCollection: mongoDB.Collection = db.collection(process.env.PAYMENTS_COLLECTION_NAME);
            collections.payments = paymentsCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
            const myPlainCollection: mongoDB.Collection = db.collection(process.env.MYPLAIN_COLLECTION_NAME);
            collections.myPlain = myPlainCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
            const plainsCollection: mongoDB.Collection = db.collection(process.env.PLAINS_COLLECTION_NAME);
            collections.plains = plainsCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
             // Favorite
      const favoriteCollection: mongoDB.Collection = db.collection(process.env.FAVORITE_COLLECTION_NAME);
      collections.favorite = favoriteCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      
      // Favorite
      const contactCollection: mongoDB.Collection = db.collection(process.env.CONTACT_COLLECTION_NAME);
      collections.contact = contactCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      // scheduling
      const schedulingCollection: mongoDB.Collection = db.collection(process.env.SCHEDULING_COLLECTION_NAME);
      collections.scheduling = schedulingCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      const clientCompanyCollection: mongoDB.Collection = db.collection(process.env.CLIENTCOMPANY_COLLECTION_NAME);
      collections.clientCompany = clientCompanyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const negotiationsCollection: mongoDB.Collection = db.collection(process.env.NEGOTIATIONS_COLLECTION_NAME);
      collections.negotiations = negotiationsCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
      const paymentRentCollection: mongoDB.Collection = db.collection(process.env.PAYMENTRENT_COLLECTION_NAME);
      collections.paymentRent = paymentRentCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const FinancerCollection: mongoDB.Collection = db.collection(process.env.FINANCER_COLLECTION_NAME);
      collections.financer = FinancerCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const bankCollection: mongoDB.Collection = db.collection(process.env.BANK_COLLECTION_NAME);
      collections.bank = bankCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const notificationCollection: mongoDB.Collection = db.collection(process.env.NOTIFICATION_COLLECTION_NAME);
      collections.notification = notificationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      }
  
