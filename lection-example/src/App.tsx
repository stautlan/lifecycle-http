import { useState, useEffect, useCallback } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import routes from './components/routes';
import {productionSales} from './components/data'
import Counter from './components/Counter';

function App() {
  const [products, setProducts] = useState(productionSales);
  const [page, setPage] = useState(1)

  const fetchProducts = async() => {
    try {
      const responce = await fetch(`https://hub.dummyapis.com/products?noofRecords=10&idStarts=${page}&currency=usd`)
      if (!responce.ok) {
        throw new Error('Ошибка сервера')
      }
  
      const data = await responce.json();
      setProducts(data);
    } catch(error) {
      console.log(error)
    }

  }

  useEffect(() => {
    // fetch(`https://hub.dummyapis.com/products?noofRecords=10&idStarts=${page}&currency=usd`)
    // .then(responce => {
    //   if (!responce.ok) {
    //     throw new Error('Ошибка сервера')
    //   }
    //   return responce;
    // })
    // .then(res => res.json())
    // .then(data => {
    //   setProducts(data);
    // })
    fetchProducts()
    return () => {
      // закрываем соединение, чистим переменные и т.д.
    }
  }, [page])

  useEffect(() => {
    (async() => {

    })()
  })

  const removeProduct = useCallback( (product: Product) => {
    setProducts(prevState => {
      return prevState.filter(
        p => p.id !== product.id
      );
    });
  }, []);

  const nextPage = () => {
    setPage(prevPage => prevPage + 10)
  }

  return (
    <div className='root'>
      <h2>Список товаров</h2>
      <ProductList
        products={products}
        onRemove={removeProduct}
      />
      {/* <Counter /> */}
      <button onClick={nextPage}>Следующая страница</button>
    </div>
  )
}

// const NavSection: FunctionComponent<RouteComponentProps> = () => {
//   const routeKeys = Object.keys(routes);
//   return (
//     <Switch>
//       {routeKeys.map((r) => {
//         <Route key={r} path={r} render={(p) => <PageNav {...p} />}></Route>
//       })}
//     </Switch>
//   )
// }

export default App
