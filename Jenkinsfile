pipeline {
    agent any

    environment {
        // Jenkins ko build successful hone par process kill karne se rokne ke liye
        JENKINS_NODE_COOKIE = 'dontKillMe'
    }

    stages {
        stage('Build Stage') {
            steps {
                // Dependencies install karein
                sh 'npm install'
            }
        }

        stage('Deploy Stage') {
            steps {
                sh '''
                # Ubuntu user bankar isi workspace folder se PM2 ko reload ya restart karein
                sudo -u ubuntu /usr/local/bin/pm2 reload myapp || sudo -u ubuntu /usr/local/bin/pm2 start index.js --name myapp
                
                # PM2 state save karein
                sudo -u ubuntu /usr/local/bin/pm2 save
                '''
            }
        }
    }
}