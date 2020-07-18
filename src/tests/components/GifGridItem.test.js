import React from 'react';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en el componente <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem url={url} title={title}/>);
    
    test('Debe Mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        //expect(div.prop('className')).toBe('card animate__animated animate__fadeIn');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
    
})


