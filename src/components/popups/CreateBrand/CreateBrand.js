import React, {useState} from 'react';
import Popup from '../Popup/Popup';
import styles from './CreateBrand.module.scss';
import {createBrand} from "../../../http/product_api";


const CreateBrand = ({ visible, setVisible }) => {
    const [value, setValue] = useState('');

    const create = () => {
        createBrand( { name: value }).then(data => setValue(''));
        setVisible();
    };

    return (
        <Popup visible={visible}
               setVisible={setVisible}>
            <h3 className={styles.title}>{'CREATE NEW BRAND'}</h3>
            <form>
                <input type="text"
                       placeholder="NAME"
                       value={value}
                       onChange={event => setValue(event.target.value)}
                       className={styles.inputItem}
                />
                <button className={styles.createBtn}
                        type="button"
                        onClick={create}
                >
                    {'CREATE'}
                </button>
            </form>
        </Popup>
    );
};

export default CreateBrand;