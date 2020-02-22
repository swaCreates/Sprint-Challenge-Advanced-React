import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode= (key, initialValue) => {

    const [darkMode, setDarkMode]= useLocalStorage(key, initialValue);

    useEffect(() => {
        // could do this way also (ternary operator)
        // darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
        if(darkMode){
            document.body.classList.add('dark-mode');
        } else if(!darkMode){
            document.body.classList.remove('dark-mode');
        } else{
            alert('Sorry. Code broke lol');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];

}