import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideNav from '../side_nav/side_nav';
import { ProtectedRoute } from '../../util/route_util';
import SelectFileContainer from '../videos/select_file_container';
import VideoFormContainer from '../videos/upload_container';
import VideoIndexContainer from '../videos/video_index_container';
import VideoShowContainer from '../videos/video_show_container';
import Homepage from './home';
import { NotFound } from '../not_found';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="content">
                <Route path="/" component={NavBarContainer}/>
                <Route path="/" component={SideNav}/>
                <Switch>
                    <ProtectedRoute path="/selectFiles" component={SelectFileContainer} />
                    <ProtectedRoute path="/video/new" component={VideoFormContainer} />
                    <Route path="/video" component={VideoIndexContainer} />
                    <ProtectedRoute path="/video/:videoId" component={VideoShowContainer} />
                    <Route exact path="/" component={Homepage} />
                    <Route component={NotFound} />
                </Switch>
            </div> 
        )
    }
}
export default Dashboard;

 