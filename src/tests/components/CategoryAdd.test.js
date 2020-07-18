import React from 'react';
import { shallow } from 'enzyme';
import { CategoryAdd } from '../../components/CategoryAdd';
import '@testing-library/jest-dom';

describe('Pruebas en el componente <CategoryAdd />', () => {
    //const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change',{ target: {value:value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    test('no debe de postear la informacion con submit ', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';
        
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
