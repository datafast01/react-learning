export default function CoreConcept(props) {
    return <li>
        <img src={props.image} alt={props.title} srcset="" />
        <h1>{props.title}</h1>
        <p>{props.descriptio}</p>
    </li>
}