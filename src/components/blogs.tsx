import { ArrowRight } from 'lucide-react'

interface Blog {
  slug: string;
  data: {
    title: string;
    description: string;
    date?: Date;
  };
}

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="pt-8 md:pt-12">
      <h2 className="font-serif text-4xl italic">Blogs</h2>
      <hr className="my-4" />
      <p>Artículos y pensamientos recientes.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {blogs.map((blog) => (
          <div key={blog.slug}>
            <a href={`/blogs/${blog.slug}`} className="block group">
              <h3 className="font-serif text-2xl italic group-hover:underline">
                {blog.data.title} <ArrowRight className="inline" />
              </h3>
              {blog.data.date && <p className="text-sm opacity-70 mb-1">
                {blog.data.date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>}
              <p className="">{blog.data.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}