import React, { useState } from 'react';
import styles from './PopupComponents.module.scss';


const UploadFileInput = ({onChange}) => {
    const [uploadText, setUploadText] = useState('NO FILE CHOSEN');

    return (
        <div className={styles.uploadFile}>
            <label htmlFor="upload" className={styles.fakeFileInput}>{'UPLOAD FILE'}</label>
            <span>{uploadText}</span>
            <input type="file"
                   id="upload"
                   onChange={e => {
                       setUploadText(e.target.files[0].name);
                       onChange(e);
                   }}
            ></input>
        </div>
    );
};

export default UploadFileInput;