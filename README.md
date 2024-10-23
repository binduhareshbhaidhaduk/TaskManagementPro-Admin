📋 Task Management Pro - Admin     
            This is the Admin Side of the Task Management Pro project. Here, admins can log in, sign up, manage tasks by status, track task counts, view tasks on the  
      home page, edit or delete tasks, manage a calendar, and log out securely. 🎯

✨ Features
  🔑 User Authentication: Login and signup functionality for admins.
  📝 Task Management:
  ➕ Add new tasks with specific statuses (Pending, In Progress, Completed).
  📊 View tasks based on their status and display the task count in stylish cards.
  🏠 List all tasks on the home page.
  ✏️ Edit tasks and 🗑️ delete tasks.
  📞 Contact Page: A form to contact the admin/support team.
  📅 Calendar: View tasks and events on a calendar for better task scheduling.
  🚪 Logout Functionality: Securely log out from the admin panel.

  
🚀 Getting Started

✅ Prerequisites

🛠️ Installation
Clone the repository:
```bash
git clone https://github.com/binduhareshbhaidhaduk/TaskManagementPro-Admin.git
```

Navigate to the project directory:
```bash
cd TaskManagementPro-Admin
```

Install dependencies:
```bash
npm install
```
🎉 Running the Project
```bash
npm run dev
The application will be available at http://localhost:5173.
```

📚 Pages and Components
🔐 Authentication (Login & Signup)
Admins can log in or sign up using the Login.js and Signup.js components.

📝 Task Management
Add Task: Admins can add new tasks using AddTask.js. Each task can be assigned a status (e.g., Pending, In Progress, Completed).
Task Status Cards: On the home page, tasks are grouped by status and displayed in cards with their counts. This is managed by TaskCard.js.
Edit and Delete: Admins can edit tasks (EditTask.js) or delete them by clicking the appropriate buttons.

🏠 Home Page
The HomePage.js component displays all tasks in a list format. The task cards provide a summary of task statuses.

📞 Contact Page
The ContactPage.js component includes a contact form for users to reach out to the admin/support team.

📅 Calendar
The Calendar.js component integrates a calendar view for managing tasks and events. This helps with task scheduling and deadline tracking.

🚪 Logout
Admins can log out securely using the Logout.js component. Upon logout, the session is cleared and the user is redirected to the login page.
