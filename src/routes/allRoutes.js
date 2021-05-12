import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Utility pages
import Page404 from "../pages/Utility/pages-404"
import News from "pages/News"
import Archive from "pages/Archive"
import Terms from "pages/Terms"
import Scores from "pages/Scores"
import Docent from "pages/Docent"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // profile
  { path: "/news", component: News },

  // profile
  { path: "/archive", component: Archive },

  // profile
  { path: "/docent", component: Docent },

  // profile
  { path: "/terms", component: Terms },

  // profile
  { path: "/scores", component: Scores },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "*", component: Page404 }
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
