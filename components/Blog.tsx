import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Blog() {
  const categories = [
    { name: "All Blogs", active: true },
    { name: "Pet Care Tips", active: false },
    { name: "Training & Behavior", active: false },
    { name: "Nutrition & Diet", active: false },
    { name: "Preventive Care", active: false },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Essential Wellness Exams: Keeping Your Pet Healthy Year-Round",
      date: "Dec 15, 2024",
      image:
        "https://images.pexels.com/photos/7474859/pexels-photo-7474859.jpeg",
      href: "/blog/wellness-exams",
    },
    {
      id: 2,
      title:
        "Dental Care for Dogs and Cats: Prevention Tips from Our Veterinarians",
      date: "Dec 12, 2024",
      image: "/images/blog/blog-article-2.jpg",
      href: "/blog/dental-care",
    },
    {
      id: 3,
      title: "Exotic Pet Care: What Bird and Rabbit Owners Need to Know",
      date: "Dec 10, 2024",
      image: "/images/blog/blog-article-3.jpg",
      href: "/blog/exotic-pet-care",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold text-vet-dark-text">Blog</h2>
          <button className="text-sm font-semibold text-vet-dark-text hover:text-vet-primary transition-colors">
            Read all
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-1.5 rounded-2xl text-sm font-semibold transition-all ${
                category.active
                  ? "bg-vet-dark-text text-white"
                  : "bg-gray-100 text-vet-dark-text hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="space-y-5">
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-semibold text-vet-dark-text leading-tight group-hover:text-vet-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs font-semibold text-vet-light-gray uppercase tracking-wide">
                        {post.date}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 w-6 h-6 text-vet-light-gray group-hover:text-vet-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                      <ArrowUpRight size={24} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
