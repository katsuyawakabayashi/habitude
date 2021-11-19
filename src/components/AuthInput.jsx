import React from 'react'

const AuthInput = (props) => {
    return (
        <div className='pt-2 pb-100 mx-auto my-auto'>
            <input
                class="rounded-lg focus:outline-none text-lg placeholder-gray-500"
                type="text"
                placeholder={props.placeholder}
            />
            
        </div>
    )
}

export default AuthInput
