import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideNav from '../side_nav/side_nav';
import { ProtectedRoute } from '../../util/route_util';
import SelectFileContainer from '../videos/select_file_container';
import VideoFormContainer from '../videos/upload_container';
import VideoIndexContainer from '../videos/video_index_container';
import VideoItemContainer from '../videos/video_item_container';
import Homepage from './home';
import { NotFound } from '../not_found';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="main">    
                <Route path="/" component={NavBarContainer}/>
                <Route path="/" component={SideNav}/>
                <div className="content">
                    <Switch>
                        <ProtectedRoute path="/selectFiles" component={SelectFileContainer} />
                        <ProtectedRoute path="/videos/new" component={VideoFormContainer} />
                        <Route path="/videos/:videoId" component={VideoItemContainer} />
                        <Route path="/videos" component={VideoIndexContainer} />
                        <Route path="/search" component={VideoIndexContainer} />
                        <Route exact path="/" component={VideoIndexContainer} />
                        <Route component={NotFound} />
                    </Switch>
                </div> 
            </div>
        )
    }
}
export default Dashboard;

 