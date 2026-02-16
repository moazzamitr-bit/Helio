
import React from 'react';
import { Service } from './types';

// Updated IconWrapper to make children optional to resolve TypeScript prop errors when used in JSX
const IconWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="w-12 h-12 flex items-center justify-center text-orange-500">
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </div>
);

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Performance Marketing',
    description: 'Data-driven campaigns across Google, Meta, and LinkedIn optimized for the UAE market.',
    icon: (
      <IconWrapper>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </IconWrapper>
    ),
    fullDescription: `Our performance marketing suite is engineered for the high-competition UAE landscape. We don't just buy ads; we architect ecosystems that convert.`,
    features: ['Precision Retargeting', 'Multi-lingual Ad Copy (Arabic/English)', 'Real-time ROI Tracking', 'Competitor Intelligence'],
    benefits: 'Expect a minimum 30% reduction in CPA within the first 90 days of implementation.',
    imagePrompt: "A high-tech digital dashboard with glowing orange data visualizations, 3D growth arrows, and a futuristic Burj Khalifa skyline in the background, cinematic lighting, 8k resolution, luxury tech aesthetic.",
    caseStudy: {
      client: 'Luxury Residence Downtown',
      challenge: 'High cost-per-lead for off-plan properties in a saturated market.',
      solution: 'Hyper-targeted Meta funnel using custom audiences of high-net-worth individuals and AI-driven bidding.',
      results: [
        { label: 'CPA Reduction', value: '42%' },
        { label: 'Qualified Leads', value: '1,200+' },
        { label: 'Conversion Rate', value: '18%' }
      ]
    },
    testimonials: [
      {
        quote: "HELIO transformed our digital acquisition strategy. We've seen a quality of leads we didn't think possible in the Dubai market.",
        author: "Ahmed Al-Farsi",
        role: "Director of Sales",
        company: "Emaar Properties"
      }
    ]
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Crafting luxury narratives and visual languages that resonate with Middle Eastern audiences.',
    icon: (
      <IconWrapper>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </IconWrapper>
    ),
    fullDescription: 'In a region where luxury is standard, your brand needs a soul. We weave local heritage with global modernism to create timeless identities.',
    features: ['Visual Strategy', 'Luxury Typography', 'Brand Voice & Tone', 'Cultural Alignment'],
    benefits: 'Establish an emotional connection with the high-net-worth demographic of the GCC.',
    imagePrompt: "Premium gold-embossed brand stationary, elegant minimalist typography, desert silk textures, professional studio lighting, luxury aesthetic, soft shadows, warm tones.",
    caseStudy: {
      client: 'Al-Majlis Perfumery',
      challenge: 'A traditional heritage brand struggling to appeal to younger, globalized Emiratis.',
      solution: 'A total brand overhaul blending minimalist aesthetic with traditional calligraphy and a "Modern Heritage" voice.',
      results: [
        { label: 'Brand Awareness', value: '+200%' },
        { label: 'Gen-Z Engagement', value: '+85%' },
        { label: 'New Store Openings', value: '3' }
      ]
    },
    testimonials: [
      {
        quote: "They captured the essence of our heritage while making us look like a global fashion powerhouse. Exceptional vision.",
        author: "Fatima Al-Mansouri",
        role: "Founder",
        company: "Al-Majlis"
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Engaging content and community management tailored to diverse demographics.',
    icon: (
      <IconWrapper>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </IconWrapper>
    ),
    fullDescription: 'Social media in Dubai is a lifestyle. We manage your presence to ensure your brand is not just seen, but talked about in the right circles.',
    features: ['Influencer Synergies', 'Viral Content Strategy', 'Community Engagement', 'Trend Jacking'],
    benefits: 'Achieve 5x organic reach through strategic storytelling and platform-native content.',
    imagePrompt: "A sleek smartphone displaying high-end Instagram reels of a Dubai lifestyle, neon orange accents, blurred luxury cafe background, depth of field, vibrant colors, social media interface elements.",
    caseStudy: {
      client: 'Dubai Hills Boutique Café',
      challenge: 'Low footfall despite high-quality products in a competitive F&B neighborhood.',
      solution: 'Reels-first content strategy focusing on the "experience" rather than just the menu, paired with micro-influencer events.',
      results: [
        { label: 'Instagram Reach', value: '1.2M' },
        { label: 'Table Bookings', value: '+150%' },
        { label: 'UGC Content', value: '500+/mo' }
      ]
    },
    testimonials: [
      {
        quote: "Our engagement rates exploded in weeks. People don't just follow us; they visit because of what they see online.",
        author: "Marco Rossi",
        role: "Managing Director",
        company: "Gourmet Group Dubai"
      }
    ]
  },
  {
    id: 'content-creation',
    title: 'Creative Content',
    description: 'High-end photography, videography, and copywriting with elegance.',
    icon: (
      <IconWrapper>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </IconWrapper>
    ),
    fullDescription: 'Visual excellence is the entry ticket. Our studio produces cinema-grade content that captures the grandeur of your brand.',
    features: ['Commercial Videography', 'Product Photography', '3D Motion Graphics', 'Copywriting for Luxury'],
    benefits: 'Visual assets that perform 70% better in engagement metrics than stock-based creative.',
    imagePrompt: "A high-end cinema camera on a gimbal in a modern Dubai studio, soft box lighting, lens flare, professional production environment, creative energy, 8k.",
    caseStudy: {
      client: 'Marina Yacht Charters',
      challenge: 'Static imagery failed to convey the premium emotion of luxury yacht rentals.',
      solution: 'Cinematic FPV drone footage and lifestyle-focused video storytelling for the "Dream Charter" campaign.',
      results: [
        { label: 'Video Completion', value: '92%' },
        { label: 'Direct Inquiries', value: '+300%' },
        { label: 'Ad Spend ROI', value: '8.5x' }
      ]
    },
    testimonials: [
      {
        quote: "The quality of work produced by HELIO's creative team is simply on another level. It's world-class cinematography.",
        author: "James Wilson",
        role: "Marketing Manager",
        company: "Marina Luxe"
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO & SEM',
    description: 'Dominating search results in both Arabic and English to drive organic growth.',
    icon: (
      <IconWrapper>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </IconWrapper>
    ),
    fullDescription: 'Search is evolving. We optimize for the intent behind the query, ensuring you own the top of the search engine results pages.',
    features: ['Local SEO (Google Maps)', 'Semantic Search Optimization', 'Arabic SEO Expertise', 'Technical Audits'],
    benefits: 'Secure the #1 spot for your most profitable keywords in the MENA region.',
    imagePrompt: "An abstract 3D representation of search rankings rising like skyscrapers in a digital Dubai, glowing light paths, organic nodes, tech-blue and HELIO orange colors.",
    caseStudy: {
      client: 'Abu Dhabi Tech Hub',
      challenge: 'Invisibility in search results for key regional technology and innovation terms.',
      solution: 'Strategic content cluster model and technical SEO optimization for multi-lingual search intent.',
      results: [
        { label: 'Organic Traffic', value: '+450%' },
        { label: 'Keyword Rank #1', value: '14' },
        { label: 'Domain Authority', value: '+25' }
      ]
    },
    testimonials: [
      {
        quote: "We now dominate the search landscape for our sector. The visibility growth has been organic and consistent.",
        author: "Hassan Al-Zarooni",
        role: "IT Director",
        company: "AD Innovation"
      }
    ]
  },
  {
    id: 'pr-events',
    title: 'PR & Influencer Outreach',
    description: `Connecting your brand with the UAE's most influential voices.`,
    icon: (
      <IconWrapper>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </IconWrapper>
    ),
    fullDescription: 'Trust is the currency of the Middle East. We leverage our deep-rooted relationships with media and influencers to build your authority.',
    features: ['Press Release Distribution', 'VIP Event Management', 'Crisis Communication', 'Influencer Gifting'],
    benefits: 'Gain placements in Tier-1 publications like Gulf Business and Arabian Business.',
    imagePrompt: "A high-profile networking event at a Dubai rooftop lounge at night, elegant people, city lights, Burj Khalifa background, professional PR ambiance, premium feel.",
    caseStudy: {
      client: 'Global FinTech Launch',
      challenge: 'Entering the UAE market with zero established local trust or media footprint.',
      solution: 'An exclusive media-first gala at the Museum of the Future followed by a white-paper launch in top-tier Arabic press.',
      results: [
        { label: 'Press Clippings', value: '45+' },
        { label: 'EWA (Earned Media)', value: '$250k' },
        { label: 'Stakeholder Leads', value: '120' }
      ]
    },
    testimonials: [
      {
        quote: "Our launch was the talk of the town. HELIO opened doors that we couldn't have reached on our own.",
        author: "Elena Petrova",
        role: "Global PR Director",
        company: "FinTech Hub"
      }
    ]
  }
];

export const PERFORMANCE_DATA = [
  { name: 'Month 1', organic: 4000, paid: 2400 },
  { name: 'Month 2', organic: 5200, paid: 3100 },
  { name: 'Month 3', organic: 6800, paid: 4800 },
  { name: 'Month 4', organic: 8900, paid: 5900 },
  { name: 'Month 5', organic: 12000, paid: 8200 },
  { name: 'Month 6', organic: 15500, paid: 9100 },
];
