import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './admin/Admin'
import './assets/styles/index.scss'
import Layout from './components/layout/Layout'
import Blogs from './components/screens/Blogs/Blogs'
import Home from './components/screens/Home/Home'
import NotFoundPage from './components/screens/NotFountPage/NotFoundPage'
import Projects from './components/screens/Proejcts/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='projects' element={<Projects />} />
					<Route path='blogs' element={<Blogs />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
				<Route path='/admin' element={<Admin />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
