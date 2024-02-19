const sonarqubeScanner = require('sonarscanner');

sonarqubeScanner({
  serverUrl: 'http://15.206.178.179:9000',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'alwaystilted',
	    'sonar.login': 'sqp_c8ea0e25736cb16935872089c458a62ed7a3bb07',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
