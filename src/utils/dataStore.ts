import type { Project, Portfolio, ProjectFormData, ContactInfo } from '../types';

// Simulated database storage (in a real app, this would be a proper database)
class PortfolioDataStore {
  private projects: Project[] = [];
  private portfolio: Portfolio | null = null;
  private storageKey = 'portfolio_data';

  constructor() {
    this.loadFromStorage();
  }

  // Portfolio Management
  createPortfolio(data: {
    title: string;
    description: string;
    bio: string;
    contactInfo: ContactInfo;
    customUrl?: string;
  }): Portfolio {
    const portfolio: Portfolio = {
      id: this.generateId(),
      userId: 'default-user',
      title: data.title,
      description: data.description,
      bio: data.bio,
      contactInfo: data.contactInfo,
      customUrl: data.customUrl,
      generatedUrl: data.customUrl || this.generateUrl(),
      isPublished: false,
      projects: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.portfolio = portfolio;
    this.saveToStorage();
    return portfolio;
  }

  getPortfolio(): Portfolio | null {
    return this.portfolio;
  }

  updatePortfolio(updates: Partial<Portfolio>): Portfolio | null {
    if (!this.portfolio) return null;

    this.portfolio = {
      ...this.portfolio,
      ...updates,
      updatedAt: new Date()
    };

    this.saveToStorage();
    return this.portfolio;
  }

  publishPortfolio(): boolean {
    if (!this.portfolio) return false;

    this.portfolio.isPublished = true;
    this.portfolio.updatedAt = new Date();
    this.saveToStorage();
    return true;
  }

  deletePortfolio(): boolean {
    this.portfolio = null;
    this.projects = [];
    this.saveToStorage();
    return true;
  }

  // Project Management
  createProject(data: ProjectFormData): Project {
    const project: Project = {
      id: this.generateId(),
      title: data.title,
      description: data.description,
      longDescription: data.longDescription,
      images: [], // In a real app, would handle file uploads
      technologies: data.technologies,
      category: data.category,
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
      status: 'draft',
      featured: data.featured,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.projects.push(project);
    
    // Add to portfolio if exists
    if (this.portfolio) {
      this.portfolio.projects.push(project);
    }
    
    this.saveToStorage();
    return project;
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

  getPublishedProjects(): Project[] {
    return this.projects.filter(p => p.status === 'published');
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured && p.status === 'published');
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(p => p.category === category);
  }

  getProject(id: string): Project | null {
    return this.projects.find(p => p.id === id) || null;
  }

  updateProject(id: string, updates: Partial<Project>): Project | null {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.projects[index] = {
      ...this.projects[index],
      ...updates,
      updatedAt: new Date()
    };

    // Update in portfolio if exists
    if (this.portfolio) {
      const portfolioIndex = this.portfolio.projects.findIndex(p => p.id === id);
      if (portfolioIndex !== -1) {
        this.portfolio.projects[portfolioIndex] = this.projects[index];
      }
    }

    this.saveToStorage();
    return this.projects[index];
  }

  deleteProject(id: string): boolean {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.projects.splice(index, 1);

    // Remove from portfolio if exists
    if (this.portfolio) {
      const portfolioIndex = this.portfolio.projects.findIndex(p => p.id === id);
      if (portfolioIndex !== -1) {
        this.portfolio.projects.splice(portfolioIndex, 1);
      }
    }

    this.saveToStorage();
    return true;
  }

  publishProject(id: string): boolean {
    const project = this.getProject(id);
    if (!project) return false;

    return this.updateProject(id, { status: 'published' }) !== null;
  }

  // Utility methods
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private generateUrl(): string {
    return `portfolio-${this.generateId()}`;
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined') {
      const data = {
        portfolio: this.portfolio,
        projects: this.projects
      };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  }

  private loadFromStorage(): void {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        try {
          const data = JSON.parse(stored);
          this.portfolio = data.portfolio;
          this.projects = data.projects || [];
        } catch (e) {
          console.warn('Failed to load portfolio data from storage');
        }
      }
    }
  }

  // Search functionality
  searchProjects(query: string): Project[] {
    const lowercaseQuery = query.toLowerCase();
    return this.projects.filter(project => 
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
      project.category.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Export a singleton instance
export const portfolioStore = new PortfolioDataStore();
