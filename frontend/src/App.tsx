import * as React from 'react';
import TopBar from './Components/TopBar';
import CurrentSearchTitle from './Components/CurrentSearchTitle';
import TotalProducts from './Components/TotalProducts';
import ProductList from './Components/ProductList';
import IProducts from './Interfaces/Product';
import Pagination from './Components/Pagination';
import './App.css';

interface State {
  currentSearch: string;
  products: Array<IProducts>;
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

  getMaxPages = () => {
    // Quebrado e provavelmente não deveria estar aqui
    if (this.state.totalProducts < this.state.productsPerPage) {
      return this.state.totalProducts;
    }
    
    return Math.ceil(this.state.totalProducts / this.state.productsPerPage);
  }
  
  render() {
    return (
      <div className="container">
        <TopBar currentSearch={this.state.currentSearch} submitAction={this._onSubmit}/>
        <CurrentSearchTitle currentSearch={this.state.currentSearch} />
        <div className="products">
          <TotalProducts qty={this.state.totalProducts} />
          <ProductList products={this.state.products} />
          <Pagination page={this.state.page} productsPerPage={this.state.productsPerPage} maxPages={this.getMaxPages()} />
        </div>  
      </div>
    );
  }
}

export default App;