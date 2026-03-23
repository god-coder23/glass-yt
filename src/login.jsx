import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'

import bac from './assets/bac.jpeg'
const Login = ({ onLogin }) => {
    const handleLogin = async () => {
        const result = await signInWithPopup(auth, provider)
        onLogin(result.user)
        window.alert(`Signed In As ${result.user.displayName}`)
        
    }
    return (
        <div className={` w-screen relative flex justify-center items-center`}>
            <img src={bac} className='h-screen object-cover w-screen blur-sm scale-110 shrink-0' alt="" />
            <button onClick={handleLogin} className='absolute hover:scale-90 cursor-pointer ring-4 ring-white/20 h-[100px] w-[300px] rounded-4xl backdrop-blur-sm bg-white/10 rounded-4xl text-white font-bold'><div>Sign With Google</div></button>
        </div>
    )
}

export default Login