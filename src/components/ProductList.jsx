import React , {useState} from "react";
import { useParams } from "react-router-dom";
import { Container, Table , Button, Dropdown,DropdownButton} from "react-bootstrap";
import { inventoryData } from "./InventoryData";

const ProductList = ({ department }) => {
  const departmentName = useParams();
  const [showLowStockOnly, setShowLowStockOnly] = useState(false);

  const handleToggleLowStock = () => {
    setShowLowStockOnly(prevState => !prevState);
  };

  const filterData = inventoryData.filter((inventory) => {
    return inventory.department === departmentName.department  &&
    (!showLowStockOnly || inventory.stock <= 10);
  });

  return (
    <Container>
      <div className="filter-Section">
        <h5>Products</h5>
        <input placeholder="Search products"/>
        <label>
        <input 
          type="checkbox" 
          checked={showLowStockOnly}
            onChange={handleToggleLowStock}
           />
        Low Stock Items
      </label>
      <Button >
          <DropdownButton id="dropdown-basic-button" title="">
            <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Stock </Dropdown.Item>

          </DropdownButton>
          
        </Button>

        <button>New</button>
        <div>
    
    </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt={item.name} height="50" />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductList;
