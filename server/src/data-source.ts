import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
});
