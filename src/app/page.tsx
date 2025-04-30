import Hero from './components/Hero';
import ArticleContent from './components/ArticleContent';
import SurveyResults from './components/SurveyResults';
import MemeGallery from './components/MemeGallery';
import VideoSection from './components/VideoSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ArticleContent />
      <SurveyResults />
      <MemeGallery />
      <VideoSection />
    </div>
  );
}
