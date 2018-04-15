import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isComponentLoading, setLoadedState } from './component';

configure({ adapter: new Adapter() });

class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { status: props.status || 'loading', test: '' }
    }

    render() {
        const { status, test } = this.state;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="test">{test}</div>
            </div>
        );
    }
}
test('isComponentLoading returns true if the state is "loading"', () => {
    const testComponent = shallow(<TestComponent />);

    expect(isComponentLoading(testComponent.state())).toBe(true);
});

test('setLoadedState changes the state of the component', async () => {
    const testComponent = shallow(<TestComponent />);
    
    setLoadedState(testComponent, { test: 'foo-bar' });
    
    expect(testComponent.state('test')).toBe('foo-bar');
    expect(testComponent.state('status')).toBe('loaded');
});
