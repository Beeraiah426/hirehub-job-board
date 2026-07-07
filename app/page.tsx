"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import AboutHireHub from "@/components/AboutHireHub";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
  <>
    <Navbar />

    <Hero />

    <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />

    <Categories
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      setSearchTerm={setSearchTerm}
    />

    <FeaturedJobs
      searchTerm={searchTerm}
      selectedCategory={selectedCategory}
    />
    <AboutHireHub />
    {/* Footer */}
    <Footer />
  </>
);
}