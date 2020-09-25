const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (request, response) => {
    response.json({error:false, message: "Node App and Express is running"});
});

app.listen(8000, () => {
    console.log("App is running on Port 8000");
});


/*
    http://localhost:8000/postApiForSoftwareVersionInterpretation
    {
	    "version1": "1.1.0",
	    "version2": "1.2.0"
    }
*/
app.post('/postApiForSoftwareVersionInterpretation', async(request, response) => {
    let queryResponseArray = [];
    let jsonObjectOutput = {};
    let stausCode;
    let accessToken = null;

    if(!request.body.version1 || !request.body.version2)
    {
        jsonObjectOutput['error'] = true;
        jsonObjectOutput['message'] = "Version1 or Version is missing.Please pass correct input parameters.";
        jsonObjectOutput['response'] = 'Correct input format is {"version1": "1.1.0","version2": "1.2.0"}';
        response.status(400).json(jsonObjectOutput);
        return;
    }

    try
    {
        var versionArray1 = request.body.version1.split('.');
        var versionArray2 = request.body.version2.split('.');
        var forLoopLength = versionArray1.length < versionArray2.length ? versionArray1.length : versionArray2.length;
        for(i=0; i < forLoopLength; i++)
        {
            if(parseInt(versionArray1[i]) > parseInt(versionArray2[i]))
            {
                jsonObjectOutput['response'] = "After";
                // console.log("After");
                break;
            }
            else if(parseInt(versionArray1[i]) < parseInt(versionArray2[i]))
            {
                jsonObjectOutput['response'] = "Before";
                // console.log("Before");
                break;
            }
            else
            {
                if(i == forLoopLength - 1)
                {
                    if(forLoopLength < versionArray1.length && parseInt(versionArray1[forLoopLength]) == 0)
                    {
                        jsonObjectOutput['response'] = "Equal";
                        // console.log("Equal");
                        break;
                    }
                    else if(forLoopLength < versionArray1.length && parseInt(versionArray1[forLoopLength]) > 0)
                    {
                        jsonObjectOutput['response'] = "After";
                        // console.log("After");
                        break;
                    }
                    if(forLoopLength < versionArray2.length && parseInt(versionArray2[forLoopLength]) == 0)
                    {
                        jsonObjectOutput['response'] = "Equal";
                        // console.log("Equal");
                        break;
                    }
                    else if(forLoopLength < versionArray2.length && parseInt(versionArray2[forLoopLength]) > 0)
                    {
                        jsonObjectOutput['response'] = "Before";
                        // console.log("Before");
                        break;
                    }
                    jsonObjectOutput['response'] = "Equal";
                    // console.log("Equal");
                    break;
                }
                continue;
            }
        }

        jsonObjectOutput['error'] = false;
        jsonObjectOutput['message'] = "API executed Successfully.";
        stausCode = 200;
    }
    catch(exception)
    {
        console.log("Exception occurred while running '/postApiForSoftwareVersionInterpretation' API: " + exception);
        jsonObjectOutput['error'] = true;
        jsonObjectOutput['message'] = "Exception occurred";
        jsonObjectOutput['response'] = exception;
        stausCode = 400;
    }
    finally
    {
        response.status(stausCode).json(jsonObjectOutput);
    }
});


/*
    http://localhost:8000/GetApiForSoftwareVersionInterpretation/1.0.0/1.0.1
*/
app.get('/GetApiForSoftwareVersionInterpretation/:version1/:version2', async(request, response) => {
    let queryResponseArray = [];
    let jsonObjectOutput = {};
    let stausCode;
    let accessToken = null;

    if(!request.params.version1 || !request.params.version2)
    {
        jsonObjectOutput['error'] = true;
        jsonObjectOutput['message'] = "Version1 or Version is missing.Please pass correct input parameters.";
        jsonObjectOutput['response'] = 'Correct input format is {"version1": "1.1.0","version2": "1.2.0"}';
        response.status(400).json(jsonObjectOutput);
        return;
    }

    try
    {
        var versionArray1 = request.params.version1.split('.');
        var versionArray2 = request.params.version2.split('.');
        var forLoopLength = versionArray1.length < versionArray2.length ? versionArray1.length : versionArray2.length;
        for(i=0; i < forLoopLength; i++)
        {
            if(parseInt(versionArray1[i]) > parseInt(versionArray2[i]))
            {
                jsonObjectOutput['response'] = "After";
                // console.log("After");
                break;
            }
            else if(parseInt(versionArray1[i]) < parseInt(versionArray2[i]))
            {
                jsonObjectOutput['response'] = "Before";
                // console.log("Before");
                break;
            }
            else
            {
                if(i == forLoopLength - 1)
                {
                    if(forLoopLength < versionArray1.length && parseInt(versionArray1[forLoopLength]) == 0)
                    {
                        jsonObjectOutput['response'] = "Equal";
                        // console.log("Equal");
                        break;
                    }
                    else if(forLoopLength < versionArray1.length && parseInt(versionArray1[forLoopLength]) > 0)
                    {
                        jsonObjectOutput['response'] = "After";
                        // console.log("After");
                        break;
                    }
                    if(forLoopLength < versionArray2.length && parseInt(versionArray2[forLoopLength]) == 0)
                    {
                        jsonObjectOutput['response'] = "Equal";
                        // console.log("Equal");
                        break;
                    }
                    else if(forLoopLength < versionArray2.length && parseInt(versionArray2[forLoopLength]) > 0)
                    {
                        jsonObjectOutput['response'] = "Before";
                        // console.log("Before");
                        break;
                    }
                    jsonObjectOutput['response'] = "Equal";
                    // console.log("Equal");
                    break;
                }
                continue;
            }
        }

        jsonObjectOutput['error'] = false;
        jsonObjectOutput['message'] = "API executed Successfully.";
        stausCode = 200;
    }
    catch(exception)
    {
        console.log("Exception occurred while running '/GetApiForSoftwareVersionInterpretation' API: " + exception);
        jsonObjectOutput['error'] = true;
        jsonObjectOutput['message'] = "Exception occurred";
        jsonObjectOutput['response'] = exception;
        stausCode = 400;
    }
    finally
    {
        response.status(stausCode).json(jsonObjectOutput);
    }
});