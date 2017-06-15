console.log("In components/FolderView");
import * as React from 'react';
import Folder from '../entities/Folder';
import FilesView from '../components/FilesView';
import File from '../entities/File';
import * as _ from 'lodash';


interface Props {
    folder: Folder;
    files: File;
    onExpand: () => any;
    onCollapse: () => any;
    onOpen : () => any;
    onClose: () => any;
  }

interface State {
    checkBoxId: string;
    checkBoxFileId: string;
}

class FolderView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render():   JSX.Element {
        console.log("In components/FolderView render");

        let filesView;
        if (this.props.folder.explore) {
            //console.log(this.props.folder.files['data']);
            filesView = <FilesView folders={this.props.folder.folders}  files = {this.props.folder.files}  />;
        }



        return (
            <li>
                <input
                    type="checkbox"
                    id={this.state.checkBoxId}
                    checked={this.props.folder.explore}
                    onChange={this.handleFolderExplorer}/>
                <label htmlFor={this.state.checkBoxId}>
                      {this.props.folder.name}
                </label>
                {filesView}

            </li>
        );
    }

    handleFolderExplorer = (event: any) => {
      //  console.log(this.props.onExpand);

        if (event.target.checked) {
            return this.props.onExpand();
        }

        return this.props.onCollapse();
    }


    componentWillMount() {
        console.log("in componentWillMount");
        this.setState(
          {
            checkBoxId: _.uniqueId('folder-'),

        });
    }
}

export default FolderView;
