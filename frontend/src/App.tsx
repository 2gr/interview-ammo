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

    this.state = {
      currentSearch: 'Kit',
      products: [],
      totalProducts: 0,
      productsPerPage: 20,
      page: 1
    };

  }

  async componentDidMount() {

    const json: any = await this.fetchData();

    this.setState({
      products: json.data,
      totalProducts: json.total,
      page: json.page
    });

  }

  // Weird async duplication. Is this normal?
  fetchData = async (query: string = 'Kit') => {
    const response = await fetch(`http://localhost:3001?query=${query}`);
    return await response.json();
  }

  _onSubmit = async (query: string) => {
    this.setState({
      currentSearch: query
    });

    const json: any = await this.fetchData(query);

    this.setState({
      products: json.data,
      totalProducts: json.total,
      page: json.page
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