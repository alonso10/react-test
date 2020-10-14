import React from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../../store/reducers/colorTable';


export default function ColorPicker() {
    
    const dispatch = useDispatch();

    const onChangeColor = (e) => {
        dispatch(changeColor(e.target.value));
    }

    return (
        <div className="content-input">
            <input type="color" onChange={onChangeColor} />
        </div>
    );
}
