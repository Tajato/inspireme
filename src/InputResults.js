import './InputResults.css';
function InputResults({activity}) {
    if (!activity) {
        return <div></div>
    }
return (
    <div className='results-box' >
        <div >
    <h3>{activity.activity}</h3>
    <p>This activity could invovle {activity.participants} people.</p>
    <p>This activity has a price of {activity.price}/1.</p>
    </div>
    </div>
);
}


export default InputResults;