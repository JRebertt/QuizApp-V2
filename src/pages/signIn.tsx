import GoogleButton from 'react-google-button'
export function SignIn()  {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <GoogleButton 
      type='dark'
      onClick={() => console.log("Clicked")}
      />
    </div>
  )
}