import React from 'react';
import UploadImage from '../../atoms/UploadImage/UploadImage';
import AuthorManagement from '../../molecules/author-management/AuthorManagement';
import styles from './SeoSettings.module.scss';
function SeoSettings() {
    return (
        <div className="flex flex-col">
            <label htmlFor="" className={styles.label}>
                og_image
            </label>
            <div >
                <UploadImage/>
            </div>
            <div >
                <AuthorManagement/>
            </div>
            
        </div>
    );
}

export default SeoSettings;
