import './Button.css'

function Button({onClick}) {
    return (
        <div className="box">
            <button onClick={onClick}>Generate</button>
        </div>
    )
}


export default Button;