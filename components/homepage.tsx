'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Search, Book, Users, Clock } from "lucide-react"
import Link from "next/link"

export function Homepage() {
  return (
    <div className="relative min-h-screen bg-blue-50">
      {/* Scrollable content */}
      <div className="overflow-auto h-screen">
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Book className="h-8 w-8" />
              <span className="text-2xl font-bold">JICourseCompass</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-yellow-300">Home</Link></li>
                <li><Link href="#" className="hover:text-yellow-300">Courses</Link></li>
                <li><Link href="#" className="hover:text-yellow-300">About</Link></li>
                <li><Link href="#" className="hover:text-yellow-300">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section className="bg-yellow-300 py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4 text-blue-800">Find the Right Courses for You</h1>
              <p className="text-xl mb-8 text-blue-700">Read reviews, check workloads, and make informed decisions about your studies.</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Featured Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Introduction to Computer Science", code: "CS101", rating: 4.5 },
                  { title: "Advanced Mathematics", code: "MATH301", rating: 4.2 },
                  { title: "Modern World History", code: "HIST202", rating: 4.7 },
                ].map((course, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-600">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-500 mb-2">{course.code}</p>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="text-blue-700">{course.rating.toFixed(1)}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-blue-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Find a Course</h2>
              <div className="max-w-2xl mx-auto flex">
                <Input type="text" placeholder="Search for a course..." className="flex-grow border-blue-300 focus:border-blue-500" />
                <Button className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-blue-800">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Recent Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { course: "Organic Chemistry", author: "Alice Johnson", content: "Challenging but rewarding. Professor explains concepts clearly." },
                  { course: "Introduction to Psychology", author: "Bob Smith", content: "Fascinating course with engaging lectures and interesting assignments." },
                ].map((review, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-600">{review.course}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-blue-700">{review.content}</p>
                      <p className="text-sm text-blue-500">- {review.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-blue-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-yellow-300">Home</Link></li>
                  <li><Link href="#" className="hover:text-yellow-300">All Courses</Link></li>
                  <li><Link href="#" className="hover:text-yellow-300">About Us</Link></li>
                  <li><Link href="#" className="hover:text-yellow-300">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-300">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-yellow-300">FAQs</Link></li>
                  <li><Link href="#" className="hover:text-yellow-300">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-yellow-300">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-300">Connect With Us</h3>
                <p className="mb-2">Stay updated with the latest course reviews and campus news.</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="text-yellow-300 hover:text-blue-800 hover:bg-yellow-300">
                    <Users className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="text-yellow-300 hover:text-blue-800 hover:bg-yellow-300">
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="text-yellow-300 hover:text-blue-800 hover:bg-yellow-300">
                    <Star className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-yellow-300">
              <p>&copy; 2024 JICourseCompass. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Fixed position overlay */}
      <div className="fixed inset-0 flex items-center justify-center">
        {/* Acrylic effect */}
        <div className="absolute inset-0 backdrop-filter backdrop-blur-md bg-white bg-opacity-30"></div>
        
        {/* Coming soon text */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-blue-800 mb-4">Coming Soon...</h1>
          <p className="text-2xl text-blue-600">We are working hard to bring you the best course review experience.</p>
        </div>
      </div>
    </div>
  )
}