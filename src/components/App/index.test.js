import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import nock from 'nock';
import 'babel-polyfill';
import 'es6-promise';
import 'isomorphic-fetch';
import App from '../App';

const event = { preventDefault: () => {} };
configure({ adapter: new Adapter() });
describe('App component', () => {
    beforeAll(() => {
        nock('http://react-cdp-api.herokuapp.com/movies')
            .get('?search=Adventure&searchBy=genre')
            .reply(200, {
                total: 3
            });
    });
    it('App: renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('handleSubmit: should populate state.moviesList', async done => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        expect(instance.state.moviesList.total).toBe(0);
        await instance.handleSubmit(event).then(() => {
            expect(instance.state.moviesList.total).toBe(3);
        });
        done();
    });
    it('handleChange: should change state.inputValue to event.target.value', () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        expect(instance.state.inputValue).toBe('Adventure');
        instance.handleChange({ target: { value: 'Action' } });
        expect(instance.state.inputValue).toBe('Action');
    });
    it('handleFilter: should change state.searchBy to searchBy', () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        expect(instance.state.searchBy).toBe('genre');
        instance.handleFilter(event, 'title');
        expect(instance.state.searchBy).toBe('title');
    });
});
