# Automated CI/CD with Docker, AWS, and NGINX.

## Automated Docker Image Building and Pushing to Docker Hub:

- Set up a pipeline to automatically build Docker images.
- Configured the pipeline to push these images to Docker Hub whenever changes are detected in the main branch.

## Enhanced Pipeline for Amazon ECR:

- Integrated AWS credentials into GitHub repository secrets.
- Updated the pipeline to push Docker images to Amazon ECR instead of Docker Hub.

## Deployment to EC2 Instance:

- Modified the pipeline to deploy the Docker image directly to an EC2 instance.
- Ensured a seamless transition from code to deployment.

## Pipeline for Unit Testing and Building:

- Created a pipeline to run unit tests and build the project whenever a pull request is opened.

## Vulnerability Scanning Integration:

- Incorporated a vulnerability scanning step into the pipeline to enhance security.

## Enforced GitHub Branch Rules:

- Implemented branch rules on the main branch that require pull request approvals and status checks to maintain code quality.

## Frontend Application Pipeline:

- Developed a pipeline to build the frontend application.
- Deployed the frontend to an NGINX server, ensuring that the latest version is always available to users.
