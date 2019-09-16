import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';

const fn = (e: React.MouseEvent<SVGElement | SVGUseElement>) => {
    console.log(e);
    console.log((e.target as SVGUseElement).href);

};


ReactDOM.render(<div>
    <Icon name="Facebook"
          onClick={fn}
          onMouseLeave={() => console.log('leave')}
          onMouseEnter={() => console.log('enter')}
          onTouchStart={() => console.log('on touch start')}
          />
</div>, document.querySelector("#root"));