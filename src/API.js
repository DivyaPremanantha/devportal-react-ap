import './API.css';
import Navbar from "./Navbar";
import { LoadAndRenderHTML } from "./util";
import Footer from "./Footer";

function API() {
    var apiName = window.location.pathname.split('/').pop();
    var orgName = window.location.pathname.split('/')[1];

    LoadAndRenderHTML('/apiTemplate?orgName=' + orgName + '&apiName=' + apiName, 'api-landing-page', '/admin/assets?orgName=' + orgName + '&apiName=' + apiName);

    return (
        <>
            <div>
                <Navbar />
                <div id='api-landing-page'></div>
                <Footer />
            </div>
        </>
    )
}
export default API;