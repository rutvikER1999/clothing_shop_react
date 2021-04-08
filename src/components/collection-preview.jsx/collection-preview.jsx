import React from 'react'
import { CollectionItem } from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

export const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 classname='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                .filter((item, index)=>(index<4))
                .map(({id, ...otherItemProps})=>(
                    <CollectionItem key={id} { ...otherItemProps } />
        
                ))
                }
            </div>
        </div>
    )
}
 