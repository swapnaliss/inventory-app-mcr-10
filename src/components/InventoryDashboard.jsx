import React from 'react';
import { Card } from 'react-bootstrap';
import { inventoryData } from './InventoryData';

const InventoryDashboard = () => {
  const totalStock = inventoryData.reduce((total, item) => total + item.stock, 0);
  const totalDelivered = inventoryData.reduce((total, item) => total + item.delivered, 0);
  const lowStockItems = inventoryData.filter(item => item.stock <= 10);

  return (
    <div className="dashboard">
      <Card className='inventoryCard'>
        <Card.Body>
          <Card.Title>Total Stock</Card.Title>
          <Card.Text>{totalStock}</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Total Delivered</Card.Title>
          <Card.Text>{totalDelivered}</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Low Stock Items</Card.Title>
          <Card.Text>{lowStockItems.length}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InventoryDashboard;
