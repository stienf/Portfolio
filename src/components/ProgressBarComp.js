import React, {Component} from 'react';
import { ProgressBar } from 'react-bootstrap';



class ProgressBarComp extends React.Component {
    constructor(props) {
      super(props);
      
    }
    progress()
    {
        var elem = document.getElementById("progressbar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
          }
        }
    }
    render() {
      return (
        <div on = {() => this.progress()}>
            <ProgressBar now={60} id="progressbar"/>
        </div>
      );
    }
    

  }

  export default ProgressBarComp;