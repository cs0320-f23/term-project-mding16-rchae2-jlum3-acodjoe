import React from 'react';
import {GoogleLogin} from 'react-google-login'

const clientID = "10157077496-ga07pafgh9f1sknlealncttjv4v0f9pa.apps.googleusercontent.com"



function Login(){
    const onSuccess = (res: any) => {
        console.log("SUCCESS with user: ", res.profileObj)
    }
    
    const onFailure = (res: any) => {
        console.log("FAILED: ", res)
    }
    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn= {true}
            />
        </div>
    )
}

export default Login;