import * as React from 'react';
import TopBar from './Components/TopBar';
import CurrentSearchTitle from './Components/CurrentSearchTitle';
import TotalProducts from './Components/TotalProducts';
import ProductList from './Components/ProductList';
import Pagination from './Components/Pagination';
import './App.css';

interface State {
  currentSearch: string;
  products: Array<Object>;
  totalProducts: number;
  productsPerPage: number;
  page: number;
}

class App extends React.Component<Object, State> {
  
  constructor() {
    super();

    const fakeData: any = require('./fakes/api.json');

    this.state = {
      currentSearch: 'Lençol avulso',
      products: fakeData.data,
      totalProducts: fakeData.total,
      productsPerPage: fakeData.limit,
      page: fakeData.page
    };

  }

  _onSubmit = (query: string) => {
    this.setState({
      currentSearch: query
    });
  }
  
  render() {
    return (
      <div className="container">
        <TopBar currentSearch={this.state.currentSearch} submitAction={this._onSubmit}/>
        <CurrentSearchTitle currentSearch={this.state.currentSearch} />
        <div className="product-containers">
          <TotalProducts qty={this.state.productsPerPage} />
          <ProductList products={this.state.products} />
        </div>
        <Pagination />
      </div>
    );
  }
}

export default App;