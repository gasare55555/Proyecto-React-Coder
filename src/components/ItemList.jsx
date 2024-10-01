import Item from "./Item";

function ItemList({category}) {
  return (
    <section className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {category.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ItemList;