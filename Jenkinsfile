pipeline {
    agent any

    environment {
        // Jenkins ko build end hone par process kill karne se rokne ke liye
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
                # 1. Purane memory instance ko poori tarah delete karein taaki cache clear ho jaye
                sudo -u ubuntu /usr/local/bin/pm2 delete myapp || true
                
                # 2. Kuch seconds ka wait karein taaki port 3000 poori tarah free ho jaye
                sleep 2
                
                # 3. Naye code ke sath fresh instance start karein (Isi workspace directory se)
                sudo -u ubuntu /usr/local/bin/pm2 start index.js --name myapp
                
                # 4. State ko save karein
                sudo -u ubuntu /usr/local/bin/pm2 save
                '''
            }
        }
    }
}