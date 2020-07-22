/* eslint-disable */
// Ensure these env vars are in the amplify console

const awsmobile = {
    "aws_project_region": process.env.APP_DEFAULT_REGION,
    "aws_cognito_identity_pool_id": process.env.APP_IDENT_POOL_ID,
    "aws_cognito_region": process.env.APP_DEFAULT_REGION,
    "aws_user_pools_id": process.env.APP_POOL_ID,
    "aws_user_pools_web_client_id": process.env.APP_WEB_CLIENT_ID,
    "oauth": {}
};


export default awsmobile;
