import { deleteProduct } from "../../api/products"

export default function Product(props) {

    return (
        <tr>
            <td> {props.title} </td>
            <td> {props.description} </td>
            <td>
                {
                    props.imageUrl && <img src={props.imageUrl} />
                }
                
            </td>
            <td>
                <button onClick={() => props.deleteTheProduct(props.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}