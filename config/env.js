let database = {
    DATABASE_HOST: "127.0.0.1",
    DATABASE_NAME: "Dev",
    DATABASE_USERNAME: "postgres",
    DATABASE_PASSWORD: "",
    DATABASE_PORT: "",
};

let s3FilebaseUrl = "";
let accessKeyId = " ";
let secretAccessKey = "";
let region = " ";
let Bucket = "strapi-files-upload";
let origin = ["*"];
let serverPort = "1335";
switch (process.env.NODE_ENV.trim()) {
    case "DEV":
        database = {
            DATABASE_HOST: "dev-betainos-directory-pursip-a5b2.k.aivencloud.com",
            DATABASE_NAME: "dcl-cms-dev",
            DATABASE_USERNAME: "avnadmin",
            DATABASE_PASSWORD: "AVNS_O83bVZwNDPmhCWh2okC",
            DATABASE_PORT: "10496",
        };
        // s3FilebaseUrl = "";
        // accessKeyId = " ";
        // secretAccessKey = "";
        // region = " ";
        // Bucket = "strapi-files-upload";
        origin = ['http://localhost:3000', 'https://dcl-frontend-omega.vercel.app'];
        break;
    case "PROD":
        database = {
            DATABASE_HOST: "127.0.0.200",
            DATABASE_NAME: "digikvin_dream_code_labs_cms",
            DATABASE_USERNAME: "digikvin_dcl_admin",
            DATABASE_PASSWORD: "sGK,}@oOVweZ",
            DATABASE_PORT: "5432",
        };
        //  s3FilebaseUrl = " ";
        //  accessKeyId = " ";
        //  secretAccessKey = " ";
        //  region = " ";
        //  Bucket = " ";
        origin = ['http://localhost:3000', 'https://dcl-frontend-omega.vercel.app'];
        break;
    default:
        break;
}

module.exports.db = database;
module.exports.s3 = {
    s3FilebaseUrl,
    accessKeyId,
    secretAccessKey,
    region,
    Bucket,
};
module.exports.origin = origin;
module.exports.port = serverPort;
