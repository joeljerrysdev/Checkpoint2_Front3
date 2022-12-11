import { useParams } from "react-router-dom";
import DetailCard from "../Components/DetailCard";
import { useTheme } from "../hooks/useTheme";

const Detail = () => {
  const { theme} = useTheme()

  return (
    <div className={theme} >
      <DetailCard />
    </div>
  )
}

export default Detail