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
      productsPerPage: 1,
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
  // FIXME: ProductsPerPage definitions are scattered
  fetchData = async (query: string = 'Kit', limit: number = 1, page: number = 1) => {
    const response = await fetch(`http://localhost:3001?query=${query}&limit=${limit}&page=${page}`);
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

  changePageAction = async (page: number) => {
    const json: any = await this.fetchData(this.state.currentSearch, this.state.productsPerPage, page);

    this.setState({
      products: json.data,
      totalProducts: json.total,
      page: json.page
    });

  }


  changeProductsPerPageAction = async (productsPerPage: number) => {
    const json: any = await this.fetchData(this.state.currentSearch, productsPerPage, 1);

    this.setState({
      products: json.data,
      totalProducts: json.total,
      page: json.page
    });

  }

  getMaxPages = () => {
    // Quebrado e provavelmente não deveria estar aqui
    if (this.state.totalProducts < this.state.productsPerPage) {
      return 1;
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
          <Pagination changeProductsPerPageAction={this.changeProductsPerPageAction} changePageAction={this.changePageAction} page={this.state.page} productsPerPage={this.state.productsPerPage} maxPages={this.getMaxPages()} />
        </div>  
      </div>
    );
  }
}

export default App;