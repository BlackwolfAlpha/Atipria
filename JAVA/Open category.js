function typeWriter(element, text, speed) {
    let i = 0;
    let cursor = document.getElementById('cursor');
    let interval = setInterval(function() {
        element.innerHTML = text.substring(0, i) + "<span class='cursor'>|</span>";
        i++;

        if (i > text.length) {
            clearInterval(interval);
            cursor.style.display = 'none';
        }
    }, speed);
}

function changeContent(content) {
    var mainContent = document.getElementById('main-content');
    var learnMoreContent = document.getElementById('additionalContentSideBySide');

    mainContent.style.opacity = 0;

    setTimeout(function() {
        mainContent.innerHTML = content;

        if (learnMoreContent && !learnMoreContent.classList.contains('hidden')) {
            learnMoreContent.classList.remove('show');
            setTimeout(function() {
                learnMoreContent.classList.add('hidden');
            }, 500);
        }

        var learnMoreBtn = document.getElementById('learnMoreBtn');
        if (learnMoreBtn) {
            learnMoreBtn.removeEventListener('click', handleLearnMoreClick);
            learnMoreBtn.addEventListener('click', handleLearnMoreClick);
        }

        const mainTitle = document.getElementById('main-title');
        typeWriter(mainTitle, "Welcome to Atipria Protection System", 100);

        mainContent.style.opacity = 1;
    }, 300);
}

function handleLearnMoreClick() {
    var learnMoreContent = document.getElementById('additionalContentSideBySide');
    if (learnMoreContent.classList.contains('hidden')) {
        learnMoreContent.classList.remove('hidden');
        setTimeout(function() {
            learnMoreContent.classList.add('show');
        }, 10);
    } else {
        learnMoreContent.classList.remove('show');
        setTimeout(function() {
            learnMoreContent.classList.add('hidden');
        }, 500);
    }
}

document.getElementById('nav-home').addEventListener('click', function() {
    changeContent(`
        <p class="text-gray-400 mb-2" id="welcome-text">👋 Welcome</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-4" id="main-title"></h1>
        <h2 class="text-2xl md:text-4xl font-bold text-gray-400 mb-8">Your ultimate digital security solution in the modern age! We protect you from seeing false content and from selling your personal information to external and unnecessary companies.</h2>
        <div class="flex space-x-4">
            <button class="px-4 py-2 bg-gray-800 text-white rounded-full" id="learnMoreBtn">Learn More <i class="fas fa-arrow-right ml-2"></i></button>
            <button class="px-4 py-2 bg-gray-800 text-white rounded-full" id="getStartedBtn" onclick="toggleTable()">Get Started <i class="fas fa-download ml-2"></i></button>
        </div>
    `);
});

document.getElementById('nav-portfolio').addEventListener('click', function() {
    changeContent(`
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Portfolio</h1>
        <p class="text-2xl md:text-4xl font-bold text-gray-400 mb-8">Explore our projects and case studies.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Project 1: Deepfake Detection</h3>
                <p class="text-gray-400">Our AI system can detect deepfake videos with high accuracy, ensuring the authenticity of video content.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Project 2: Image Recognition</h3>
                <p class="text-gray-400">Our image recognition technology can identify objects, people, and scenes in images, providing valuable insights.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Project 3: Content Analysis</h3>
                <p class="text-gray-400">Our content analysis tools can analyze text, images, and videos to extract meaningful information and patterns.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Project 4: Security Solutions</h3>
                <p class="text-gray-400">We provide advanced security solutions to protect digital assets and ensure data integrity.</p>
            </div>
        </div>
    `);
});

document.getElementById('nav-about').addEventListener('click', function() {
    changeContent(`
        <h1 class="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p class="text-2xl md:text-4xl font-bold text-gray-400 mb-8">Learn more about our mission and values.</p>
        <div class="flex flex-col space-y-4">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Our Mission</h3>
                <p class="text-gray-400">At Atipria, our mission is to provide advanced AI solutions to detect deepfakes and ensure the authenticity of digital content, <br> while safeguarding user privacy and preventing misuse of content on social media platforms.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Our Values</h3>
                <p class="text-gray-400">We prioritize integrity, innovation, and excellence in everything we do. Our goal is to create a safer digital world by developing advanced <br> technologies that protect user privacy and ensure the authenticity of digital content. Through continuous innovation, we strive to provide <br> solutions that address the ever-evolving challenges in the digital landscape, fostering trust and security for individuals and organizations alike.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Our Founders</h3>
                <div class="flex items-center space-x-4">
                    <a href="https://blackwolfalpha.github.io/Avital_SelfDescription/" target="_blank">
                        <img src="Data/webdesign/avital-ceo.png" alt="Founder 1" class="rounded-full">
                    </a>
                    <div>
                        <h4 class="text-lg font-bold">Avital Gladkih - CEO</h4>
                        <p class="text-gray-400">Avital is a creative and innovative entrepreneur with a passion for art and technology. She is committed to promoting new ventures and ideas, particularly in Israeli society and beyond.</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4 mt-4">
                    <img src="Data/webdesign/daniel-cmo.png" alt="Founder 2" class="rounded-full">
                    <div>
                        <h4 class="text-lg font-bold">Daniel Biton - CMO</h4>
                        <p class="text-gray-400">Daniel is a visionary entrepreneur with a background in computer science. She is dedicated to driving innovation and excellence at Atipria.</p>
                    </div>
                </div>
            </div>
        </div>
    `);
});

document.getElementById('nav-contact').addEventListener('click', function() {
    changeContent(`
        <h2 class="text-4xl md:text-6xl font-bold mb-4">Contact Us</h2>
        <p class="text-2xl md:text-4xl font-bold text-gray-400 mb-8">Get in touch with us for any inquiries or support.</p>
        <form id="contact-form" class="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
            <label class="block text-white text-lg mb-2">Name</label>
            <input type="text" id="name" class="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700" placeholder="Enter your name">

            <label class="block text-white text-lg mb-2">Email</label>
            <input type="email" id="email" class="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700" placeholder="Enter your email">

            <label class="block text-white text-lg mb-2">Message</label>
            <textarea id="message" class="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700" rows="4" placeholder="Your message"></textarea>

            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Send Message <i class="fas fa-paper-plane ml-2"></i></button>
        </form>
    `);

    setTimeout(() => {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            emailjs.init("your_user_id");

            const templateParams = {
                name: name,
                email: email,
                message: message
            };

            emailjs.send('your_service_id', 'your_template_id', templateParams)
                .then(function(response) {
                    alert("Thank you for reaching out! We will get back to you soon.");
                }, function(error) {
                    alert("Oops! Something went wrong. Please try again.");
                });
        });
    }, 500);
});

document.getElementById('nav-pricing').addEventListener('click', function() {
    changeContent(`
        <h1 class="Main-pricing-title">Pricing Plans</h1>
        <p class="Main-pricing-subtitle">Choose the best plan for your needs.</p>
        <div class="pricing-grid">
            <div class="pricing-card">
                <h3 class="plan-title">Free Plan</h3>
                <p class="plan-description">Basic features for personal use.</p>
                <p class="plan-price">Price: $0 / month</p>
                <ul class="plan-features">
                    <li>✔ Basic Deepfake Detection</li>
                    <li>✔ Limited Image Recognition</li>
                    <li>✖ Advanced Security Solutions</li>
                    <li>✔ Devices: 1 device</li>
                </ul>
                <button class="plan-btn get-started-btn">Get Started</button>
            </div>
            <div class="pricing-card">
                <h3 class="plan-title">Premium Plan</h3>
                <p class="plan-description">Advanced features for professionals.</p>
                <p class="plan-price">Price: $19.99 / month</p>
                <ul class="plan-features">
                    <li>✔ Advanced Deepfake Detection</li>
                    <li>✔ Full Image Recognition</li>
                    <li>✔ AI-Powered Security Solutions</li>
                    <li>✔ Devices: Up to 5 devices</li>
                </ul>
                <button class="plan-btn upgrade-btn">Upgrade Now</button>
            </div>
            <div class="pricing-card">
                <h3 class="plan-title">Business Plan</h3>
                <p class="plan-description">Comprehensive solutions for businesses.</p>
                <p class="plan-price">Price: $49.99 / month</p>
                <ul class="plan-features">
                    <li>✔ Enterprise Deepfake Detection</li>
                    <li>✔ Bulk Image Processing</li>
                    <li>✔ Custom AI Security Features</li>
                    <li>✔ Devices: Up to 20 devices</li>
                </ul>
                <button class="plan-btn get-business-btn">Get Business</button>
            </div>
            <div class="pricing-card">
                <h3 class="plan-title">Enterprise Plan</h3>
                <p class="plan-description">Ultimate security and AI solutions for enterprises.</p>
                <p class="plan-price">Price: Contact Sales for pricing</p>
                <ul class="plan-features">
                    <li>✔ AI-Powered Deepfake & Fraud Detection</li>
                    <li>✔ Unlimited Image Recognition</li>
                    <li>✔ Dedicated AI Security Consultant</li>
                    <li>✔ Devices: Unlimited devices</li>
                </ul>
                <button class="plan-btn contact-sales-btn">Contact Sales</button>
            </div>
        </div>
    `);
});

document.querySelector('.download-btn').addEventListener('click', function() {
    document.getElementById('nav-pricing').click();
});
