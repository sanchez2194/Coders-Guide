import React, { Component } from 'react'


const clickHandler = () => {

  

};

export default class Home extends Component {

   

    render() {
       
       
        //JSX
        return (
            <>
                <div className='home-header'>
                    <h1>Coder's Guide</h1>

                </div>
                <div className='home-container'>

                    <div className='inner-text1'>
                        <h3>New?</h3>
                        <button onClick={clickHandler} type="button" id='button1' className='btn btn-primary'>Signup</button> <br /><br /><br /><br />
                    </div>

                    <div className='inner-text2'>
                        <h3>Existing account?</h3>
                        <button onClick={clickHandler} type="button" id='button2' className='btn btn-primary'>Login</button>
                    </div>

                </div>
            </>
        );
    }

}

