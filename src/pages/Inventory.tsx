
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Package, AlertTriangle, TrendingUp } from 'lucide-react';

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  unit: string;
  lastUpdated: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const Inventory = () => {
  const [items] = useState<InventoryItem[]>([
    {
      id: 1,
      name: 'Office Paper A4',
      category: 'Office Supplies',
      quantity: 250,
      minStock: 50,
      unit: 'Reams',
      lastUpdated: '2024-01-15',
      status: 'In Stock'
    },
    {
      id: 2,
      name: 'Printer Ink Cartridges',
      category: 'Office Supplies',
      quantity: 15,
      minStock: 20,
      unit: 'Pieces',
      lastUpdated: '2024-01-14',
      status: 'Low Stock'
    },
    {
      id: 3,
      name: 'Laptops Dell XPS',
      category: 'Technology',
      quantity: 8,
      minStock: 5,
      unit: 'Units',
      lastUpdated: '2024-01-12',
      status: 'In Stock'
    },
    {
      id: 4,
      name: 'Coffee Beans',
      category: 'Pantry',
      quantity: 0,
      minStock: 10,
      unit: 'Kg',
      lastUpdated: '2024-01-10',
      status: 'Out of Stock'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalItems = items.length;
  const lowStockItems = items.filter(item => item.status === 'Low Stock').length;
  const outOfStockItems = items.filter(item => item.status === 'Out of Stock').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your company's stock and materials</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Package className="h-4 w-4" />
              Total Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalItems}</div>
            <p className="text-xs text-gray-500 mt-1">In inventory</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-800 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              In Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">
              {items.filter(item => item.status === 'In Stock').length}
            </div>
            <p className="text-xs text-green-600 mt-1">Items available</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border border-yellow-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-yellow-800 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Low Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-700">{lowStockItems}</div>
            <p className="text-xs text-yellow-600 mt-1">Need reorder</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-800">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-700">{outOfStockItems}</div>
            <p className="text-xs text-red-600 mt-1">Urgent reorder</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Items */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-500">{item.category}</span>
                      <Badge variant="outline" className="text-xs">
                        {item.quantity} {item.unit}
                      </Badge>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">
                    {item.quantity} / {item.minStock}
                  </div>
                  <p className="text-xs text-gray-500">Current / Min Stock</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
