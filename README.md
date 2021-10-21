#### AWS-RDS
This is an educational project.

#### Technologies used:
1. AWS RDS running MySQL
2. AWS LAMBDA
3. AWS API Gateway

#### How does it work?
- HTML form takes input params
- JS converts it to a query
- Query is passed to the AWS Lambda function throught AWS API Gateway
- LAMBDA has AWS RDS integration, it queries the database on RDS
- Response is shown on browser

Working: [Website](https://jackhax.github.io/AWS-RDS/)
