import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                    {this.props.tracks.map((el) => 
                    <Track 
                        isRemoval={this.props.isRemoval}
                        onAdd={this.props.onAdd} 
                        onRemove={this.props.onRemove}
                        track={el} 
                        key={el.id} 
                    />)}
            </div>
        );
    }
}