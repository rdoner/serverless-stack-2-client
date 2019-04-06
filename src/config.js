const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-rkv03hh01hhc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7a47phu477.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UrKMJIbkO",
    APP_CLIENT_ID: "28ho4cubv980nafgnm0set5qs6",
    IDENTITY_POOL_ID: "us-east-1:c87b2907-88ef-481e-b554-58e9ac3b37db"
  },
  STRIPE_KEY: "pk_test_2oFuYmeSTXsb0Ipd4WcrMN7s00fl6pCZle"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-15byo630ciyr0"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v7ukghensh.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UMMlw7epA",
    APP_CLIENT_ID: "6s35mt51pm5cefq09ejjb28sob",
    IDENTITY_POOL_ID: "us-east-1:a483d893-5fcc-44a9-a180-1629baec986a"
  },
  STRIPE_KEY: "pk_test_2oFuYmeSTXsb0Ipd4WcrMN7s00fl6pCZle"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
