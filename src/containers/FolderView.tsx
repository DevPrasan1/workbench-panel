console.log("In containers/FolderView");
import { connect, Dispatch } from 'react-redux';
import FolderView from '../components/FolderView';
import { expandFolder, collapseFolder, ExploreFolderAction } from '../actions';
import Folder from '../entities/Folder';


interface Props {
    folder: Folder;

}

const mapStateToProps = (state: any, ownProps: Props) => {
console.log("In containers/FolderView STP");
    return {
        folder: ownProps.folder,

    };
};
//used to control functions of expanding and collapsing the folders present in the directory..

const mapDispatchToProps = (dispatchFolder: Dispatch<ExploreFolderAction>, ownProps: Props) => {
console.log("In containers/FolderView DTP");
    return {
        onExpand: () => dispatchFolder(expandFolder(ownProps.folder.id)),
        onCollapse: () => dispatchFolder(collapseFolder(ownProps.folder.id)),

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FolderView);
