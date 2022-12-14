import React from 'react';
import './Playlist.css'
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e) {
        const name = e.target.value;
        this.props.onNameChange(name);
    }
    render() {
        return (
            <div className="Playlist">
                <input 
                    onChange={this.handleNameChange}
                    value={this.props.playlistName} 
                    // defaultValue={ 'New Playlist' } 
                />
                <TrackList
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                    tracks={this.props.playlistTracks} />
                <button 
                    onClick={this.props.onSave}
                    className="Playlist-save"
                >SAVE TO SPOTIFY</button>
            </div>
        );
    }
}