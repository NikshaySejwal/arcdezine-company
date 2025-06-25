
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, Users, Clock, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
  progress: number;
  startDate: string;
  endDate: string;
  teamSize: number;
  lastUpdate: string;
  dailyUpdate: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Website redesign and optimization',
      status: 'In Progress',
      progress: 75,
      startDate: '2024-01-01',
      endDate: '2024-02-15',
      teamSize: 5,
      lastUpdate: '2024-01-15',
      dailyUpdate: 'Frontend development 90% complete. Working on responsive design.'
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Mobile app development',
      status: 'Planning',
      progress: 15,
      startDate: '2024-01-20',
      endDate: '2024-04-30',
      teamSize: 8,
      lastUpdate: '2024-01-14',
      dailyUpdate: 'Requirements gathering phase. UI/UX mockups in review.'
    },
    {
      id: 3,
      name: 'Project Gamma',
      description: 'Database migration and optimization',
      status: 'Completed',
      progress: 100,
      startDate: '2023-12-01',
      endDate: '2024-01-10',
      teamSize: 3,
      lastUpdate: '2024-01-10',
      dailyUpdate: 'Project successfully completed. All data migrated and tested.'
    },
    {
      id: 4,
      name: 'Project Delta',
      description: 'Security audit and compliance',
      status: 'On Hold',
      progress: 30,
      startDate: '2024-01-05',
      endDate: '2024-03-15',
      teamSize: 4,
      lastUpdate: '2024-01-12',
      dailyUpdate: 'Waiting for external security consultant availability.'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Planning': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'On Hold': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
          <p className="text-gray-600 mt-1">Track project progress and daily updates</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white border border-gray-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
            <p className="text-sm text-gray-600">Total Projects</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border border-green-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{activeProjects}</div>
            <p className="text-sm text-gray-600">Active Projects</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border border-blue-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{completedProjects}</div>
            <p className="text-sm text-gray-600">Completed</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border border-purple-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
            </div>
            <p className="text-sm text-gray-600">Avg Progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{project.name}</CardTitle>
                  <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{project.startDate} - {project.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{project.teamSize} team members</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Updated: {project.lastUpdate}</span>
                  </div>
                </div>

                {/* Daily Update */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Daily Update</p>
                      <p className="text-sm text-gray-600 mt-1">{project.dailyUpdate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
