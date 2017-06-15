console.log("In Actions");
import * as constants from '../constants';

export interface ExpandFolder {
    type: constants.EXPAND_FOLDER;
    id: Number;
}

export interface CollapseFolder {
    type: constants.COLLAPSE_FOLDER;
    id: Number;
}



export type ExploreFolderAction = ExpandFolder | CollapseFolder;

export function expandFolder(id: Number): ExpandFolder {
    return {
        type: constants.EXPAND_FOLDER,
        id,
    };
}

export function collapseFolder(id: Number): CollapseFolder {
    return {
        type: constants.COLLAPSE_FOLDER,
        id,
    };
}
