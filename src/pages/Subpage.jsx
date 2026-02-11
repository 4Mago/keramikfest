import { useParams } from 'react-router-dom';
import { PAGES } from './subpageContent.jsx';

export default function Subpage() {
  const { slug } = useParams();
  const key = slug || '';

  const page = PAGES[key] || {
    title: slug || 'Sida',
    content: <p>Innehåll för denna sida. <a href="tel:0707338818">Kontakta oss 070-733 88 18</a>.</p>,
  };

  return (
    <article className="subpage">
      <h1 className="section-head">{page.title}</h1>
      <div className="subpage-content">{page.content}</div>
    </article>
  );
}
