import React from 'react'
import AuthButton from './AuthButton';
import AuthInput from './AuthInput'
import { TitleLogo } from './TitleLogo'

const AuthContainer = ({children}) => {
    return <div class="grid place-content-center h-2/5 w-1/4 rounded-lg bg-gray-300">
            
                <div class="mx-auto my-auto">
                <div class="flex justify-center">
                <TitleLogo/>
                </div>
                {children}
                <div class="flex justify-center text-lg text-gray-500">
                <AuthButton text="log in"/>
                
            </div>
            </div>
            
        </div>
};

export default AuthContainer
{/* <div class="mx-auto my-auto">
      <AuthInput placeholder = "  test1"/>
      <AuthInput placeholder = "  test2"/>
      <AuthInput placeholder = "  test3"/>
      <AuthInput placeholder = "  test4"/>
      <AuthInput placeholder = "  test5"/>
      <AuthInput placeholder = "  test6"/>
      </div> */}


{/* return (<div className='flex bg-gray-400 rounded-lg items-center justify-center w-2/5 h-3/5 '></div>)}*/}