import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
export default function InputField({type, onChange,value}){
    return(
        <div>

    <InputGroup className="mb-3" type >

        <Form.Control placeholder="NIC Number" type={type} onChange={onChange} value={value} />
    </InputGroup>

</div>
    )
}

export function TextInput({text1,text2}){
    return(
        <div>

            <h1>{text1}</h1>
            <h1>{text2}</h1>

        </div>
    )
}