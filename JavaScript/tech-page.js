// Random date function for recent page
        function getRandomDate() {
            const start = new Date();
            const end = new Date(start);
            start.setFullYear(start.getFullYear() - 0); // Max limit this year

            const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
            const randomDate = new Date(randomTimestamp);

            // Format the date as for example "4 April 2025"
            const options = { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            };

            return randomDate.toLocaleDateString('en-GB', options); // Set as UK format
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Select all .date elements and set random dates
            const dateElements = document.querySelectorAll('.date');
            dateElements.forEach(dateElement => {
                dateElement.textContent = `${getRandomDate()}`; // Set random date for each
            });
        });
		
		// Scrolls the page to the top
		function scrollToTop() {
    window.scrollTo({
        top: 0, // Will go to very top 0
        behavior: 'smooth' // Animated so it doesn't jump instantly
    });
}

// Show the button when the user scrolls down to bottom of page
window.onscroll = function() {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { // Number of pixels until button shows
        button.style.display = "block"; // Show button when scrolled down
    } else {
        button.style.display = "none"; // Hide button when at the top
    }
};

// When page loads, check category in URL, highlight the selected category button 
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');  // Get the category from the URL

    // If no category is provided, default to all category
    const selectedCategory = category || 'all';

    // Set active button based on category so it will be highlighted when selected
	// Selects all <a> tags inside the element with class .category_buttons and loops over them
    //For each <a> it finds the <button> element inside it.
    document.querySelectorAll('.category_buttons a').forEach(a => {
        const btn = a.querySelector('button');
		
		// It checks if the current link matches the selected category
		// If the selected category is all it looks for links that don’t have a category= parameter in their URL.
		// Otherwise it checks if the link’s URL ends with category=<selectedCategory> e.g category=gear
        if (
          (selectedCategory === 'all' && !a.href.includes('category=')) ||
          a.href.endsWith(`category=${selectedCategory}`)
        )
		// If true it's added to active class
		{
            btn.classList.add('active');
        }
    });

    // Load content
    fetchCategoryContent(selectedCategory);
}

// Fetch and display articles for the selected category
function fetchCategoryContent(category) {
    const articlesContainer = document.getElementById('article-container');
	
	// Stores the html articles
    let articlesHtml = '';

// Tech Category 'All'
    if (category === 'all') {
        // Default to showing all articles (combination of Tech, AI, Space and Gear articles)
        articlesHtml = `
            <!-- Featured Stories -->
            <div class="page-block featured">
			<a href="../html/tech-articles/featured-article-ai.html">
                <img src="../assets/tech/tech-page featured-ai.jpg" alt="The Next Frontier in Healthcare" />
				</a>
                <h3><a href="../html/tech-articles/featured-article-ai.html" style="color:black;">AI: The Next Frontier in Healthcare</a></h3> 
			 <a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
                <p>AI is reshaping healthcare by revolutionizing diagnostics, patient treatment plans, and medical research. Explore how the industry is adapting to this transformative technology.</p>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-3.html">
                <img src="../assets/tech//tech-page-article-ai-3.jpg" alt="AI and Privacy: How Machine Learning is Impacting Data Security" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-3.html" style="color: black;">AI and Privacy: How Machine Learning is Impacting Data Security</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-9.html">
                <img src="../assets/tech/tech-page-article-ai-9.jpg" alt="Ethics in AI: Navigating the Dangers of Machine Intelligence" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-9.html" style="color: black;">Ethics in AI: Navigating the Dangers of Machine Intelligence</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-5.html">
                <img src="../assets/tech/tech-page-article-ai-5.jpg" alt="Page Title 5 Image" /> 
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-5.html" style="color: black;">AI in Healthcare: The Promise and Challenges of Machine Learning</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-gear-3.html">
			<img src="../assets/tech/tech-page-article-gear-3.jpg" alt="Polaroid Flip" />
			</a>
			<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
                <h3><a href="../html/tech-articles/article-gear-3.html" style="color: black;">Polaroid Flip: A Retro-Inspired Instant Camera for Modern Times</a></h3>			
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-space-2.html">
                <img src="../assets/tech/tech-page-article-space-2.jpg" alt="Mars Colonization" />
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-2.html" style="color: black;">The Quest to Colonize Mars</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-gear-1.html">
                <img src="../assets/tech/tech-page-article-gear-1.jpg" alt="The Future of Smart Gear: How Wearables Are Changing Our Lives" /> 
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-1.html" style="color: black;">The Future of Smart Gear: How Wearables Are Changing Our Lives</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-gear-2.html">
                <img src="../assets/tech/tech-page-article-gear-2.jpg" alt="The Battle of AI Assistants: Siri vs. Alexa vs. Google Assistant" />
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-2.html" style="color: black;">The Battle of AI Assistants: Siri vs. Alexa vs. Google Assistant</a></h3>
            </div>
									
			<div class="page-block">
			<a href="../html/tech-articles/article-space-8.html">
                <img src="../assets/tech/tech-page-article-space-8.jpg" alt="How Startups are Shaping the Final Frontier" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-8.html" style="color: black;">Private Space Ventures: How Startups are Shaping the Final Frontier</a></h3>
				</div>
				
				<div class="page-block">
				<a href="../html/tech-articles/article-gear-5.html">
                <img src="../assets/tech/tech-page-article-gear-5.jpg" alt="Tech Gear for Home Offices: Must-Have Devices for Remote Work" />
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-5.html" style="color: black;">Tech Gear for Home Offices: Must-Have Devices for Remote Work</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-space-7.html">
                <img src="../assets/tech/tech-page-article-space-7.jpg" alt="Kuiper internet satellites" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-7.html" style="color: black;">Amazon targets April 9 launch of first Kuiper internet satellites</a></h3>
            </div>

            <div class="page-block">
			<a href="../html/tech-articles/article-tech-1.html">
              <img src="../assets/tech/tech-page-article-tech-1.jpg" alt="Quantum Computing" />
			  </a>
              <a href="?category=all">
                <span class="category-tag">Technology</span>
             </a>
              <h3><a href="../html/tech-articles/article-tech-1.html" style="color: black;">Quantum Computing: The Disruptive Force</a></h3>
           </div>
		   
		    <div class="page-block">
			<a href="../html/tech-articles/article-space-3.html">
                <img src="../assets/tech/tech-page-article-space-3.jpg" alt="The Future of Commercial Travel Beyond Earth" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-3.html" style="color: black;">Space Tourism: The Future of Commercial Travel Beyond Earth</a></h3>
            </div>
			
		   <div class="page-block">
		   <a href="../html/tech-articles/article-space-1.html">
		   <img src="../assets/tech/tech-page-article-space-1.jpg" alt="SpaceX and the Future of Mars Exploration" />
		   </a>
		   <a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-1.html" style="color: black;">SpaceX and the Future of Mars Exploration</a></h3>				          
		   </div>
		   
		   <div class="page-block">
		   <a href="../html/tech-articles/article-ai-8.html">
                <img src="../assets/tech/tech-page-article-ai-8.jpg" alt="The Role of AI in Climate Change: Can Machines Help Save the Planet?" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-8.html" style="color: black;">The Role of AI in Climate Change: Can Machines Help Save the Planet?</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-space-9.html">
                <img src="../assets/tech/tech-page-article-space-9.jpg" alt="The Hunt for Life Beyond Our Solar System" />
                </a>				
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-9.html" style="color: black;">Astrobiology: The Hunt for Life Beyond Our Solar System</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-7.html">
                <img src="../assets/tech/tech-page-article-ai-7.jpg" alt="AI in Creative Industries: How Machines Are Rewriting the Rules of Art and Design" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-7.html" style="color: black;">AI in Creative Industries: How Machines Are Rewriting the Rules of Art and Design</a></h3>
            </div>
		   
		   <div class="page-block">
		   <a href="../html/tech-articles/article-gear-4.html">
                <img src="../assets/tech/tech-page-article-gear-4.jpg" alt="The Evolution of Gaming Gear: From Controllers to Virtual Reality" />
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-4.html" style="color: black;">The Evolution of Gaming Gear: From Controllers to Virtual Reality</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-1.html">
                <img src="../assets/tech/tech-page-article-ai-1.jpg" alt="AI Breakthroughs: The Most Exciting Developments in 2025" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-1.html" style="color: black;">AI Breakthroughs: The Most Exciting Developments in 2025</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-4.html">
                <img src="../assets/tech/tech-page-article-ai-4.jpg" alt="AI in Autonomous Vehicles" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
                <h3><a href="../html/tech-articles/article-ai-4.html" style="color: black;">AI and the Future of Autonomous Vehicles</a></h3>
            </div>
		   
		   <div class="page-block">
		   <a href="../html/tech-articles/article-space-6.html">
                <img src="../assets/tech/tech-page-article-space-6.jpg" alt="NASA Artemis Mission" />
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-6.html" style="color: black;">NASA's Artemis: Returning to the Moon</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-gear-6.html">
                <img src="../assets/tech/tech-page-article-gear-6.jpg" alt="The Ultimate Tech Gear Setup in 2025" /> 
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-6.html" style="color: black;">The Ultimate Tech Gear Setup in 2025</a></h3> 
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-2.html">
                <img src="../assets/tech/tech-page-article-ai-2.jpg" alt="AI in Medicine" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
                <h3><a href="../html/tech-articles/article-ai-2.html" style="color: black;">AI in Medicine: Breakthroughs and Challenges</a></h3>
            </div>
                       
        <div class="page-block">
		<a href="../html/tech-articles/article-tech-2.html">
            <img src="../assets/tech/tech-page-article-tech-2.jpg" alt="Blockchain Beyond Cryptocurrency" />
			</a>
			<a href="?category=all">
                <span class="category-tag">Technology</span>
             </a>
            <h3><a href="../html/tech-articles/article-tech-2.html" style="color: black;">Blockchain: Beyond Bitcoin</a></h3>
        </div>
            
        <div class="page-block">
		<a href="../html/tech-articles/article-tech-3.html">
            <img src="../assets/tech/tech-page-article-tech-3.jpg" alt="Automation and the Future Workforce" />
			</a>
			<a href="?category=all">
                <span class="category-tag">Technology</span>
             </a>
            <h3><a href="../html/tech-articles/article-tech-3.html" style="color: black;">Automation and the Future Workforce</a></h3>			
        </div>
		
		<div class="page-block">
		<a href="../html/tech-articles/article-space-5.html">
                <img src="../assets/tech/tech-page-article-space-5.jpg" alt="Breakthroughs in Exoplanet Discovery" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-5.html" style="color: black;">The Search for Alien Life: Breakthroughs in Exoplanet Discovery</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-6.html">
                <img src="../assets/tech/tech-page-article-ai-6.jpg" alt="Artificial General Intelligence" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-6.html" style="color: black;">Artificial General Intelligence: Are We Close to Creating Superintelligent Machines?</a></h3>
            </div>
			
			<div class="page-block">
			<a href="../html/tech-articles/article-space-4.html">
                <img src="../assets/tech/tech-page-article-space-4.jpg" alt="A Look at Orbital Habitats" />
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-4.html" style="color: black;">Building the Next Generation of Space Stations: A Look at Orbital Habitats</a></h3>
            </div>			           			
        `;
    } else if (category === 'ai') {
        articlesHtml = `
            <!-- Featured Story -->
            <div class="page-block featured">
			<a href="../html/tech-articles/featured-article-ai.html">
                <img src="../assets/tech/tech-page featured-ai.jpg" alt="The Next Frontier in Healthcare" />
				</a>
                <h3><a href="../html/tech-articles/featured-article-ai.html" style="color: black;">AI: The Next Frontier in Healthcare</a></h3>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
                <p>AI is reshaping healthcare by revolutionizing diagnostics, patient treatment plans, and medical research. Explore how the industry is adapting to this transformative technology.</p>
            </div>

            <!-- Article List -->
            <div class="page-block">
			<a href="../html/tech-articles/article-ai-2.html">
                <img src="../assets/tech/tech-page-article-ai-2.jpg" alt="AI in Medicine" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
                <h3><a href="../html/tech-articles/article-ai-2.html" style="color: black;">AI in Medicine: Breakthroughs and Challenges</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-ai-4.html">
                <img src="../assets/tech/tech-page-article-ai-4.jpg" alt="AI in Autonomous Vehicles" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
                <h3><a href="../html/tech-articles/article-ai-4.html" style="color: black;">AI and the Future of Autonomous Vehicles</a></h3>
            </div>
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-5.html">
                <img src="../assets/tech/tech-page-article-ai-5.jpg" alt="AI in Healthcare" /> 
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-5.html" style="color: black;">AI in Healthcare: The Promise and Challenges of Machine Learning</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-ai-6.html">
                <img src="../assets/tech/tech-page-article-ai-6.jpg" alt="Artificial General Intelligence" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-6.html" style="color: black;">Artificial General Intelligence: Are We Close to Creating Superintelligent Machines?</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-ai-7.html">
                <img src="../assets/tech/tech-page-article-ai-7.jpg" alt="AI in Creative Industries: How Machines Are Rewriting the Rules of Art and Design" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-7.html" style="color: black;">AI in Creative Industries: How Machines Are Rewriting the Rules of Art and Design</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-ai-3.html">
                <img src="../assets/tech/tech-page-article-ai-3.jpg" alt="AI and Privacy: How Machine Learning is Impacting Data Security" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href=../html/tech-articles/article-ai-3.html" style="color: black;">AI and Privacy: How Machine Learning is Impacting Data Security</a></h3>
            </div>
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-8.html">
                <img src="../assets/tech/tech-page-article-ai-8.jpg" alt="The Role of AI in Climate Change: Can Machines Help Save the Planet?" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-8.html" style="color: black;">The Role of AI in Climate Change: Can Machines Help Save the Planet?</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-ai-9.html">
                <img src="../assets/tech/tech-page-article-ai-9.jpg" alt="Ethics in AI: Navigating the Dangers of Machine Intelligence" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-9.html" style="color: black;">Ethics in AI: Navigating the Dangers of Machine Intelligence</a></h3>
            </div>
			<div class="page-block">
			<a href="../html/tech-articles/article-ai-1.html">
                <img src="../assets/tech/tech-page-article-ai-1.jpg" alt="AI Breakthroughs: The Most Exciting Developments in 2025" />
				</a>
				<a href="?category=ai">
                <span class="category-tag">Artificial Intelligence</span>
             </a>
				<h3><a href="../html/tech-articles/article-ai-1.html" style="color: black;">AI Breakthroughs: The Most Exciting Developments in 2025</a></h3>
            </div>           
        `;
    } else if (category === 'gear') {
        articlesHtml = `
            <!-- Featured Story -->
            <div class="page-block featured">
			<a href="../html/tech-articles/article-gear-3.html">
                <img src="../assets/tech/tech-page-article-gear-3.jpg" alt="Polaroid Flip" />
				</a>
                <h3><a href="../html/tech-articles/article-gear-3.html" style="color: black;">Polaroid Flip: A Retro-Inspired Instant Camera for Modern Times</a></h3>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
                <p> Polaroid has introduced the Flip, a £199.99 instant camera that combines nostalgic design with contemporary features. This retro-inspired device offers photography enthusiasts a blend of analog charm and modern convenience, making it a standout choice for capturing moments in a tangible format.</p>
            </div>

            <!-- Article List -->          
			<div class="page-block">
			<a href="../html/tech-articles/article-gear-1.html">
                <img src="../assets/tech/tech-page-article-gear-1.jpg" alt="The Future of Smart Gear: How Wearables Are Changing Our Lives" /> 
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-1.html" style="color: black;">The Future of Smart Gear: How Wearables Are Changing Our Lives</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-gear-4.html">
                <img src="../assets/tech/tech-page-article-gear-4.jpg" alt="The Evolution of Gaming Gear: From Controllers to Virtual Reality" />
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-4.html" style="color: black;">The Evolution of Gaming Gear: From Controllers to Virtual Reality</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-gear-5.html">
                <img src="../assets/tech/tech-page-article-gear-5.jpg" alt="Tech Gear for Home Offices: Must-Have Devices for Remote Work" />
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-5.html" style="color: black;">Tech Gear for Home Offices: Must-Have Devices for Remote Work</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-gear-6.html">
                <img src="../assets/tech/tech-page-article-gear-6.jpg" alt="The Ultimate Tech Gear Setup in 2025" /> 
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-6.html" style="color: black;">The Ultimate Tech Gear Setup in 2025</a></h3> 
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-gear-2.html">
                <img src="../assets/tech/tech-page-article-gear-2.jpg" alt="The Battle of AI Assistants: Siri vs. Alexa vs. Google Assistant" />
				</a>
				<a href="?category=gear">
                <span class="category-tag">Gear</span>
             </a>
				<h3><a href="../html/tech-articles/article-gear-2.html" style="color: black;">The Battle of AI Assistants: Siri vs. Alexa vs. Google Assistant</a></h3>
            </div>          
        `;
    } else if (category === 'space') {
        articlesHtml = `
            <!-- Featured Story -->
            <div class="page-block featured">
			<a href="../html/tech-articles/article-space-1.html">
                <img src="../assets/tech/tech-page-article-space-1.jpg" alt="SpaceX and the Future of Mars Exploration" />
				</a>
                <h3><a href="../html/tech-articles/article-space-1.html" style="color: black;">SpaceX and the Future of Mars Exploration</a></h3>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <p>SpaceX's ambitious plans for Mars exploration are nearing fruition. Discover the technology, challenges, and future implications of these missions.</p>
            </div>

            <!-- Article List -->
            <div class="page-block">
			<a href="../html/tech-articles/article-space-6.html">
                <img src="../assets/tech/tech-page-article-space-6.jpg" alt="NASA Artemis Mission" />
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-6.html" style="color: black;">NASA's Artemis: Returning to the Moon</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-space-2.html">
                <img src="../assets/tech/tech-page-article-space-2.jpg" alt="Mars Colonization" />
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-2.html" style="color: black;">The Quest to Colonize Mars</a></h3>
            </div>
			<div class="page-block">
			<a href="../html/tech-articles/article-space-7.html">
                <img src="../assets/tech/tech-page-article-space-7.jpg" alt="Kuiper internet satellites" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
                <h3><a href="../html/tech-articles/article-space-7.html" style="color: black;">Amazon targets April 9 launch of first Kuiper internet satellites</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-space-5.html">
                <img src="../assets/tech/tech-page-article-space-5.jpg" alt="Breakthroughs in Exoplanet Discovery" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-5.html" style="color: black;">The Search for Alien Life: Breakthroughs in Exoplanet Discovery</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-space-8.html">
                <img src="../assets/tech/tech-page-article-space-8.jpg" alt="How Startups are Shaping the Final Frontier" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-8.html" style="color: black;">Private Space Ventures: How Startups are Shaping the Final Frontier</a></h3>
				</div>
            <div class="page-block">
			<a href="../html/tech-articles/article-space-3.html">
                <img src="../assets/tech/tech-page-article-space-3.jpg" alt="The Future of Commercial Travel Beyond Earth" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-3.html" style="color: black;">Space Tourism: The Future of Commercial Travel Beyond Earth</a></h3>
            </div>
			<div class="page-block">
			<a href="../html/tech-articles/article-space-4.html">
                <img src="../assets/tech/tech-page-article-space-4.jpg" alt="A Look at Orbital Habitats" />
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-4.html" style="color: black;">Building the Next Generation of Space Stations: A Look at Orbital Habitats</a></h3>
            </div>
            <div class="page-block">
			<a href="../html/tech-articles/article-space-9.html">
                <img src="../assets/tech/tech-page-article-space-9.jpg" alt="The Hunt for Life Beyond Our Solar System" /> 
				</a>
				<a href="?category=space">
                <span class="category-tag">Space</span>
             </a>
				<h3><a href="../html/tech-articles/article-space-9.html" style="color: black;">Astrobiology: The Hunt for Life Beyond Our Solar System</a></h3>
            </div>          
        `;
    } else {
        articlesHtml = `
            <h2>No articles found for this category</h2>
            <p>It seems like there's no content available for this category right now.</p>
        `;
    }

    // Insert the articles HTML into the container
    articlesContainer.innerHTML = articlesHtml;
}

