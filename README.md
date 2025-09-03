# Pretty Web Craft Academy

A modern, responsive educational platform built with React and TypeScript, featuring a beautiful UI for showcasing courses, instructors, and student success stories.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Course Showcase**: Display available courses with detailed information
- **Instructor Profiles**: Highlight qualified instructors and their expertise
- **Success Stories**: Share testimonials and student achievements
- **Contact System**: Enhanced contact form for inquiries
- **Interactive Components**: Engaging user experience with modern UI elements

## 🛠️ Technologies Used

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: shadcn/ui components for consistent design
- **Icons**: Lucide React for beautiful icons
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router DOM for navigation
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

## 📦 Installation & Setup

Follow these steps to get the project running locally:

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd pretty-web-craft-55

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AcademyHero.tsx # Hero section component
│   ├── AboutSection.tsx # About section
│   ├── CoursesSection.tsx # Courses showcase
│   ├── InstructorsSection.tsx # Instructors display
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🎨 Customization

The project uses Tailwind CSS for styling, making it easy to customize:

- Modify colors in `tailwind.config.ts`
- Update component styles in individual component files
- Add new components in the `src/components/` directory

## 🚀 Deployment

To deploy this project:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service
3. Configure your domain and SSL certificate

Popular deployment options:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Developed by Sihle Langa - A passionate developer creating beautiful and functional web experiences.

---

For questions or support, please open an issue in the repository or contact the development team.