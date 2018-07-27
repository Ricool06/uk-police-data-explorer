pipeline {
  agent {
    docker {
      image 'circleci/node:8.11.3-browsers'
    }

  }
  stages {
    stage('Build & Lint') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm install'
          }
        }
        stage('Lint') {
          steps {
            sh 'npm run lint'
          }
        }
      }
    }
    stage('Unit Test') {
      steps {
        sh 'npm run test-ci'
      }
    }
  }
}