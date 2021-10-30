import React from 'react';
import BlogNav from '../Blog/blognav';
import TopBar from '../topbar';

export default function Blog() {
  return (
    <>
      <TopBar />
      <div className="blog-wrapper">
        <BlogNav />
      </div>
    </>
  );
}
