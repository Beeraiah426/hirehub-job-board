# 🚀 HireHub – Modern Job Board Application

HireHub is a modern, responsive Job Board application built using **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It provides a clean and user-friendly platform for job seekers to explore opportunities, save jobs, and apply through an interactive application form.

---

# 🌐 Live Demo

### 🔗 Live Application

https://hirehub-job-board-ten.vercel.app/

### 📂 GitHub Repository

https://github.com/Beeraiah426/hirehub-job-board

---

# 📖 Project Overview

HireHub is designed to help job seekers discover and apply for jobs from multiple companies through an intuitive and responsive interface.

The project demonstrates modern frontend development practices using Next.js and includes features such as job search, filtering, saved jobs, application forms, and automated deployment.

---

# ✨ Features

## 🏠 Home Page

- Modern Hero Section
- Responsive Navigation Bar
- Featured Jobs
- Company Statistics
- About HireHub Section
- Professional Footer

---

## 🔍 Smart Job Search

Search jobs using:

- Job Title
- Company Name
- Location
- Skills

Search results update instantly.

---

## 📂 Category Filtering

Filter jobs based on skills such as:

- Java
- React
- Spring Boot
- DevOps
- UI Development
- Technical Support
- Process Associate

---

## 💼 Job Details

Each job contains:

- Company Name
- Job Title
- Location
- Salary
- Experience
- Job Type
- Description
- Responsibilities
- Required Skills

---

## ❤️ Saved Jobs

Users can:

- Save favourite jobs
- Remove saved jobs
- View saved jobs on a dedicated page
- See the saved jobs count in the navigation bar

---

## 📝 Apply Job

Users can apply using a professional modal containing:

- Full Name
- Email Address
- Phone Number
- Resume Upload
- Cover Letter

Additional Features:

- Duplicate application prevention
- Success notification
- Validation for required fields

---

## 🔔 Toast Notifications

The application provides notifications for:

- Job Saved Successfully
- Job Removed Successfully
- Application Submitted Successfully
- Already Applied Warning

---

## 📱 Responsive Design

Fully responsive for:

- Desktop
- Tablet
- Mobile Devices

---

# 🛠 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hot Toast
- Local Storage
- GitHub Actions
- Vercel

---

# 📂 Project Structure

```
hirehub/
│
├── app/
│   ├── jobs/
│   ├── saved-jobs/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── Categories.tsx
│   ├── FeaturedJobs.tsx
│   ├── JobCard.tsx
│   ├── ApplyButton.tsx
│   ├── ApplyModal.tsx
│   ├── AboutHireHub.tsx
│   └── Footer.tsx
│
├── data/
│   └── jobs.ts
│
├── public/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
└── package.json
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Beeraiah426/hirehub-job-board.git
```

Navigate into the project

```bash
cd hirehub-job-board
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Start the production server

```bash
npm start
```

---

# ⚙ CI/CD Pipeline

This project uses **GitHub Actions** for Continuous Integration.

Whenever code is pushed to the **main** branch:

- Dependencies are installed
- The application is built
- The build is verified before deployment

Workflow Location:

```
.github/workflows/ci.yml
```

---

# ☁ Deployment

The application is deployed on **Vercel**.

Production URL:

https://hirehub-job-board-ten.vercel.app/

Every push to the **main** branch automatically triggers:

- GitHub Actions workflow
- Production build
- Automatic deployment to Vercel

---

# 🚀 Future Enhancements

Possible future improvements include:

- User Authentication
- Company Dashboard
- Admin Panel
- Backend API Integration
- Database Support
- Email Notifications
- Dark Mode
- Pagination
- Job Sorting
- AI Job Recommendations

---

# 👨‍💻 Developer

**M. Beeraiah**

GitHub:

https://github.com/Beeraiah426

---

# 🙏 Acknowledgement

This project was developed as part of a **Software Engineer Assessment** to demonstrate frontend development skills, responsive UI design, modern React development practices, CI/CD integration, and cloud deployment.

---

# ⭐ Thank You

Thank you for reviewing this project.