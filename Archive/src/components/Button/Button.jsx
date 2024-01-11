import Button from 'react-bootstrap/Button';

export default function Button1({onClick}){

    return(
        <Button variant="outline-danger" onClick={()=>onClick()} >Submit</Button>

    )
}
export function Button2(){
    return(

    <Button as="input" type="reset" value="Clear" />
)
}

