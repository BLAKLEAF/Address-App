import AWS from "aws-sdk";

AWS.config.update(<any>{
  region: "local",
  endpoint: "http://localhost:8000",
});

let dynamodb = new AWS.DynamoDB();
let docClient = new AWS.DynamoDB.DocumentClient();
let tableName = "Contacts";

export interface IContact {
  id: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  datee: string;
  phoneNumber: string;
  email: string;
  linkedin: string;
  github: string;
  category: string;
  gender: string;
}

export class Contacts {
  async createTable() {
    let params = {
      TableName: tableName,
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };
    try {
      let createdTable = await dynamodb.createTable(params).promise();
      console.log(
        "Created table. Table description JSON:",
        JSON.stringify(createdTable, null, 2)
      );
      return createdTable;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createContact(contact: IContact) {
    let params = {
      TableName: tableName,
      Item: {
        id: contact.id,
        title: contact.title,
        firstName: contact.firstName,
        middleName: contact.middleName,
        lastName: contact.lastName,
        age: contact.age,
        datee: contact.datee,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        linkedin: contact.linkedin,
        github: contact.github,
        category: contact.category,
        gender: contact.gender,
      },
      ReturnConsumedCapacity: "TOTAL",
      ReturnItemCollectionMetrics: "SIZE",
      ReturnValues: "ALL_OLD",
    };
    try {
      let createdContact = await docClient.put(params).promise();
      if (!createdContact) {
        throw "Contact Creation Failed...";
      } else {
        return createdContact;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllContacts() {
    let params = {
      TableName: tableName,
    };
    try {
      let retrievedContacts: any = await docClient.scan(params).promise();
      if (!retrievedContacts) {
        throw "Unable to retrieve Contacts...";
      } else {
        return retrievedContacts;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getContact(id: string) {
    let params = {
      TableName: tableName,
      Key: {
        id: id,
      },
    };
    try {
      let retrievedContact = await docClient.get(params).promise();
      if (!retrievedContact.Item) {
        throw "Retrieved Contact Details does not match any items in the Contact list...";
      } else {
        return retrievedContact;
      }
    } catch (error) {
      console.log(error);
      throw `Error : ${error}`;
    }
  }

  async updateContact(contact: IContact) {
    let params = {
      TableName: tableName,
      Key: {
        id: contact.id,
      },
      UpdateExpression:
        "set title= :t, firstName= :f, middleName= :m, lastName= :ls, age= :a, datee= :d, category= :c, gender= :n, linkedin = :l, github= :g, phoneNumber= :p, email = :e",
      ExpressionAttributeValues: {
        ":t": contact.title,
        ":f": contact.firstName,
        ":m": contact.middleName,
        ":ls": contact.lastName,
        ":a": contact.age,
        ":d": contact.datee,
        ":p": contact.phoneNumber,
        ":e": contact.email,
        ":g": contact.github,
        ":l": contact.linkedin,
        ":c": contact.category,
        ":n": contact.gender,
      },
      ReturnValues: "UPDATED_NEW",
    };
    try {
      let updatedContact = await docClient.update(params).promise();
      if (!updatedContact) {
        throw "Update failed...";
      } else {
        return updatedContact;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteContact(id: string) {
    let params = {
      TableName: tableName,
      Key: {
        id: id,
      },
    };
    try {
      let deletedContact = await docClient.delete(params).promise();
      if (!deletedContact) {
        throw "Delete failed...";
      } else {
        return deletedContact;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteTable() {
    let params = {
      TableName: tableName,
    };
    try {
      let deletedTable = await dynamodb.deleteTable(params).promise();
      if (!deletedTable) {
        throw "Table Deletion Failed...";
      } else {
        console.log(
          "Deleted table. Table description JSON:",
          JSON.stringify(deletedTable, null, 2)
        );
      }
      return deletedTable;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

// const contact = new Contacts();
// contact.createTable();
