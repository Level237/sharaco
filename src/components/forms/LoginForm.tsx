import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '@/services/auth'
import { authTokenChange } from '@/store/authSlice'
import { Github, Loader2 } from 'lucide-react'
import Logo from '../ui/logo'

export default function LoginForm() {
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [login, { isLoading, isError, error }] = useLoginMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const userData = await login({ email: user, password: pwd })
            const userState = {
                'refreshToken': userData.data.refresh_token,
                'accessToken': userData.data.access_token
            }
            dispatch(authTokenChange(userState))
            setUser('')
            setPwd('')
            navigate('/dashboard')
        } catch (err) {
            console.error('Login failed:', err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className='mb-12'>
                <Logo width={28} height={12} />
            </div>

            <div className="w-full max-w-md max-sm:px-8 px-4">

                <form onSubmit={handleSubmit} className="space-y-6 ">
                    {isError && (
                        <div className="p-4 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
                            <p>{error?.error}</p>
                        </div>
                    )}

                    {/* Email/Username Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address / Username
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-600 hover:text-blue-500"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="flex bg items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <img
                                src="/google.svg"
                                alt="Google"
                                className="h-5 w-5"
                            />
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <img
                                src="/github.svg"
                                alt="Github"
                                className="h-5 w-5"
                            />
                        </button>
                    </div>

                    {/* Sign up link */}
                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
