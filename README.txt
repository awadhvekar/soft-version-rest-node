Steps to Deploy project:

Nodejs (Server - Backend):
	Open Project folder in terminal / command prompt.
	Run command "npm install" (It will install all required npm packages for server/ nodejs).
	Run command "node server.js" (It will run server/ REST APIs).

Notes:
	I have created both POST and GET Web Services/ APIs performing the same task.

	For GET API, I've used query parameter to pass software versions.
	API: http://localhost:8000/GetApiForSoftwareVersionInterpretation/1.0.0/1.0.1
	Format- http://localhost:8000/GetApiForSoftwareVersionInterpretation/version1/version2

	For POST API,
	API Link: http://localhost:8000/postApiForSoftwareVersionInterpretation
    Data Body (JSON):
	{
	    "version1": "1.1.0",
	    "version2": "1.2.0"
    }