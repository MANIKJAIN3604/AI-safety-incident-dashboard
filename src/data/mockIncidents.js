const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics",
    severity: "Medium",
    reportedDate: "2025-04-01",
    location: "Cloud Server #A452, EU West Region",
    assignedTo: "Sarah Chen",
    status: "Under Investigation",
    model: "RecSys v3.2",
    category: "Algorithmic Fairness",
    impactLevel: "Medium",
    resolution: "Pending",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Algorithm bias visualization" 
      }
    ]
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information",
    severity: "High",
    reportedDate: "2025-03-28",
    location: "Safety Documentation System",
    assignedTo: "Miguel Rodriguez",
    status: "Resolved",
    model: "SafetyGPT v2.1",
    category: "Information Integrity",
    impactLevel: "High",
    resolution: "Implemented fact-checking system with external references",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Safety system interface showing hallucination" 
      },
      { 
        type: "pdf", 
        url: "example-report.pdf", 
        caption: "Incident Analysis Report" 
      }
    ]
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata",
    severity: "Low",
    reportedDate: "2025-03-25",
    location: "Customer Portal Chatbot",
    assignedTo: "Dr. Emma Watson",
    status: "Resolved",
    model: "AssistBot v1.7",
    category: "Data Privacy",
    impactLevel: "Low",
    resolution: "Added metadata filtering layer to chatbot responses",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Chat log showing metadata exposure" 
      }
    ]
  },
  {
    id: 4,
    title: "AI Recommendation Bias Detected",
    severity: "Medium",
    reportedDate: "2025-03-20",
    description: "Our content recommendation algorithm showed statistical bias toward certain demographic groups. Analysis showed a 23% higher recommendation rate for content from specific creators. Recalibration of the fairness parameters is recommended.",
    location: "Content Platform, Recommendation Engine",
    assignedTo: "Alex Johnson",
    status: "In Progress",
    model: "RecommendAI v3.5",
    category: "Algorithmic Fairness",
    impactLevel: "Medium",
    resolution: "Fairness parameters being adjusted and tested",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Analytics dashboard showing bias metrics"
      }
    ]
  },
  {
    id: 5,
    title: "Autonomous Vehicle Near-Miss",
    severity: "High",
    reportedDate: "2025-03-15",
    description: "Test autonomous vehicle failed to recognize a pedestrian in unusual clothing, leading to a late braking event. Safety driver intervened. Incident occurred in low light conditions. Computer vision system needs additional training for edge cases.",
    location: "Test Track B, Night Testing Facility",
    assignedTo: "Raj Patel",
    status: "Under Review",
    model: "AutoDrive v2.3, Vision System RV-450",
    category: "Physical Safety",
    impactLevel: "Potentially Severe",
    resolution: "Vision system being retrained with new edge cases",
    media: [
      { 
        type: "video", 
        url: "https://example.com/video-placeholder.mp4", 
        caption: "Dashcam footage of incident" 
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1553098619-89f8ec37f174?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Vehicle sensor data visualization" 
      }
    ]
  },
  {
    id: 6,
    title: "Natural Language Processing Data Leak",
    severity: "Low",
    reportedDate: "2025-03-10",
    description: "Minor data leak in NLP training procedure where model memorized and reproduced non-sensitive but proprietary information. The model was able to output specific training examples verbatim when prompted in a specific way.",
    location: "Research Lab, NLP Division",
    assignedTo: "Yuki Tanaka",
    status: "Resolved",
    model: "NLP-Core v7.1",
    category: "Data Privacy",
    impactLevel: "Low",
    resolution: "Training procedure modified to prevent memorization",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Code snippet showing data processing"
      }
    ]
  },
  {
    id: 7,
    title: "Chatbot Inappropriate Response",
    severity: "Low",
    reportedDate: "2025-03-05",
    description: "Customer service chatbot provided inappropriate responses to certain customer queries. The bot occasionally used casual language and humor in serious service situations, leading to customer complaints. Tone control needs adjustment.",
    location: "Customer Service Portal",
    assignedTo: "Lisa Montgomery",
    status: "Resolved",
    model: "ServiceBot Pro",
    category: "User Experience",
    impactLevel: "Low",
    resolution: "Response tone filter implemented and context detection improved",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Chat transcript showing inappropriate responses" 
      }
    ]
  },
  {
    id: 8,
    title: "Facial Recognition Misidentification",
    severity: "High",
    reportedDate: "2025-03-01",
    description: "Facial recognition system incorrectly identified individuals in a security checkpoint, leading to temporary access denial for authorized personnel.",
    location: "Building A Security Entrance",
    assignedTo: "James Wilson",
    status: "Resolved",
    model: "FaceID Pro v4.2",
    category: "Algorithmic Accuracy",
    impactLevel: "Medium",
    resolution: "Algorithm retrained with more diverse dataset, confidence threshold adjusted",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Security system interface" 
      }
    ]
  },
  {
    id: 9,
    title: "AI Image Generator Produces Dangerous Content",
    severity: "Critical",
    reportedDate: "2025-02-28",
    description: "Image generation model created realistic instructions for dangerous activities when prompted in specific ways. Safety filters failed to catch certain prompts.",
    location: "Creative Tools Platform",
    assignedTo: "Dr. Samuel Kim",
    status: "Under Investigation",
    model: "CreativeAI v2.0",
    category: "Content Safety",
    impactLevel: "High",
    resolution: "Emergency content filter patch deployed, comprehensive review ongoing",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-4.0.3&q=85&w=1920&h=1080", 
        caption: "Prompt testing interface with redacted content" 
      }
    ]
  },
  {
    id: 10,
    title: "Sentiment Analysis Misclassification",
    severity: "Low",
    reportedDate: "2025-02-25",
    description: "Customer feedback sentiment analyzer consistently misclassified sarcastic comments as positive feedback, skewing satisfaction metrics.",
    location: "Customer Insights Platform",
    assignedTo: "Priya Sharma",
    status: "Resolved",
    model: "SentimentCore v3.4",
    category: "Natural Language Understanding",
    impactLevel: "Low",
    resolution: "Improved sarcasm detection module implemented",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Sentiment analysis dashboard" 
      }
    ]
  },
  {
    id: 11,
    title: "Trading Algorithm Flash Crash",
    severity: "Critical",
    reportedDate: "2025-02-20",
    description: "Automated trading algorithm initiated rapid selling cascade during market volatility, amplifying price movements. Circuit breakers activated to halt trading.",
    location: "Algorithmic Trading Platform",
    assignedTo: "Marcus Blackwell",
    status: "Resolved",
    model: "TradeBot Alpha",
    category: "Financial Systems",
    impactLevel: "Severe",
    resolution: "Volatility circuit breakers enhanced, algorithm risk parameters adjusted",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Market volatility chart during incident" 
      },
      { 
        type: "pdf", 
        url: "example-report.pdf", 
        caption: "Financial Impact Analysis" 
      }
    ]
  },
  {
    id: 12,
    title: "Healthcare Diagnosis System Error",
    severity: "High",
    reportedDate: "2025-02-15",
    description: "AI diagnostic tool suggested incorrect treatment plan for rare medical condition. Physician caught error before implementation.",
    location: "University Medical Center",
    assignedTo: "Dr. Helena Morris",
    status: "Under Investigation",
    model: "MedAssist v2.5",
    category: "Healthcare AI",
    impactLevel: "Potentially Severe",
    resolution: "System temporarily restricted to advisory role only with human verification",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Medical diagnostic interface" 
      }
    ]
  },
  {
    id: 13,
    title: "Smart Home Security Vulnerability",
    severity: "Medium",
    reportedDate: "2025-02-10",
    description: "Voice assistant in smart home system allowed unauthorized commands when triggered with specific ultrasonic patterns inaudible to humans.",
    location: "HomeSecure Product Line",
    assignedTo: "David Chen",
    status: "Resolved",
    model: "HomeAssist v1.8",
    category: "IoT Security",
    impactLevel: "Medium",
    resolution: "Firmware update deployed with ultrasonic filtering",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1558002038-1055e2bae2f4?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Smart home testing environment" 
      }
    ]
  },
  {
    id: 14,
    title: "Language Model Prompt Injection",
    severity: "Medium",
    reportedDate: "2025-02-05",
    description: "Users discovered method to override safety guidelines by embedding commands in seemingly innocuous prompts to our public-facing language model.",
    location: "Language API Service",
    assignedTo: "Olivia Martinez",
    status: "In Progress",
    model: "LinguaAI v5.0",
    category: "AI Safety",
    impactLevel: "Medium",
    resolution: "Prompt parsing system being redesigned",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Example of prompt injection technique" 
      }
    ]
  },
  {
    id: 15,
    title: "Automatic Content Moderation Failure",
    severity: "High",
    reportedDate: "2025-02-01",
    description: "Content moderation system failed to detect harmful material using subtle encoding techniques, allowing prohibited content to remain visible for 45 minutes.",
    location: "Social Media Platform",
    assignedTo: "Thomas Wright",
    status: "Resolved",
    model: "ModerateAI v3.2",
    category: "Content Moderation",
    impactLevel: "High",
    resolution: "Detection algorithm updated to recognize encoding patterns",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Moderation dashboard with redacted content" 
      }
    ]
  },
  {
    id: 16,
    title: "Adversarial Attack on Authentication System",
    severity: "Critical",
    reportedDate: "2025-01-28",
    description: "Adversarial attack on facial recognition authentication system allowed unauthorized access by using specially crafted patterns printed on clothing.",
    location: "Corporate HQ Access System",
    assignedTo: "Adam Fletcher",
    status: "Resolved",
    model: "SecureScan v2.0",
    category: "Authentication Security",
    impactLevel: "Critical",
    resolution: "Multi-factor authentication enforced, pattern detection added",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1594814393153-9095c06633f6?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Security testing of adversarial patterns" 
      }
    ]
  },
  {
    id: 17,
    title: "Translation System Cultural Insensitivity",
    severity: "Medium",
    reportedDate: "2025-01-25",
    description: "Neural translation system produced culturally insensitive translations for specific idioms and expressions, causing diplomatic tension in international communication.",
    location: "Global Communications Platform",
    assignedTo: "Clara Jimenez",
    status: "Resolved",
    model: "TranslateNow v4.5",
    category: "Cultural AI Safety",
    impactLevel: "Medium",
    resolution: "Cultural sensitivity module enhanced with expert-reviewed translations",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Translation example showing problematic output" 
      }
    ]
  },
  {
    id: 18,
    title: "Predictive Policing Algorithm Bias",
    severity: "High",
    reportedDate: "2025-01-20",
    description: "Analysis of predictive policing system showed statistically significant bias against certain neighborhoods based on historical data patterns.",
    location: "City Police Department",
    assignedTo: "Dr. Michael Rivera",
    status: "Under Investigation",
    model: "SafetyPredict v2.1",
    category: "Algorithmic Justice",
    impactLevel: "High",
    resolution: "System suspended pending comprehensive bias audit",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Heat map showing resource allocation patterns" 
      },
      { 
        type: "pdf", 
        url: "example-report.pdf", 
        caption: "Preliminary Bias Analysis" 
      }
    ]
  },
  {
    id: 19,
    title: "AI Hiring Tool Gender Bias",
    severity: "Medium",
    reportedDate: "2025-01-15",
    description: "Resume screening AI showed preference for male candidates in technical roles despite equivalent qualifications. Pattern discovered during routine audit.",
    location: "HR Technology Platform",
    assignedTo: "Sophia Lee",
    status: "Resolved",
    model: "TalentScan v3.0",
    category: "Employment Equity",
    impactLevel: "Medium",
    resolution: "Algorithm retrained with balanced dataset, gender-neutral processing implemented",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Statistical analysis of hiring recommendations" 
      }
    ]
  },
  {
    id: 20,
    title: "Voice Authentication Spoofing",
    severity: "High",
    reportedDate: "2025-01-10",
    description: "Voice authentication system was compromised using synthesized voice created from public speech recordings. Attacker accessed user account.",
    location: "Banking Authentication System",
    assignedTo: "Nathan Black",
    status: "Resolved",
    model: "VoiceVerify v2.2",
    category: "Biometric Security",
    impactLevel: "High",
    resolution: "Liveness detection and randomized challenge phrases implemented",
    media: [
      { 
        type: "audio", 
        url: "example-audio.mp3", 
        caption: "Comparison of genuine vs. synthesized voice" 
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Voice authentication security interface" 
      }
    ]
  },
  {
    id: 21,
    title: "Drone Navigation Failure",
    severity: "Critical",
    reportedDate: "2025-01-05",
    description: "Autonomous drone delivery system experienced navigation failure due to unusual weather conditions, leading to emergency landing in public area.",
    location: "Urban Delivery Route #372",
    assignedTo: "Elijah Cooper",
    status: "Resolved",
    model: "DeliveryNav v1.5",
    category: "Autonomous Systems",
    impactLevel: "High",
    resolution: "Weather pattern detection improved, emergency protocols enhanced",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Drone telemetry data during incident" 
      }
    ]
  },
  {
    id: 22,
    title: "Data Poisoning Attack on Recommendation System",
    severity: "Medium",
    reportedDate: "2025-01-01",
    description: "Coordinated effort to manipulate recommendation algorithm through artificial user activity detected. System was promoting specific content based on falsified engagement.",
    location: "Media Streaming Platform",
    assignedTo: "Zoe Williams",
    status: "Resolved",
    model: "MediaRec v4.0",
    category: "Adversarial Attacks",
    impactLevel: "Medium",
    resolution: "Anomaly detection strengthened, suspicious activity patterns cataloged",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Engagement pattern analysis" 
      }
    ]
  },
  {
    id: 23,
    title: "Smart Traffic System Malfunction",
    severity: "High",
    reportedDate: "2024-12-28",
    description: "AI-controlled traffic light system experienced logic error during rush hour, creating gridlock in downtown area for 35 minutes.",
    location: "Metro Traffic Control Center",
    assignedTo: "Robert Torres",
    status: "Resolved",
    model: "TrafficFlow v2.3",
    category: "Smart Infrastructure",
    impactLevel: "High",
    resolution: "Redundancy systems implemented, manual override protocols improved",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Traffic flow visualization during incident" 
      }
    ]
  },
  {
    id: 24,
    title: "Deepfake Detection Evasion",
    severity: "High",
    reportedDate: "2024-12-25",
    description: "New technique for creating deepfake videos discovered that can bypass our detection systems. Videos appear authentic to both AI and human reviewers.",
    location: "Content Verification System",
    assignedTo: "Dr. Laura Chen",
    status: "In Progress",
    model: "DeepDetect v3.1",
    category: "Media Authenticity",
    impactLevel: "High",
    resolution: "Advanced detection techniques being developed with research partners",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Deepfake analysis workstation" 
      }
    ]
  },
  {
    id: 25,
    title: "Password Generator Vulnerability",
    severity: "Medium",
    reportedDate: "2024-12-20",
    description: "Security audit revealed AI password generator created predictable patterns in supposedly random passwords when certain user preferences were selected.",
    location: "Security Tools Suite",
    assignedTo: "Benjamin Harris",
    status: "Resolved",
    model: "PassGenAI v1.3",
    category: "Cybersecurity",
    impactLevel: "Medium",
    resolution: "Randomization algorithm completely rebuilt, all user passwords reset",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Password pattern analysis" 
      }
    ]
  },
  {
    id: 26,
    title: "Emotion Recognition Privacy Concern",
    severity: "Low",
    reportedDate: "2024-12-15",
    description: "Internal audit discovered our emotion recognition system was storing facial expressions longer than our privacy policy specified. No data was accessed externally.",
    location: "User Experience Research Lab",
    assignedTo: "Amanda Liu",
    status: "Resolved",
    model: "EmotionAI v2.0",
    category: "Privacy Compliance",
    impactLevel: "Low",
    resolution: "Data retention controls enforced, privacy audit scheduled quarterly",
    media: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1535231540604-72e8fbaf8cdb?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Data retention control panel" 
      }
    ]
  },
  {
    id: 27,
    title: "AI Game Bot Exploitation",
    severity: "Low",
    reportedDate: "2024-12-10",
    description: "Players discovered method to trick game AI into providing unfair advantages by exploiting specific movement patterns. In-game economy affected.",
    location: "Multiplayer Game Platform",
    assignedTo: "Lucas Wang",
    status: "Resolved",
    model: "GameMind v3.5",
    category: "Gaming",
    impactLevel: "Low",
    resolution: "AI behavior patterns randomized, exploitation technique neutralized",
    media: [
      { 
        type: "video", 
        url: "https://example.com/video-placeholder.mp4", 
        caption: "Gameplay showing exploitation technique" 
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&q=85&w=1920&h=1080",
        caption: "Gaming AI behavioral analysis" 
      }
    ]
  }
];

export default mockIncidents; 