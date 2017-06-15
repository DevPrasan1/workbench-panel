console.log("In reducers");
import { ExploreFolderAction } from '../actions';
import { StoreState } from '../types/index';
import { EXPAND_FOLDER, COLLAPSE_FOLDER } from '../constants/index';
import Folder from '../entities/Folder';

const folderTask = (folder: Folder, action: ExploreFolderAction): Folder => {
    switch (action.type) {
        case EXPAND_FOLDER:
            return {...folder, explore: true};
        case COLLAPSE_FOLDER:
            return {...folder, explore: false};
        default:
            return folder;
    }
};


const mapFolders = (folders: Array<Folder>, id: Number, action: ExploreFolderAction): Array<Folder> => {
  console.log("In Reducers" + folders);
    return folders.map((folder: Folder): Folder => {
        console.log("Hi in reducers ");
        if (folder.id === id) {
            return folderTask(folder, action);
        }

        return {...folder, folders: mapFolders(folder.folders, id, action)};
    });
};


export default (state: StoreState, action: ExploreFolderAction ): StoreState => {
    console.log("In Reducers" + action.type);
    switch (action.type) {
        case EXPAND_FOLDER:
        case COLLAPSE_FOLDER:
            return {...state, folders: mapFolders(state.folders, action.id, action)};
        default:
            return state;
    }
};
