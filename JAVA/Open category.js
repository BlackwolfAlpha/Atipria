function typeWriterCycle(element, texts, typingSpeed, erasingSpeed, pauseTime) {
    let currentTextIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function run() {
        if (!isErasing) {
            element.innerHTML = texts[currentTextIndex].substring(0, charIndex) + "<span class='cursor'>|</span>";
            if (charIndex < texts[currentTextIndex].length) {
                charIndex++;
                setTimeout(run, typingSpeed);
            } else {
                setTimeout(() => {
                    isErasing = true;
                    run();
                }, pauseTime);
            }
        } else {
            element.innerHTML = texts[currentTextIndex].substring(0, charIndex) + "<span class='cursor'>|</span>";
            if (charIndex > 0) {
                charIndex--;
                setTimeout(run, erasingSpeed);
            } else {
                isErasing = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(run, pauseTime);
            }
        }
    }
    run();
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
        if (mainTitle) {
            const texts = [
                "Welcome to Atipria Protection System!",
                "Your security is our priority!",
                "Atipria: Protection, reliability, peace of mind!",
                "Guarding your digital world!",
                "Securing what matters most!",
                "Welcome to the future of protection!"
            ];
            typeWriterCycle(mainTitle, texts, 100, 50, 1000);
        } else {
            console.error("Element with id 'main-title' not found.");
        }

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
                <p class="text-gray-400">At Atipria, our mission is to provide advanced AI solutions to detect deepfakes and ensure the authenticity of digital content,<br> while safeguarding user privacy and preventing misuse of content on social media platforms.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Our Values</h3>
                <p class="text-gray-400">We prioritize integrity, innovation, and excellence in everything we do. Our goal is to create a safer digital world by developing advanced<br> technologies that protect user privacy and ensure the authenticity of digital content.</p>
            </div>
            <div class="founders-container">
              <h3>Our Founders</h3>
              <div class="founder-item">
                <a href="https://blackwolfalpha.github.io/Avital_SelfDescription/" target="_blank">
                  <img src="Data/webdesign/avital-ceo.png" alt="Founder 1">
                </a>
                <div>
                  <h4>Avital Gladkih - CEO</h4>
                  <p>Avital is a creative and innovative entrepreneur with a passion for art and technology.</p>
                </div>
              </div>
              <div class="founder-item">
                <img src="Data/webdesign/daniel-cmo.png" alt="Founder 2">
                <div>
                  <h4>Daniel Biton - CMO</h4>
                  <p>Daniel is a visionary entrepreneur with a background in computer science.</p>
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
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Send Message <i class="fas fa-paper-plane ml-2"></i>
          </button>
      </form>
    `);

    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (!form) return;
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        emailjs.init("your_user_id");
        const templateParams = { name, email, message };
        try {
          const response = await emailjs.send('your_service_id', 'your_template_id', templateParams);
          console.log("Email sent successfully:", response);
          alert("Thank you for reaching out! We will get back to you soon.");
        } catch (error) {
          console.error("Error sending email:", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      });
    }, 0);
});

document.getElementById('nav-pricing').addEventListener('click', function() {
    changeContent(`
        <h1 class="Main-pricing-title">Pricing Plans</h1>
        <p class="Main-pricing-subtitle">Choose the best plan for your needs.</p>
        <div class="pricing-grid">
            <!-- Free Plan -->
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
                <button class="plan-btn get-started-btn"
                    data-plan-title="Free Plan"
                    data-plan-price="$0 / month"
                    data-plan-details="Basic Deepfake Detection, Limited Image Recognition, Devices: 1 device">
                    Get Started
                </button>
            </div>
            <!-- Premium Plan -->
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
                <button class="plan-btn upgrade-btn"
                    data-plan-title="Premium Plan"
                    data-plan-price="$19.99 / month"
                    data-plan-details="Advanced Deepfake Detection, Full Image Recognition, AI-Powered Security Solutions, Devices: Up to 5 devices">
                    Upgrade Now
                </button>
            </div>
            <!-- Business Plan -->
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
                <button class="plan-btn get-business-btn"
                    data-plan-title="Business Plan"
                    data-plan-price="$49.99 / month"
                    data-plan-details="Enterprise Deepfake Detection, Bulk Image Processing, Custom AI Security Features, Devices: Up to 20 devices">
                    Get Business
                </button>
            </div>
            <!-- Enterprise Plan -->
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
                <button class="plan-btn contact-sales-btn"
                    data-plan-title="Enterprise Plan"
                    data-plan-price="Contact Sales"
                    data-plan-details="AI-Powered Deepfake & Fraud Detection, Unlimited Image Recognition, Dedicated AI Security Consultant, Devices: Unlimited">
                    Contact Sales
                </button>
            </div>
        </div>

        <!-- Modal HTML -->
        <div id="purchase-modal">
            <div class="modal-wrapper">
                <span id="close-modal">&times;</span>
                <div class="modal-container">
                    <div class="modal-left">
                        <div class="payment-info">
                            <p class="plan-name text-lg"></p>
                            <p class="plan-price text-6xl"></p>
                            <p class="mt-4 text-sm">Package Details:</p>
                            <ul class="package-list"></ul>
                        </div>
                    </div>
                    <div class="modal-right">
                        <div class="payment-header">
                            <h1 class="text-2xl font-bold">Payments</h1>
                            <div class="payment-logos">
                              <img alt="Visa logo" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"/>
                              <img alt="MasterCard logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"/>
                              <img alt="American Express logo" src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"/>
                              <img alt="Discover logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Discover.png"/>
                            </div>
                        </div>
                        <form id="payment-form">
                            <div class="form-group">
                                <label>Credit card number</label>
                                <input id="creditCardInput" type="number" placeholder="4584 -" maxlength="16">
                            </div>
                            <div class="form-row">
                                <div class="form-group half">
                                    <label>Expiration</label>
                                    <select id="expiration-month">
                                        <option value="">Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                                <div class="form-group half">
                                    <label>Year</label>
                                    <select id="expiration-year">
                                        <option value="">Year</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>CVC/CVV</label>
                                <input id="cvcInput" type="number" placeholder="3 or 4 digits code" maxlength="4">
                            </div>
                            <div class="form-group">
                                <label>Supported Companies</label>
                                <select id="supported-company">
                                    <option value="">Select Company</option>
                                    <option>Visa</option>
                                    <option>MasterCard</option>
                                    <option>American Express</option>
                                    <option>Discover</option>
                                    <option>PayPal</option>
                                    <option>Apple Pay</option>
                                    <option>Google Pay</option>
                                </select>
                            </div>
                            <button type="submit" class="pay-now-btn">Pay Now</button>
                        </form>
                        <!-- Element for payment feedback -->
                        <div id="payment-feedback"></div>
                        <div class="alternate-payment">
                            <p>or select other payment method</p>
                            <button class="paypal-btn">Pay with <span class="font-bold">PayPal</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    document.addEventListener('click', function(event) {
        if (event.target.matches('.plan-btn')) {
            const btn = event.target;
            const planTitle = btn.getAttribute('data-plan-title');
            const planPrice = btn.getAttribute('data-plan-price');
            const planDetails = btn.getAttribute('data-plan-details');

            const modal = document.getElementById('purchase-modal');
            modal.querySelector('.modal-left .payment-info .plan-name').innerText = planTitle;
            modal.querySelector('.modal-left .payment-info .plan-price').innerText = planPrice;

            const detailsList = modal.querySelector('.modal-left .payment-info .package-list');
            detailsList.innerHTML = '';
            if (planDetails) {
                planDetails.split(',').forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail.trim();
                    detailsList.appendChild(li);
                });
            }
            modal.setAttribute('data-selected-plan', planTitle);
            modal.style.display = 'block';
        }

        if (event.target.matches('#close-modal')) {
            document.getElementById('purchase-modal').style.display = 'none';
        }
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('purchase-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'payment-form') {
            e.preventDefault();

            const creditCard = document.getElementById('creditCardInput').value.trim();
            const expirationMonth = document.getElementById('expiration-month').value.trim();
            const expirationYear = document.getElementById('expiration-year').value.trim();
            const cvc = document.getElementById('cvcInput').value.trim();
            const supportedCompany = document.getElementById('supported-company').value.trim();

            let missingFields = [];
            if (!creditCard) missingFields.push("Credit Card Number");
            if (!expirationMonth) missingFields.push("Expiration Month");
            if (!expirationYear) missingFields.push("Expiration Year");
            if (!cvc) missingFields.push("CVC/CVV");
            if (!supportedCompany) missingFields.push("Supported Company");

            const feedback = document.getElementById('payment-feedback');
            feedback.innerHTML = '';
            feedback.className = '';

            if (missingFields.length > 0) {
                feedback.innerHTML = `<span class="error-icon">✖</span> Missing required fields: ${missingFields.join(', ')}`;
                feedback.classList.add('shake');
                return;
            }

            feedback.innerHTML = 'Processing...';
            setTimeout(() => {
                const paymentSuccess = true;

                if (paymentSuccess) {
                    feedback.innerHTML = `<span class="success-icon">✔</span> Payment successful!`;
                    feedback.classList.add('success-animation');

                    const modal = document.getElementById('purchase-modal');
                    const selectedPlan = modal.getAttribute('data-selected-plan');
                    localStorage.setItem("userPlan", selectedPlan);

                    setTimeout(() => {
                        const orderNumber = generateOrderNumber();
                        alert(`Payment successful! Your plan (${selectedPlan}) has been activated.\nOrder Number: ${orderNumber}`);
                        modal.style.display = 'none';
                    }, 1500);
                } else {
                    feedback.innerHTML = `<span class="error-icon">✖</span> Payment failed! Please try again.`;
                    feedback.classList.add('failure-animation');
                }
            }, 2000);
        }
    });
});

document.querySelector('.download-btn').addEventListener('click', function() {
    document.getElementById('nav-pricing').click();
});


document.getElementById('nav-home-mobile').addEventListener('click', function() {
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

document.getElementById('nav-portfolio-mobile').addEventListener('click', function() {
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

document.getElementById('nav-about-mobile').addEventListener('click', function() {
    changeContent(`
        <h1 class="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p class="text-2xl md:text-4xl font-bold text-gray-400 mb-8">Learn more about our mission and values.</p>
        <div class="flex flex-col space-y-4">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Our Mission</h3>
                <p class="text-gray-400">At Atipria, our mission is to provide advanced AI solutions to detect deepfakes and ensure the authenticity of digital content,<br> while safeguarding user privacy and preventing misuse of content on social media platforms.</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Our Values</h3>
                <p class="text-gray-400">We prioritize integrity, innovation, and excellence in everything we do. Our goal is to create a safer digital world by developing advanced<br> technologies that protect user privacy and ensure the authenticity of digital content.</p>
            </div>
            <div class="founders-container">
              <h3>Our Founders</h3>
              <div class="founder-item">
                <a href="https://blackwolfalpha.github.io/Avital_SelfDescription/" target="_blank">
                  <img src="Data/webdesign/avital-ceo.png" alt="Founder 1">
                </a>
                <div>
                  <h4>Avital Gladkih - CEO</h4>
                  <p>Avital is a creative and innovative entrepreneur with a passion for art and technology.</p>
                </div>
              </div>
              <div class="founder-item">
                <img src="Data/webdesign/daniel-cmo.png" alt="Founder 2">
                <div>
                  <h4>Daniel Biton - CMO</h4>
                  <p>Daniel is a visionary entrepreneur with a background in computer science.</p>
                </div>
              </div>
            </div>
        </div>
    `);
});

document.getElementById('nav-contact-mobile').addEventListener('click', function() {
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
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Send Message <i class="fas fa-paper-plane ml-2"></i>
          </button>
      </form>
    `);

    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (!form) return;
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        emailjs.init("your_user_id");
        const templateParams = { name, email, message };
        try {
          const response = await emailjs.send('your_service_id', 'your_template_id', templateParams);
          console.log("Email sent successfully:", response);
          alert("Thank you for reaching out! We will get back to you soon.");
        } catch (error) {
          console.error("Error sending email:", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      });
    }, 0);
});

document.getElementById('nav-pricing-mobile').addEventListener('click', function() {
    changeContent(`
        <h1 class="Main-pricing-title">Pricing Plans</h1>
        <p class="Main-pricing-subtitle">Choose the best plan for your needs.</p>
        <div class="pricing-grid">
            <!-- Free Plan -->
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
                <button class="plan-btn get-started-btn"
                    data-plan-title="Free Plan"
                    data-plan-price="$0 / month"
                    data-plan-details="Basic Deepfake Detection, Limited Image Recognition, Devices: 1 device">
                    Get Started
                </button>
            </div>
            <!-- Premium Plan -->
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
                <button class="plan-btn upgrade-btn"
                    data-plan-title="Premium Plan"
                    data-plan-price="$19.99 / month"
                    data-plan-details="Advanced Deepfake Detection, Full Image Recognition, AI-Powered Security Solutions, Devices: Up to 5 devices">
                    Upgrade Now
                </button>
            </div>
            <!-- Business Plan -->
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
                <button class="plan-btn get-business-btn"
                    data-plan-title="Business Plan"
                    data-plan-price="$49.99 / month"
                    data-plan-details="Enterprise Deepfake Detection, Bulk Image Processing, Custom AI Security Features, Devices: Up to 20 devices">
                    Get Business
                </button>
            </div>
            <!-- Enterprise Plan -->
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
                <button class="plan-btn contact-sales-btn"
                    data-plan-title="Enterprise Plan"
                    data-plan-price="Contact Sales"
                    data-plan-details="AI-Powered Deepfake & Fraud Detection, Unlimited Image Recognition, Dedicated AI Security Consultant, Devices: Unlimited">
                    Contact Sales
                </button>
            </div>
        </div>

        <!-- Modal HTML -->
        <div id="purchase-modal">
            <div class="modal-wrapper">
                <span id="close-modal">&times;</span>
                <div class="modal-container">
                    <div class="modal-left">
                        <div class="payment-info">
                            <p class="plan-name text-lg"></p>
                            <p class="plan-price text-6xl"></p>
                            <p class="mt-4 text-sm">Package Details:</p>
                            <ul class="package-list"></ul>
                        </div>
                    </div>
                    <div class="modal-right">
                        <div class="payment-header">
                            <h1 class="text-2xl font-bold">Payments</h1>
                            <div class="payment-logos">
                              <img alt="Visa logo" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"/>
                              <img alt="MasterCard logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"/>
                              <img alt="American Express logo" src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"/>
                              <img alt="Discover logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Discover.png"/>
                            </div>
                        </div>
                        <form id="payment-form">
                            <div class="form-group">
                                <label>Credit card number</label>
                                <input id="creditCardInput" type="number" placeholder="4584 -" maxlength="16">
                            </div>
                            <div class="form-row">
                                <div class="form-group half">
                                    <label>Expiration</label>
                                    <select id="expiration-month">
                                        <option value="">Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                                <div class="form-group half">
                                    <label>Year</label>
                                    <select id="expiration-year">
                                        <option value="">Year</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>CVC/CVV</label>
                                <input id="cvcInput" type="number" placeholder="3 or 4 digits code" maxlength="4">
                            </div>
                            <div class="form-group">
                                <label>Supported Companies</label>
                                <select id="supported-company">
                                    <option value="">Select Company</option>
                                    <option>Visa</option>
                                    <option>MasterCard</option>
                                    <option>American Express</option>
                                    <option>Discover</option>
                                    <option>PayPal</option>
                                    <option>Apple Pay</option>
                                    <option>Google Pay</option>
                                </select>
                            </div>
                            <button type="submit" class="pay-now-btn">Pay Now</button>
                        </form>
                        <!-- Element for payment feedback -->
                        <div id="payment-feedback"></div>
                        <div class="alternate-payment">
                            <p>or select other payment method</p>
                            <button class="paypal-btn">Pay with <span class="font-bold">PayPal</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    document.addEventListener('click', function(event) {
        if (event.target.matches('.plan-btn')) {
            const btn = event.target;
            const planTitle = btn.getAttribute('data-plan-title');
            const planPrice = btn.getAttribute('data-plan-price');
            const planDetails = btn.getAttribute('data-plan-details');

            const modal = document.getElementById('purchase-modal');
            modal.querySelector('.modal-left .payment-info .plan-name').innerText = planTitle;
            modal.querySelector('.modal-left .payment-info .plan-price').innerText = planPrice;

            const detailsList = modal.querySelector('.modal-left .payment-info .package-list');
            detailsList.innerHTML = '';
            if (planDetails) {
                planDetails.split(',').forEach(function(detail) {
                    const li = document.createElement('li');
                    li.textContent = detail.trim();
                    detailsList.appendChild(li);
                });
            }
            modal.setAttribute('data-selected-plan', planTitle);
            modal.style.display = 'block';
        }

        if (event.target.matches('#close-modal')) {
            document.getElementById('purchase-modal').style.display = 'none';
        }
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('purchase-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'payment-form') {
            e.preventDefault();

            const creditCard = document.getElementById('creditCardInput').value.trim();
            const expirationMonth = document.getElementById('expiration-month').value.trim();
            const expirationYear = document.getElementById('expiration-year').value.trim();
            const cvc = document.getElementById('cvcInput').value.trim();
            const supportedCompany = document.getElementById('supported-company').value.trim();

            let missingFields = [];
            if (!creditCard) missingFields.push("Credit Card Number");
            if (!expirationMonth) missingFields.push("Expiration Month");
            if (!expirationYear) missingFields.push("Expiration Year");
            if (!cvc) missingFields.push("CVC/CVV");
            if (!supportedCompany) missingFields.push("Supported Company");

            const feedback = document.getElementById('payment-feedback');
            feedback.innerHTML = '';
            feedback.className = '';

            if (missingFields.length > 0) {
                feedback.innerHTML = `<span class="error-icon">✖</span> Missing required fields: ${missingFields.join(', ')}`;
                feedback.classList.add('shake');
                return;
            }

            feedback.innerHTML = 'Processing...';
            setTimeout(() => {
                const paymentSuccess = true;

                if (paymentSuccess) {
                    feedback.innerHTML = `<span class="success-icon">✔</span> Payment successful!`;
                    feedback.classList.add('success-animation');

                    const modal = document.getElementById('purchase-modal');
                    const selectedPlan = modal.getAttribute('data-selected-plan');
                    localStorage.setItem("userPlan", selectedPlan);

                    setTimeout(() => {
                        const orderNumber = generateOrderNumber();
                        alert(`Payment successful! Your plan (${selectedPlan}) has been activated.\nOrder Number: ${orderNumber}`);
                        modal.style.display = 'none';
                    }, 1500);
                } else {
                    feedback.innerHTML = `<span class="error-icon">✖</span> Payment failed! Please try again.`;
                    feedback.classList.add('failure-animation');
                }
            }, 2000);
        }
    });
});

document.querySelector('.download-btn').addEventListener('click', function() {
    document.getElementById('nav-pricing-mobile').click();
});
