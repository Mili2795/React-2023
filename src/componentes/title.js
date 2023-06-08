
import "./title.css";

export default function Title ({nombre}) {
    // const nombre = "Mili";


    return (
        <h1 className="title">¡Bienvenido, {nombre}!</h1>
    )
}