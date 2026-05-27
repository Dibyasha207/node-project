pipeline {
  agent any

  stages {

      stage('Build') {
          steps {
              sh 'npm install'
          }
      }

      stage('Run') {
          steps {
              sh 'node index.js'
          }
      }

      stage('Test') {
          steps {
              sh 'node index.js'
          }
      }
  }
}
