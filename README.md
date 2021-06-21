# Campground

This project tries to build a mock of the very popular yelpcamp by Colt Steele in his popular web development course. A user can create an account and create campgrounds.

## Getting started

### Prerequisites

The following tools need to be installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

Furthermore, you need to have:

- an [Amazon Web Services](https://console.aws.amazon.com) account
- a [DockerHub](https://hub.docker.com/) account

### Clone the repository

Clone the repository on your local machine:

```
git clone https://github.com/jooankrah/Campground.git
```

### Create an S3 bucket

The application uses an S3 bucket to store the images so an AWS S3 Bucket needs to be created

#### Permissions

Save the following policy in the Bucket policy editor:

```JSON
{
 "Version": "2012-10-17",
 "Id": "Policy1565786082197",
 "Statement": [
 {
 "Sid": "Stmt1565786073670",
 "Effect": "Allow",
 "Principal": {
 "AWS": "__YOUR_USER_ARN__"
 },
 "Action": [
 "s3:GetObject",
 "s3:PutObject"
 ],
 "Resource": "__YOUR_BUCKET_ARN__/*"
 }
 ]
}
```

Modify the variables `__YOUR_USER_ARN__` and `__YOUR_BUCKET_ARN__` by your own data.

#### CORS configuration

Save the following configuration in the CORS configuration Editor:

```XML
<?xml version="1.0" encoding="UTF-8"?>
 <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
 <CORSRule>
 <AllowedOrigin>*</AllowedOrigin>
 <AllowedMethod>GET</AllowedMethod>
 <AllowedMethod>POST</AllowedMethod>
 <AllowedMethod>DELETE</AllowedMethod>
 <AllowedMethod>PUT</AllowedMethod>
 <MaxAgeSeconds>3000</MaxAgeSeconds>
 <AllowedHeader>Authorization</AllowedHeader>
 <AllowedHeader>Content-Type</AllowedHeader>
 </CORSRule>
</CORSConfiguration>
```

## Deploy

To deploy the app,

1. Install the packages for various services and build the images for the campground api and user api.

2. Update the images in the deployment files.

3. Update the env-secret file to your secrets.

4. Run the deploy.sh file in the deployments folder.

5. Update the SERVER_URL variable in Config.js file inside the src folder of frontend service to the value of LoadBalancer Ingress of the reverseproxy service.

The variables below need to be added to your environment:

```
  AWS_BUCKET
  AWS_KEY
  AWS_PROFILE
  AWS_REGION
  AWS_SECRET
  DB_HOST
  DB_NAME
  DB_PASSWORD
  DB_USERNAME
  JWT_SECRET
```

The application is now running at http://localhost:8080
