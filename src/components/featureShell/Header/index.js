import React, {Component} from 'react';
import {Menubar} from 'primereact/menubar';
import {InputText} from "primereact/inputtext";
import  {items} from './menu';
import Tracktab from './Tracktab';
import NewProduct from '../NewProduct';

export default class Header extends Component {


    constructor() {
        super();
        this.state = {items};
    }

    render() {
        return (
            <div>
                <div className="content-section implementation R-WO">
                    <Menubar model={this.state.items}>
                        <InputText placeholder="Search" type="text"/>
                    </Menubar>
                </div>
                <Tracktab/>
                <NewProduct/>
            </div>
        );
    }
}
// <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
