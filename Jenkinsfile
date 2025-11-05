pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/vignesh-lnp/Devops-assesment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-jenkins-demo .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker stop docker-jenkins-demo
                    docker rm docker-jenkins-demo
                    docker run -d --name docker-jenkins-demo -p 4000:3000 docker-jenkins-demo
                '''
            }
        }
    }
}
