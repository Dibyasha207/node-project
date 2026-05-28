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

                /usr/local/bin/pm2 restart myapp || /usr/local/bin/pm2 start index.js --name myapp

                /usr/local/bin/pm2 save

                '''

            }
        }
    }
}