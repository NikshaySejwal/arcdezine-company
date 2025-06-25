
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, User, Calendar, AlertCircle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  role: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
  dueDate: string;
}

const Tasks = () => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete quarterly report',
      description: 'Compile and analyze Q4 financial data',
      assignee: 'John Smith',
      role: 'Financial Analyst',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Update inventory system',
      description: 'Implement new tracking features',
      assignee: 'Sarah Johnson',
      role: 'IT Manager',
      priority: 'Medium',
      status: 'Pending',
      dueDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Client presentation prep',
      description: 'Prepare slides for Project Alpha demo',
      assignee: 'Mike Wilson',
      role: 'Project Manager',
      priority: 'High',
      status: 'Completed',
      dueDate: '2024-01-10'
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks & Roles</h1>
          <p className="text-gray-600 mt-1">Manage team assignments and track progress</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Task Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border border-gray-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">15</div>
            <p className="text-sm text-gray-600">Total Tasks</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border border-blue-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">8</div>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border border-green-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">5</div>
            <p className="text-sm text-gray-600">Completed</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border border-orange-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">2</div>
            <p className="text-sm text-gray-600">Overdue</p>
          </CardContent>
        </Card>
      </div>

      {/* Tasks List */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Active Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge className={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{task.assignee}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-blue-600">{task.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {task.status === 'Pending' && (
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    )}
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tasks;
