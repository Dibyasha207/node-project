pipeline {
    agent any

    environment {
        // Jenkins ko build khatam hone par process kill karne se rokne ke liye
        JENKINS_NODE_COOKIE = 'dontKillMe'
    }

    stages {
        stage('Build Stage') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy Stage') {
            steps {
                sh '''
                # Sudo ke sath ubuntu user bankar PM2 ko reload ya start karein
                sudo -u ubuntu /usr/local/bin/pm2 reload myapp || sudo -u ubuntu /usr/local/bin/pm2 start index.js --name myapp
                
                # PM2 state save karein
                sudo -u ubuntu /usr/local/bin/pm2 save
                '''
            }
        }
    }
}