import React from 'react';
import Display from './Display';
import Button from './Button';


class Buttons extends Component ({
    render() {
        return (
            <div className="Buttons">
                {this.props.children}
            </div>
        )
    }
});
export default Buttons;