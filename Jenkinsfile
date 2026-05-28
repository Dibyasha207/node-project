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

                echo "Current Path:"
                pwd

                echo "Files:"
                ls

                pm2 restart myapp || pm2 start index.js --name myapp

                pm2 save

                pm2 list

                '''

            }
        }
    }
}