# Ansible Skill Builder Labs

An interactive educational web application designed to help users learn and master Ansible through practical, hands-on labs structured by difficulty level, with comprehensive solutions available.

## 🚀 Features

- **30 Hands-on Labs**: 10 labs each for Beginner, Intermediate, and Advanced levels
- **Comprehensive Solutions**: Step-by-step walkthroughs with code examples and explanations
- **Progressive Learning**: Labs build upon previously learned concepts
- **Search Functionality**: Find labs and solutions by keywords, titles, or Ansible concepts
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, professional interface with educational focus

## 📋 Prerequisites

Before running this application locally, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- **Git** (for cloning the repository)

### Checking Prerequisites

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## 🛠️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ansible-skill-builder-labs
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start the Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

### 4. Access the Application

Once the development server starts, you can access the application at:

```
http://localhost:5173
```

The application will automatically open in your default web browser.

## 📁 Project Structure

```
ansible-skill-builder-labs/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── LabsSection.tsx # Labs listing
│   │   ├── LabDetail.tsx   # Individual lab page
│   │   ├── SolutionsSection.tsx # Solutions listing
│   │   └── SolutionDetail.tsx   # Individual solution page
│   ├── data/
│   │   └── labsData.ts     # Lab and solution content
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🧪 Lab Categories

### Beginner Labs (10 labs)
- Installing and Configuring Nginx
- Managing System Users
- File Management and Templates
- Working with Variables and Facts
- Introduction to Handlers
- Package Management Across Distributions
- Basic File Permissions and Ownership
- Working with Configuration Files
- Basic Inventory Management
- Introduction to Playbook Best Practices

### Intermediate Labs (10 labs)
- Introduction to Ansible Roles
- Advanced Templating with Jinja2
- Error Handling and Debugging
- Managing Secrets with Ansible Vault
- Dynamic Inventories and Service Discovery
- Advanced Loops and Iteration
- Custom Modules and Plugins
- Performance Optimization and Parallelization
- Integration with CI/CD Pipelines
- Multi-Environment Management

### Advanced Labs (10 labs)
- Building a Complete LAMP Stack with Roles
- Container Orchestration with Ansible
- Infrastructure as Code with Cloud Providers
- Advanced Security Hardening and Compliance
- Database Cluster Management and High Availability
- Monitoring and Observability Stack
- Network Automation and SDN Configuration
- GitOps and Advanced CI/CD Integration
- Multi-Cloud and Hybrid Infrastructure Management
- Enterprise Ansible Automation Platform

## 🎨 Customization

### Adding New Labs
1. Open `src/data/labsData.ts`
2. Add new lab objects to the `labs` array
3. Follow the existing structure with all required fields

### Adding New Solutions
1. Open `src/data/labsData.ts`
2. Add new solution objects to the `solutions` array
3. Link solutions to labs using the `labId` field

### Styling Changes
- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in components

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Preview Production Build
```bash
npm run preview
```

### Deployment Options
The built application can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Web Servers**: Upload `dist` folder contents

## 🛠️ Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

**Dependencies Issues**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Errors**
```bash
# Check for TypeScript errors
npm run lint

# Clear Vite cache
rm -rf node_modules/.vite
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
