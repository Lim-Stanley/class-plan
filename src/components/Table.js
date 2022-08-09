const Table = ({year, classes}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <th className = 'year' colSpan={3}>Year {year}</th>
                </tr>
                <tr>
                    <th>Fall Quarter</th>
                    <th>Winter Quarter</th>
                    <th>Spring Quarter</th>
                </tr>
                <tr>
                    {classes[0].map((clas) => (<td>{clas}</td>))}
                </tr>
                <tr>
                    {classes[1].map((clas) => (<td>{clas}</td>))}
                </tr>
                <tr>
                    {classes[2].map((clas) => (<td>{clas}</td>))}
                </tr>
            </tbody>
        </table>
    )
}
export default Table