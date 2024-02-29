import './API.css';
import Navbar from "./Navbar";
import { LoadAndRenderHTML, LoadAndRenderCSS, LoadAPIContent } from "./util";
import Footer from "./Footer";

function API() {
    var apiName = window.location.pathname.split('/').pop();
    var orgName = window.location.pathname.split('/')[1];

    LoadAndRenderHTML('api-landing-page', '/resources/APILandingPage/template/api-landing-page.html');
    LoadAndRenderCSS('/resources/APILandingPage/stylesheet/api-landing-page.css');
    LoadAPIContent('/resources/APIMetadata/apiMedatada.json');
    // LoadAPIContent('/apiMetadata/' + apiName);

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