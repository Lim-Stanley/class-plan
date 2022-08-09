import data from "./ListData.json"

const majors = new Set(['Astrophysics', 'Public Affairs', ''])
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
        <ul className = 'major-list'>
            {filteredData.map((item) => (
                <li key={item.id}><button className = 'major-name' onClick ={() => props.updateState(majors.has(item.text) ? item.text : '')}>{item.text}</button></li>
            ))}
        </ul>
    )
}

export default List;
