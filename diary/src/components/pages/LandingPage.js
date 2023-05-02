import {Link} from "react-router-dom"


const LandingPage = () => {

    return (
        <div> <h2>hello</h2>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" type="submit"> log in </button>
                </Link>

                <Link to="/register">
                    <button className="primary-button" type="submit"> register </button>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage