import React, {useState} from 'react';
import Popup from '../Popup/Popup';
import styles from './CreateType.module.scss';
import {createType} from "../../../http/product_api";


const CreateType = ({ visible, setVisible }) => {
    const [value, setValue] = useState('');

    const create = () => {
        createType( { name: value }).then(data => setValue(''));
        setVisible();
    };

    return (
        <Popup visible={visible}
               setVisible={setVisible}>
            <h3 className={styles.title}>{'CREATE NEW TYPE'}</h3>
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

export default CreateType;