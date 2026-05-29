pipeline {

    agent any

    stages {

        stage('Build Stage') {

            steps {

                sh 'npm install'

            }
        }
        stage('Deploy Stage') {

            steps {

                sh '''

                /usr/local/bin/pm2 delete myApp || true

                /usr/local/bin/pm2 start index.js --name myApp

                /usr/local/bin/pm2 save

                '''

            }
        }
    }
}