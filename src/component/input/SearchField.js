//Libraries
import React, { Component } from 'react';
import TextCenterInput from './presenter/TextCenterInput';

const INTERVAL = 800;
const ENTER_KEY_CODE = 13;

class SearchField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.triggerSearch = this.triggerSearch.bind(this);
    }

    componentDidMount() {
        this.timer = null;
    }

    onChange(event) {
        clearTimeout(this.timer);
        this.setState({ value: event.target.value }, () => {
            this.timer = setTimeout(this.triggerSearch, INTERVAL);
        });
    }

    onKeyDown({ keyCode }) {
        if (keyCode === ENTER_KEY_CODE) {
            clearTimeout(this.timer);
            this.triggerSearch();
        }
    }

    triggerSearch() {
        const { value } = this.state;

        this.props.onSearch(value);
    }

    render() {
        const { value } = this.state;

        return (
            <TextCenterInput
                value={value}
                placeholder="Search gifs..."
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)}
            />
        );
    }
};

export default SearchField;