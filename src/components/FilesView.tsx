console.log("In components/FilesView");

import * as React from 'react';
import Folder from '../entities/Folder';
import File from '../entities/File';
import FolderView from '../containers/FolderView';

export interface Props {
    folders: Array<Folder>;
    files?: Array<File>;
}

function FilesView({folders, files}: Props) {
  //console.log("hello In components/FilesView" + folders);
    const items = folders.map((folder, index) =>
        <FolderView folder={folder} key={index}/>
    );

    if (files) {
        files.forEach((file, index) => items.push(<li key = {folders.length +index} >{file.name}</li>));
    }

    if (items.length) {
        return <ul>{items}</ul>;
    } else {
        return <ul/>;
    }
}




export default FilesView;
