import {SubmitHandler, useForm} from 'react-hook-form'
import { IShippingFields } from './App.interface';
import { useEffect } from 'react';


function App() {
 const {register, 
  handleSubmit, 
  formState: {errors},
  reset,
  watch,
  
}= useForm<IShippingFields>({
  mode: 'onChange',

})
  
const onSubmit:SubmitHandler<IShippingFields> =data => {  
    alert(`your name ${data.name}`)
    reset ()
    }
  useEffect(() => {
    const subscription = watch((value, {name, type }) => console.log (value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

   return (
      <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                {...register('name', {
                    required: 'Name is require field'!,
                    })} 
                    placeholder='Name'
                />
                {errors?.name && (
                    <div style={{color: 'red'}}>{errors.name.message}</div>
                )}
                <input 
                {...register('email', {
                    required: 'Email is require field!',
                    pattern: {
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter valid email!',
                    },
                    })} 
                    placeholder='Email'
                />
                {errors?.email && (
                    <div style={{color: 'red'}}>{errors.email.message}</div>
                )}
                <div>
                  <button>Send</button>
                </div>
              
              </form>
       </div> );
}

export default App;
