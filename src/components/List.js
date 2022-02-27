import data from "./ListData.json"

function List(props) {
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}><button onClick ={() => props.updateState(item.text)}>{item.text}</button></li>
            ))}
        </ul>
    )
}

export default List;
