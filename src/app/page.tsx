import Hero from './components/Hero';
import ArticleContent from './components/ArticleContent';
import SurveyResults from './components/SurveyResults';
import MemeGallery from './components/MemeGallery';

export default function Home() {
  return (
    <div>
      <Hero />
      <ArticleContent />
      <SurveyResults />
      <MemeGallery />
    </div>
  );
}
