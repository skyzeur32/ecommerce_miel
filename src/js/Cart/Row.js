
function Row(props) {
  console.log(props.produit.id);
    return(
    <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-md-3 text-left">
              <img src={props.produit.img} alt="" className="img-fluid d-none d-md-block rounded mb-3 shadow" />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
              <h4> {props.produit.name}</h4>
            </div>
          </div>
        </td>
        <td data-th="Price">{props.produit.price} €</td>
        <td data-th="Quantity">
          <input type="number" className="form-control form-control-lg text-center" value={props.produit.quantity} />
        </td>
        <td className="Prix_Total" data-th="">
          <h4>{props.produit.price * props.produit.quantity} €</h4>
        </td>
      </tr>
    )
}
export default Row