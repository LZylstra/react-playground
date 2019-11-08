import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    //smoke test, testing if component can be rendered or not
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    //test case that renders the component and creats a human readable JSON file and compare rendered component to saved version of component
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Messages name="Messages" unread={4}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
        });

    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
        .create(<Messages name="Messages" unread={0}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});