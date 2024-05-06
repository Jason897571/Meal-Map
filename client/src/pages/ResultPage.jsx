import DetailResult from "../components/DetailResult";
import MapResult from "../components/MapResult";
import { useParams } from 'react-router-dom';

export default function ResultPage() {
    const { place_id } = useParams();
    
    return(
        <div className="result-container">
            <DetailResult />
            <MapResult />
        </div>
    )
}