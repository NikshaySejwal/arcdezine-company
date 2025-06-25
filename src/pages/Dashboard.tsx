
import React from 'react';
import DashboardCard from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  DollarSign, 
  Package, 
  FolderOpen, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome to your company management hub</p>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Active Projects"
          value={12}
          subtitle="3 due this week"
          icon={FolderOpen}
          trend={{ value: "+2 from last month", isPositive: true }}
        />
        <DashboardCard
          title="Team Members"
          value={28}
          subtitle="5 departments"
          icon={Users}
          trend={{ value: "+3 new hires", isPositive: true }}
        />
        <DashboardCard
          title="Monthly Budget"
          value="₹2.5L"
          subtitle="68% utilized"
          icon={DollarSign}
          trend={{ value: "-12% vs last month", isPositive: true }}
        />
        <DashboardCard
          title="Inventory Items"
          value={156}
          subtitle="12 low stock"
          icon={Package}
          trend={{ value: "3 items restocked", isPositive: true }}
        />
      </div>

      {/* Recent Activity & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Project Alpha completed</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">New expense added: ₹15,000</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Low stock alert: Office supplies</p>
                  <p className="text-xs text-gray-500">6 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
                <FolderOpen className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">New Project</p>
                <p className="text-xs text-gray-500">Create project</p>
              </button>
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
                <Users className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Assign Task</p>
                <p className="text-xs text-gray-500">Delegate work</p>
              </button>
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
                <DollarSign className="h-6 w-6 text-purple-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Add Expense</p>
                <p className="text-xs text-gray-500">Track spending</p>
              </button>
              <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
                <Package className="h-6 w-6 text-orange-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Update Stock</p>
                <p className="text-xs text-gray-500">Manage inventory</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
