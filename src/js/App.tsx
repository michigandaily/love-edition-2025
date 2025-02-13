import ArticleGallery from './ArticleGallery';

// testing purposes
const articles = [
  {
    title: "John Cena",
    author: "Super Idol",
    date: "02/11/2025",
  },
  {
    title: "LeGoat James",
    author: "Lebron's Number One Fanboy",
    date: "02/12/2025",
  },
  {
    title: "Idk",
    author: "Daily",
    date: "02/13/2025",
  },
  {
    title: "Article Name 3",
    author: "Love Notes Article Author",
    date: "02/14/2025",
  }
]

const App = () => {
	return <><ArticleGallery articles={articles}/></>;
};

export default App;
