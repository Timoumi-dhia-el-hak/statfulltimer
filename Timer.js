import React, { Component } from 'react'

export default class Timer extends Component {
    render() {
        let seconds = 60000000;
        let getsecond=(''+Math.floor((seconds / 1000) % 60)).padStart(2,0);
        let getminute=(''+Math.floor((seconds / 1000 / 60) % 60)).padStart(2,0);
        let gethour=(''+Math.floor((seconds / (1000 * 60 * 60)) % 24)).padStart(2,0);
        
        
        return (
            
            <div>
              
        <div><span class="timer">{gethour}:</span>     <span class="timer">{getminute}:</span>     <span class="timer">{getsecond}</span></div>
        <div><span  class="label">Hour</span>   <span class="label">minute</span>  <span class="label">second</span></div>
        <button>start</button> <button>reset</button>
        </div>
        )
    }
}

