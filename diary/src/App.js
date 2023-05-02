import {lazy, Suspense} from "react"
import {Routes, Route} from "react-router-dom"
const LandingPage = lazy(() => import('./components/pages/LandingPage'))
const LoginPage = lazy(() => import('./components/pages/LoginPage'))
const RegisterPage = lazy(() => import('./components/pages/RegisterPage'))
const HomePage = lazy(() => import('./components/pages/HomePage'))

const App = () => {
    return(
    <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/home"element={<HomePage/>}/>
        </Routes>
        </Suspense>
    )
}
export default App;