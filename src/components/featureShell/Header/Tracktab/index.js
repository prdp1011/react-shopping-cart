import React, {Component} from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';

export default class Tracktab extends Component {

    render() {
        const items = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];
        const style= {
          marginTop: '43px'
        }
        const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

        return (

            <div>
                <div className="content-section implementation" style={style}>
                    <BreadCrumb model={items} home={home} />
                </div>
            </div>
        );
    }
}
