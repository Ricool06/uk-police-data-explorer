pipeline {
  agent {
    docker {
      image 'circleci/node:8.11.3-browsers'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
  }
}