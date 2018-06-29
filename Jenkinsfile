pipeline {
  agent any
  stages {
    stage('Install dependencies') {
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