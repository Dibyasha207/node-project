pipeline {
    agent any

    environment {
        // 1. Jenkins ko PM2 process kill karne se rokne ke liye
        JENKINS_NODE_COOKIE = 'dontKillMe'
        
        // 2. PM2 ko batane ke liye ki ubuntu user ki settings use kare (Agar ec2-user hai toh ubuntu ki jagah ec2-user likhein)
        PM2_HOME = '/home/ubuntu/.pm2'
    }

    stages {
        stage('Build Stage') {
            steps {
                // Dependencies fresh install karne ke liye
                sh 'npm install'
            }
        }

        stage('Deploy Stage') {
            steps {
                sh '''
                # Sahi path ke sath PM2 restart ya reload karein
                /usr/local/bin/pm2 reload myapp || /usr/local/bin/pm2 start index.js --name myapp
                
                # PM2 state ko save karein taaki server reboot par bhi chalta rahe
                /usr/local/bin/pm2 save
                '''
            }
        }
    }
}