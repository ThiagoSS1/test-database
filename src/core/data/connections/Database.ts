import { Connection, createConnection } from "typeorm";

export default class Database {
    private static connection: Connection;

    public getConnection(): Connection {
        if (Database.connection == null || Database.connection === undefined) {
            throw new Error("connection is not open");
        }
        return Database.connection
    }

    public async openConnection(): Promise<void> {
        if (Database.connection == null || Database.connection === undefined) {
            try {
                Database.connection = await createConnection();
            } catch (error) {
                console.error("Connection error", error);
            }
        }
    }
}