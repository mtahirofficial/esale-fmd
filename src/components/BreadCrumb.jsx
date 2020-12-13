import React from 'react'
import { Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CustomButton from './CustomButton';

 const BreadCrumb = (props) => {
    return (
        <Breadcrumb style={{color: '#138496'}} tag="nav" listTag="div">
        <BreadcrumbItem>{props.category}</BreadcrumbItem>
        <BreadcrumbItem>{props.subCategory}</BreadcrumbItem>
        <span className='change' onClick={props.handleChangeCategory}>Change</span>
      </Breadcrumb>
    )
}
export default BreadCrumb