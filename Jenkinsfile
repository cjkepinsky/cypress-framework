pipeline {
    agent {
        docker {
            image 'cypress/browsers:node18.12.0-chrome107-ff106'
            args '-v /tmp:/tmp'
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npm run demo-run'
            }
        }
        stage('Generate Report') {
            steps {
                sh 'npm run generate-report'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'cypress/reports/html/*.html', allowEmptyArchive: true
                    publishHTML(target: [
                        reportDir: 'cypress/reports/html',
                        reportFiles: 'mochawesome.html',
                        reportName: 'Cypress Test Report'
                    ])
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4,cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}