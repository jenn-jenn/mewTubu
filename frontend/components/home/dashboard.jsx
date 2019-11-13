import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SideNav from '../side_nav/side_nav';
import { ProtectedRoute } from '../../util/route_util';
import SelectFileContainer from '../videos/select_file_container';
import UploadContainer from '../videos/upload_container';
import { NotFound } from '../not_found';
import Homepage from './home';

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
                    <ProtectedRoute path="/upload" component={UploadContainer} />
                    <Route exact path="/" component={Homepage} />
                    <Route component={NotFound} />
                </Switch>
            </div> 
        )
    }
}
export default Dashboard;

 