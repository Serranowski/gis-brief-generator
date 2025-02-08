'use client'
import { useState } from 'react'
import data from './assets/ideasData.json'
import IdeasDisplay from './IdeaDisplay/IdeasDisplay'
import Button from '../components/Button/Button'
import styles from './styles.module.css'
import stylesFooter from '../components/Footer/footer.module.css'
import stylesNavbar from '../components/Navbar/navbar.module.css'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Image from 'next/image'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function CreativeIdeas() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState('Topographic')
  const [selectedCategory, setSelectedCategory] = useState(
    data.maptype.Topographic[0].category,
  )
  const [tempSelectedIndustry, setTempSelectedIndustry] = useState('Topographic')
  const [tempSelectedCategory, setTempSelectedCategory] = useState(
    data.maptype.Topographic[0].category,
  )
  const [currentIdea, setCurrentIdea] = useState('')
  const [selectedCategoryDeadline, setSelectedCategoryDeadline] = useState('')
  const [showIdeas, setShowIdeas] = useState(false)
  const [shuffledIdeas, setShuffledIdeas] = useState([]);

  const handleIndustryChange = (event) => {
    const newIndustry = event.target.value;
    setTempSelectedIndustry(newIndustry);
    setTempSelectedCategory(data.maptype[newIndustry][0].category);
  };
  

  const handleCategoryChange = (event) => {
    setTempSelectedCategory(event.target.value)
  }

  const showIdeasOnClick = () => {
    setSelectedIndustry(tempSelectedIndustry);
    setSelectedCategory(tempSelectedCategory);
  
    const selectedIndustryData = data.maptype[tempSelectedIndustry];
    let ideas = [];
    let categoryDeadline = '';
    let selectedCategoryData = null;
  
    if (selectedIndustryData) {
      selectedCategoryData = selectedIndustryData.find(
        (item) => item.category === tempSelectedCategory,
      );
      if (selectedCategoryData) {
        ideas = selectedCategoryData.ideas;
        const deadlineRange = selectedCategoryData.deadline;
        if (deadlineRange) {
          const randomDeadline = Math.floor(Math.random() * (deadlineRange.max - deadlineRange.min + 1)) + deadlineRange.min;
          categoryDeadline = randomDeadline.toString();
        }
      }
    }
  
    setSelectedCategoryDeadline(categoryDeadline);
  
    if (selectedCategoryData && ideas.length > 0) {
      let newShuffledIdeas;
      
     
      if (selectedCategory !== tempSelectedCategory || shuffledIdeas.length === 0) {
       
        newShuffledIdeas = [...ideas].sort(() => Math.random() - 0.5);
      } else {
      
        newShuffledIdeas = [...shuffledIdeas];
      }
  
     
      setCurrentIdea(newShuffledIdeas[0]);
      setShuffledIdeas(newShuffledIdeas.slice(1));
  
      
      if (newShuffledIdeas.length === 1) {
        const reshuffled = [...ideas].sort(() => Math.random() - 0.5);
        setShuffledIdeas(reshuffled);
      }
    } else {
     
      setCurrentIdea('');
      setShuffledIdeas([]);
    }
  
    setShowIdeas(true);
    setIsButtonClicked(true);
  };
  
  
  

  return (
    <main className={styles.main}>

      <nav className={stylesNavbar.nav}>
        <Navbar />
      </nav>
      <div className={styles.hero}>
       
        {/* LEFT SIDE */}
        <div className={styles.leftContainer}>
          <div>
            <h1>What to map?</h1>
            
          </div>
          <div className={styles.choices}>
            <div>
              <label className={styles.category} htmlFor="industrySelect">
                Map type
              </label>
              <select
                id="industrySelect"
                value={tempSelectedIndustry}
                onChange={handleIndustryChange}
              >
                {Object.keys(data.maptype).map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={styles.category} htmlFor="categorySelect">
                Map scope
              </label>
              <select
                id="categorySelect"
                value={tempSelectedCategory}
                onChange={handleCategoryChange}
              >
                {data.maptype[tempSelectedIndustry].map((item) => (
                  <option key={item.category} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightContainer}>
          <IdeasDisplay
            showIdeas={showIdeas}
            selectedIndustry={selectedIndustry}
            tempSelectedCategory={tempSelectedCategory}
            selectedCategoryDeadline={selectedCategoryDeadline}
            currentIdea={currentIdea}
          />
          {isButtonClicked ? null : (
            <span className={styles.introText}>
              Create your own GIS briefing. Choose the map type and
              the geographic scope, then click below
            </span>
          )}
          <div
            className={`${styles.btn} ${isButtonClicked ? styles.clicked : ''}`}
          >
            <Button onClick={showIdeasOnClick} />
          </div>
        </div>
      </div>
      <footer className={stylesFooter.footer}>
        <Footer />
      </footer>
      <SpeedInsights />
    </main>
  )
}
