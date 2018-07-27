pipeline {
  agent {
    docker {
      image 'circleci/node:8.11.3-browsers'
    }

  }
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
            sh 'npm run test-ci'
          }
        }
        stage('Lint') {
          steps {
            sh 'npm run lint'
          }
        }
      }
    }
  }
}