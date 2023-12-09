import  { FC } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { IOption, IShippingFields} from '../App.interface'
import   '../pp/style.css'

const SignUp: FC = () => {
   const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
    control,
    } = useForm <IShippingFields>({
        mode: 'onChange',
    })

    const onSubmit: SubmitHandler<IShippingFields> = date => {
        console.log( )
        reset()
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '66%', margin: '0 auto'}}>
             <div>
               <input 
                  { ... register('name', {
                    required: 'Name is required field!',
                     })}
                     placeholder='name'
                />
                 {errors?.name && (
                   <div style={{ color: 'red ', marginBottom: 10 }}>{errors.name.message}</div>
                  )}
             </div>  
             <div>
                <input 
                { ... register('email', {
                    required: 'Email is required field!',
                    pattern: {
                        value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter valid email!',
                    },
                })}
                 placeholder='email' 
                />
                {errors?.email && (
                <div style={{ color: 'red ', marginBottom: 10 }}>{errors.email.message}</div>
                )}
            </div>
  <button>Send</button>
</form>
        </div>
    )
}
 export default SignUp