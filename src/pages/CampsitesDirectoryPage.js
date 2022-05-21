import { Container} from "reactstrap";
import CampsitesList from "../features/campsites/CampsiteLists";
import SubHeader from "../components/SubHeader";

const CampsitesDirectoryPage = () => {
  
    return(
        <Container>
            <SubHeader current="Durrent" />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;