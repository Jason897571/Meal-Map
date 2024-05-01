import ListResult from "../components/ListResult";
import MapResult from "../components/MapResult";


export default function ResultPage() {
    return(
        <div className="result-container">
            <ListResult />
            <MapResult />
        </div>
    )
}