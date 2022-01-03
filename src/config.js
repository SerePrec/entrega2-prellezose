import path, { dirname } from "path";
import { fileURLToPath } from "url";

if (process.env.NODE_ENV !== "production") {
  const { config } = await import("dotenv");
  config();
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  PORT: process.env.PORT || 8080,
  uploadsImg: {
    path: path.join(__dirname, "public", "img", "productos")
  },
  fileSystemDb: {
    path: path.join(__dirname, "..", "DB"),
    messagesFile: "mensajes.json",
    productsFile: "productos.json",
    cartsFile: "carritos.json"
  },
  mariaDb: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "ecommerce",
      charset: "utf8mb4"
    }
  },
  clearDb: {
    client: "mysql",
    connection: {
      host: process.env.CLEARDB_HOST,
      user: process.env.CLEARDB_USER,
      password: process.env.CLEARDB_PWD,
      database: process.env.CLEARDB_DB,
      charset: "utf8mb4"
    }
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "..", "DB", "ecommerce.sqlite")
    },
    useNullAsDefault: true
  },
  mongoDb: {
    connectionString: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true, //No necesario desde mongoose 6
      useUnifiedTopology: true, //No necesario desde mongoose 6
      serverSelectionTimeoutMS: 5000
    }
  },
  mongoDbAtlas: {
    connectionString: process.env.MONGODB_ATLAS_URI,
    options: {
      useNewUrlParser: true, //No necesario desde mongoose 6
      useUnifiedTopology: true, //No necesario desde mongoose 6
      serverSelectionTimeoutMS: 5000
    }
  }
};

export default config;
