import * as React from 'react';
import IconsPanel from './components/IconsPanel';
import FilesTreeView from './containers/FilesTreeView';
import './App.css';

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="container">
                <IconsPanel />
                <div className="column-1">
                    <div className="css-treeview">
                        <FilesTreeView />
                    </div>
                </div>
                <div className="column-2"/>
                <div className="column-3">
                    <div className="pane-row">
                        <code id="file-content"/>

                    </div>
                    <div className="pane-row-small"/>
                    <div className="pane-row"/>
                </div>
            </div>
        );
    }
}

export default App;
