console.log("In conatainers/FilesTreeView");
import { connect } from 'react-redux';
import {StoreState} from '../types/index';
import FilesView from '../components/FilesView';

const mapStateToProps = (state: StoreState) => {
   console.log("In containers/FilesTreeView"+state.folders);
    return {
        folders: state.folders,

    };
};


export default connect(
    mapStateToProps
)(FilesView);
