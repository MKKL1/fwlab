// import './KartaPrac.css'
function KartaPrac(props) {
    return (
        <table className="table table-sm">
            <thead>
            <tr className="row">
                <th className="col-sm-2" scope="col">Opis zadania</th>
                <th className="col-sm-2" scope="col">Nazwa</th>
                <th className="col-sm-2" scope="col">Data</th>
            </tr>
            </thead>
            <tbody>
            {props.dziennik.map((v, k) => {
                return (<tr className="row" key={k}>
                    <td className="col-sm-2">{v[0]}</td>
                    <td className="col-sm-2">{v[1]}</td>
                    <td className="col-sm-2">{v[2]}</td>
                </tr>)
            })}
            </tbody>
        </table>
    )
}
export default KartaPrac