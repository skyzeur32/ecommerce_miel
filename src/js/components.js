export function Table({children, items = [], heading, subheading}) {
    return(
       
          
                <div className="row">
                    <div className="col-md-8 offset-2">
                    <h3 className="display-5 mb-2 text-center">{heading}</h3>
                    <p className="mb-5 text-center">
                       {subheading}</p>
                    <table id="shoppingCart" className="table table-condensed table-responsive">
                    <thead>
                        <tr>
                            <th style={{width: '40%'}}>Produit</th>
                            <th style={{width: '20%'}}>Prix Unité</th>
                            <th style={{width: '20%'}}>Quantité</th>
                            <th style={{width: '20%'}}>Prix Total</th>
                        </tr>
                        </thead>
                        {children}
                    </table>  
                    </div>
                </div>
        
       
    )
  }