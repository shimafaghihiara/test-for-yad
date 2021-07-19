import React from 'react';
import RightSideBar from "../RightSideBar/RightSideBar";
import Main from "../Main/Main";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import useStyle from './Style';
import Divider from '@material-ui/core/Divider';
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MoviesSeries from "../MoviesSeries/MoviesSeries";
import CommentList from "../CommentList/CommentList";
import ComentList from "../ComentList/ComentList";
import Comentt from "../Comments/Comments";
import Movies from "../Movies/Movies";
import Weblog from "../Weblog/Weblog";
import LeftSideBarWeblog from "../Weblog/LeftSideBarWeblog/LeftSideBarWeblog";


const Layout = () => {
    const classes=useStyle();
    return (
        <Router >
            <div className={classes.root} >
                <MainMenu/>
            <Switch >
                <Route path={"/Movies/:mId"} component={Movies}/>
                <Route path={"/MoviesSeries"} >
                    <MoviesSeries/>
                </Route>
                <Route path={"/weblog"} >
                    <Weblog/>
                </Route>

                <Route path={"/CommentList"} >
                    <LeftSideBar/>
                    <Divider orientation={"vertical"} className={classes.divider1} />
                    <Comentt/>
                    <Divider orientation={"vertical"} className={classes.divider2} />
                    <RightSideBar/>
                </Route>
                <Route path={"/ComentList"} >
                    <LeftSideBar/>
                    <Divider orientation={"vertical"} className={classes.divider1} />
                    <ComentList/>
                    <Divider orientation={"vertical"} className={classes.divider2} />
                    <RightSideBar/>
                </Route>
                <Route path={"/"} >
                    <LeftSideBar/>
                    <Divider orientation={"vertical"} className={classes.divider1} />
                    <Main/>
                    <Divider orientation={"vertical"} className={classes.divider2} />
                    <RightSideBar/>
                </Route>

            </Switch>
                <Footer/>
            </div>

        </Router>

    );
};

export default Layout;