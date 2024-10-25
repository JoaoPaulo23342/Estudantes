import './Lista.css'

const Lista = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default Lista