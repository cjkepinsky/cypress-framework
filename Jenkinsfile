pipeline {
    agent {
        docker {
            image 'cypress/included:15.15.0'
            args '-v /tmp:/tmp'
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Quality checks') {
            steps {
                sh 'npm run check'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npm run demo:run'
            }
        }
    }
    post {
        always {
            sh 'if [ -d cypress/reports ] && find cypress/reports -maxdepth 1 -name "mochawesome*.json" -print -quit | grep -q .; then npm run generate-report; fi'
            archiveArtifacts artifacts: 'cypress/reports/**/*,cypress/videos/**/*.mp4,cypress/screenshots/**/*.png', allowEmptyArchive: true
            publishHTML(target: [
                allowMissing: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'output.html',
                reportName: 'Cypress Test Report'
            ])
        }
    }
}