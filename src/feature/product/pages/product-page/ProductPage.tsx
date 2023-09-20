import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../../components/product-card/ProductCard'
import { fetchProducts } from '../../../../core/redux/features/productsSlice'

export function sayHello () {
  console.log('Hello World')
}

export default function ProductPage () {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">Error</div>
  }

  return (
        <>
        <h2>Products Page</h2>
        <hr />

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {!isLoading && data.length && data.map((product: any) => <ProductCard key={product.name} product={product} />)}
        </div>
      </>
  )
}
