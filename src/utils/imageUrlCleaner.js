/**
 * Utility function to clean malformed image URLs
 * Handles various cases of malformed URLs that can occur during image uploads
 */
export const cleanImageUrl = (imageUrl) => {
  if (!imageUrl) return null;
  
  // Handle empty or invalid URLs
  if (imageUrl === "" || imageUrl === "https://" || imageUrl === "http://") {
    return null;
  }
  
  // Handle deeply nested malformed URLs (blogs + blogs)
  if (imageUrl.includes('synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/https://synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/')) {
    // Extract the final part after the last occurrence
    const parts = imageUrl.split('synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/');
    const finalPart = parts[parts.length - 1];
    return finalPart;
  }
  
  // Check if URL contains double URL structure (blogs + testimonials)
  if (imageUrl.includes('synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/https://synapse-testimonials.s3.amazonaws.com/testimonial/')) {
    // Extract the file name from testimonials URL and construct blogs URL
    const testimonialsPart = imageUrl.split('synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/')[1];
    const fileName = testimonialsPart.split('/testimonial/')[1];
    const blogsUrl = `https://synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/${fileName}`;
    return blogsUrl;
  }
  
  // Handle direct testimonials URLs and convert to blogs URLs
  if (imageUrl.includes('synapse-testimonials.s3.amazonaws.com/testimonial/')) {
    const fileName = imageUrl.split('/testimonial/')[1];
    const blogsUrl = `https://synapse-blogs.s3.ap-south-1.amazonaws.com/blogs/${fileName}`;
    return blogsUrl;
  }
  
  // Check if URL is a valid HTTP/HTTPS URL
  if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
    return null;
  }
  
  return imageUrl;
}; 