# Flask App with CI/CD Pipeline

This project is a simple Flask web app with a fully integrated CI/CD pipeline using GitHub Actions and Docker. The pipeline automates testing with pytest and deploys the app to Docker Hub. Through this project, I learned how to automate the deployment process for a web app using Docker and GitHub Actions.

## What I Learned

### Flask Basics:
- I built a basic Flask app with routes, templates, and static files.
- The app serves a simple HTML page and supports basic static file serving for CSS and JavaScript.

### CI/CD Pipeline:
- I created a GitHub Actions workflow to automate testing using pytest.
- Set up Docker to containerize the Flask app and configured GitHub Actions to automatically build the Docker image and push it to Docker Hub.
- I learned how to use GitHub Secrets to store sensitive data like Docker credentials and how to reference them in the pipeline.

### Debugging and Error Resolution:
- I encountered errors related to file paths when trying to push static files to GitHub. I fixed this by ensuring that all files were correctly staged and committed.
- Another challenge was building the Docker image with the correct paths and configurations. After refining the Dockerfile and fixing the build context, the app was successfully containerized.
  
### Testing and Deployment:
- I used pytest for testing the Flask app, ensuring the correctness of app functionality before deployment.
- The pipeline now automatically runs tests on each commit and deploys the updated Docker image to Docker Hub, streamlining the process of updating the app in a production environment.

### Docker and GitHub Actions:
- I learned the process of writing a Dockerfile to containerize a Flask app.
- Integrated Docker Hub for storing the image and used GitHub Actions to handle continuous integration and continuous deployment (CI/CD).
- The pipeline ensures that the Docker image is always up-to-date and deployable.

## Thank You

Thank you for taking the time to explore this project! I hope this helps you understand how to automate testing, deployment, and containerization for a web application using Docker, GitHub Actions, and Flask.
