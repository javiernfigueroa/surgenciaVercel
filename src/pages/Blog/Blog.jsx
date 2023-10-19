import ArticleCard from './components/article-card/ArticleCard'
import './Blog.css'
import RootLayout from '../../layouts/RootLayout'
import ButtonBack from '../../components/ui/ButtonBack'
import SearchBar from '../../components/ui/SearchBar'

const articles = ['art1', 'art2', 'art3', 'art4', 'art5', 'art6', 'art7', 'art8', 'art9']

const Blog = () => {
  return (
    <RootLayout title="Blog" backButton={<ButtonBack />} searchBar={<SearchBar />}>
      <div className="d-flex justify-content-center pb-5 flex-wrap">
        <div className="d-flex flex-wrap justify-content-center pb-5">
          {articles.map((i, index) => (
            <ArticleCard key={index} style={`column ${index % 3 === 1 ? 'negative-margin' : ''}`}></ArticleCard>
          ))}
        </div>
      </div>
    </RootLayout>
  )
}

export default Blog
