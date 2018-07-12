import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

class Display extends Component ({
    render() {
        const string = '';
        const value = this.props.data.map(function(operation, i) {
            string += operation; 
        });
        
        if(this.props.result) {
            string = this.props.result;
        }
        
        return (
            <div className="Display">
                {string}
            </div>
        );
    }
});
export default Display;