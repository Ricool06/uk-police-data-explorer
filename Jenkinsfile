pipeline {
  agent {
    docker {
      image 'node:8.11.3'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test & Lint') {
      parallel {
        stage('Unit Test') {
          steps {
            sh 'ng test --watch=false'
          }
        }
        stage('Lint') {
          steps {
            sh 'ng lint'
          }
        }
      }
    }
  }
}