import { useParams } from "react-router-dom"

const Params = () => {
    
     //params is packaged up via the url (path variables) and we can destructure is just like props
    const { numOrGreeting, colorOne, colorTwo } = useParams()

    return (
        <div>
            <h2>Welcome</h2>

            {
                !isNaN(numOrGreeting) ? //<= is this value a number?
                    <p>This is a number: {numOrGreeting}</p> : //<= display a number...:not? display a greeting
                    <p style={colorOne && colorTwo ? { color: colorOne, backgroundColor: colorTwo } : null}>
                        This is a greeting: {numOrGreeting}
                    </p>
            }

        </div>
    )
}

export default Params