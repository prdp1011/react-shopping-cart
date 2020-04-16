import React, {Component} from 'react';
import {Carousel} from 'primereact/carousel';
import {CarService} from '../../../services/api/Car';

export default class NewProduct extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);

        this.responsiveSettings = [
            {
                breakpoint: '1024px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
        const ele = document.getElementById('main-carousel');
       const eleBtn = document.querySelector('#main-carousel .p-carousel-container .p-carousel-next');
       const eleBtn1 = document.querySelector('#main-carousel .p-carousel-container .p-carousel-prev');
       const isVisible = (show) => {
         eleBtn.style.visibility = show;
         eleBtn1.style.visibility = show;
        }
        ele.addEventListener('mouseover', () => isVisible('visible'));
        ele.addEventListener('mouseout', () => isVisible('hidden'));
    }
    isVisible() {

    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img className="w-100 h-383" src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                         alt={car.brand} />
                    </div>
                </div>
            </div>
        );
    }

    render() {

        return (
            <div className="carousel-demo">
                <div className="content-section implementation">
                    <Carousel value={this.state.cars} id="main-carousel"
                    itemTemplate={this.carTemplate}
                    circular={true} autoplayInterval={5000}
                    numVisible={1} numScroll={1} className="custom-carousel"
                        responsive={this.responsiveSettings}
                        dotsContainerClassName="hide" ></Carousel>
                </div>
            </div>
        );
    }
}
