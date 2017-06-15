import File from './File';

interface Folder {
    id: Number;
    name: String;
    explore: boolean,
    folders: Array<Folder>,
    files: Array<File>,

}

export default Folder;