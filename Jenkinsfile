pipeline {
    agent any

    environment {
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
                # 1. Jenkins ke naye code ko aapke chalne wale app folder mein copy karein
                # (Yahan '/home/ubuntu/myapp-folder' ki jagah apna asli path likhein)
                sudo cp -r * /home/ubuntu/myapp-folder/
                
                # 2. Us folder ke andar jayein jahan aapka app chalta hai
                cd /home/ubuntu/myapp-folder/
                
                # 3. Dependencies install karein naye folder mein
                sudo -u ubuntu npm install
                
                # 4. Ab PM2 ko naye code ke sath reload ya restart karein
                sudo -u ubuntu /usr/local/bin/pm2 reload myapp || sudo -u ubuntu /usr/local/bin/pm2 start index.js --name myapp
                sudo -u ubuntu /usr/local/bin/pm2 save
                '''
            }
        }
    }
}