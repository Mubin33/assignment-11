# MNS-Service 🚀

MNS-Service is a responsive service-sharing web application that enables users to add, update, delete, browse, book, and manage services. This platform provides a seamless experience for both service providers and customers, focusing on user-friendly interactions and efficient service management.

## Live Website
[Visit MNS-Service1](https://assignment11-51e35.web.app/)
[Visit MNS-Service2](https://assignment11-51e35.firebaseapp.com/)
[Visit MNS-Service3](https://meek-sorbet-2b8f51.netlify.app/)
[Visit MNS-Service4](https://serviceprojectbymubinb10a11.surge.sh/)

## Key Features
1. **User Authentication:**
   - Email/password-based login and registration.
   - Google social login.

2. **Service Management:**
   - Add, update, and delete services.
   - View details of specific services.
   - Manage services you have booked or others have booked from you.

3. **Dynamic Dashboard:**
   - Separate routes for managing services, booked services, and service tasks.
   - Status updates for booked services using dropdown menus.

4. **Responsive Design:**
   - Fully responsive across mobile, tablet, and desktop devices.
   - Light and dark theme toggle for a personalized user experience.

5. **Search :**
   - Search functionality to filter services based on the service name.

## Pages and Routes
1. **Home Page:**
   - Catchy slider with animations.
   - Popular services section showcasing up to 6 featured services.
   - Additional unique sections to enhance the landing page.

2. **Login & Registration Pages:**
   - Form-based login and registration with error handling.
   - Social login using Google.

3. **All Services Page:**
   - Display all services in a user-friendly layout.
   - View service details with a "Book Now" button.

4. **Single Service Details Page:**
   - Detailed information about a selected service.

5. **Private Routes:**
   - **Add Service:** Form to add new services.
   - **Manage Services:** View and edit/delete your added services.
   - **Booked Services:** View services you have booked.
   - **Service To-Do:** Manage tasks for services booked by others with status updates.

6. **404 Error Page:**
   - Friendly error page with a button to navigate back to the homepage.

## Deployment
- **Frontend:** Deployed to a production-grade platform ensuring responsiveness and functionality.
- **Backend:** Hosted with robust database integration and JWT authentication.

## Technologies Used
- **Frontend:** React, Tailwind CSS, Framer Motion, Data-AOS.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB.
- **Authentication:** Firebase Authentication with JWT.

## Environment Variables
To secure sensitive data, Firebase configuration keys and MongoDB credentials are stored in environment variables.


---


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
