// pages/contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import './portfolio.module.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web development project using Next.js, React, and Tailwind CSS.',
      link: 'https://vercel.com/shasmeen-zahras-projects/next-js-assiment-02-fr7d',
    },
    {
      title: 'Project 2',
      description: 'A web development project using TypeScript, HTML, and CSS.',
      link: 'https://vercel.com/shasmeen-zahras-projects/new-milestone-05-by-shasmeen-hr5c',
    },
    {
      title: 'Project 3',
      description: 'A personal portfolio built with HTML, CSS, and TypeScript.',
      link: 'https://vercel.com/shasmeen-zahras-projects/milestone-3-by-shasmeen-zahra-fq95',
    },
  ];

return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
      <main>
        <h2 className="portfolio-title text-center text-[36px]">My Portfolio</h2>
        <form>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-card-content text-center">
                <h3 className="portfolio-card-title text-center text-[20px] ">{project.title}</h3>
                <p className="portfolio-card-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card-link"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        </form>
       </main>
      </div>     
    </section>
  );
};

export default Portfolio;
