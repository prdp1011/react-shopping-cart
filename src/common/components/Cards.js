import React, {Component} from 'react';
import {Carousel} from 'primereact/carousel';
import {CarService} from '../../services/api/Car';

export default class CarousalCards extends Component {

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
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
      this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        return (
                    <div className="p-col-12">
                        <img src={require(`../../static/images/car/${car.brand}.png`)
                      } alt={car.brand} />
                    </div>
        );
    }

    render() {
      const styles = {
        textAlign: 'center'
      };
        const basicHeader = <h2  style={styles}> Basic </h2>

        return (
            <div className="carousel-demo">
                <div className="content-section implementation">
                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate}
                     numVisible={7} numScroll={1} circular ={true}
                        header={basicHeader} responsive={this.responsiveSettings}
                        dotsContainerClassName="hide"
                        ></Carousel>
                </div>
            </div>
        );
    }
}
