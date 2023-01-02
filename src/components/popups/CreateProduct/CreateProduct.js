import React, {useContext, useEffect, useState} from 'react';
import styles from './CreateProduct.module.scss';
import { Context } from '../../../index';
import Popup from '../Popup/Popup';
import UploadFileInput from '../PopupComponents/UploadFileInput';
import {createProduct, fetchBrands, fetchTypes} from "../../../http/product_api";
import {observer} from "mobx-react-lite";


const CreateProduct = observer(({visible, setVisible}) => {
    const { product } = useContext(Context);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(undefined);
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
    }, []);

    const create = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', product.selectedBrand.id);
        formData.append('typeId', product.selectedType.id);
        formData.append('info', JSON.stringify(productInfo));
        createProduct(formData).then(data => {
            product.setSelectedType({});
            product.setSelectedBrand({});
            setVisible(false);
        });
    }

    const addProductInfo = () => {
        setProductInfo([...productInfo, {number: Number(((Date.now()) / 1000).toFixed()), title: '', description: ''}]);
    };

    const removeProductInfo = (number) => {
        setProductInfo(productInfo.filter(infoItem => infoItem.number !== number));
    };

    const changeProductInfo = (key, value, number) => {
        setProductInfo(productInfo.map(infoItem => infoItem.number === number ? {...infoItem, [key]: value} : infoItem));
    }

    const selectFile = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <Popup visible={visible}
               setVisible={setVisible}
        >
            <h3 className={styles.title}>{'CREATE NEW PRODUCT'}</h3>
            <form>
                <div className={styles.selects}>
                    <select className={styles.selectItem}
                            onChange={(event) => {
                                const type = product.types.filter(type => type.name === event.target.value)[0];
                                product.setSelectedType(type);
                            }}
                    >
                        <option hidden value="">{'Choose type'}</option>
                        {product.types.map(type => {
                            return (
                                <option key={type.id}>{type.name}</option>
                            );
                        })}
                    </select>
                    <select className={styles.selectItem}
                            onChange={(event) => {
                                const brand = product.brands.filter(brand => brand.name === event.target.value)[0];
                                product.setSelectedBrand(brand);
                            }}
                    >
                        <option hidden value="">{'Choose brand'}</option>
                        {product.brands.map(brand => {
                            return (
                                <option key={brand.id}>{brand.name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className={styles.inputs}>
                    <input type="text"
                           value={name}
                           onChange={event => setName(event.target.value)}
                           placeholder="NAME"
                           className={styles.inputItem}
                    ></input>
                    <input type="number"
                           value={price}
                           onChange={event => setPrice(Number(event.target.value))}
                           placeholder="PRICE"
                           className={styles.inputItem}
                    ></input>
                    <UploadFileInput onChange={selectFile}/>
                </div>
                <div className={styles.addProps}>
                    <button className={styles.addBtn}
                            type="button"
                            onClick={addProductInfo}
                    >
                        {'ADD PRODUCT INFORMATION'}
                    </button>
                    {
                        productInfo.map(infoItem => {
                            return (
                                <div className={styles.infoItem} key={infoItem.number}>
                                    <input type="text"
                                           placeholder="TITLE"
                                           className={styles.inputItem}
                                           value={infoItem.title}
                                           onChange={event => changeProductInfo('title', event.target.value, infoItem.number)}
                                    ></input>
                                    <input type="text"
                                           placeholder="DESCRIPTION"
                                           className={styles.inputItem}
                                           value={infoItem.description}
                                           onChange={event => changeProductInfo('description', event.target.value, infoItem.number)}
                                    ></input>
                                    <button className={styles.deleteBtn}
                                            type="button"
                                            onClick={() => removeProductInfo(infoItem.number)}
                                    >
                                        {'DELETE'}
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
                <button className={styles.createBtn}
                        type="button"
                        onClick={create}
                >
                    {'CREATE'}
                </button>
            </form>
        </Popup>
    );
});

export default CreateProduct;

