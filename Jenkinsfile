pipeline {
    agent {
        docker { 
            image 'node:20-alpine'  // Node.js + npm pre-installed
            args '-v /var/run/docker.sock:/var/run/docker.sock' // allow Docker commands
        }
    }

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
                    docker stop docker-jenkins-demo || true
                    docker rm docker-jenkins-demo || true
                    docker run -d --name docker-jenkins-demo -p 4000:3000 docker-jenkins-demo
                '''
            }
        }
    }
}
