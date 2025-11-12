import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ka';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.useCases': 'Use Cases',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Book a Demo',
    
    // Hero
    'hero.title': 'Turn Media Noise into Actionable Insights',
    'hero.subtitle': 'Automated media monitoring and analytics in real-time',
    'hero.poweredBy': 'Powered by AI-driven analytics for media intelligence teams.',
    'hero.cta.demo': 'Book a Demo',
    'hero.cta.contact': 'Contact Us',
    
    // Problem/Solution
    'problem.title': 'Understand Your Media Landscape Instantly',
    'problem.text': 'Organizations struggle to keep up with online news, print, and social content. Manual monitoring is time-consuming and incomplete.',
    'solution.automated': 'Automated media data collection',
    'solution.ai': 'AI-based sentiment and trend analysis',
    'solution.alerts': 'Real-time alerts and summaries',
    
    // Features
    'features.title': 'Powerful Features for Media Intelligence',
    'features.subtitle': 'Everything you need to monitor, analyze, and understand your media presence',
    'features.sov.title': 'Share of Voice',
    'features.sov.desc': 'Measure media coverage by channel and track your brand visibility across all platforms.',
    'features.benchmark.title': 'Benchmark Trends',
    'features.benchmark.desc': 'Compare performance over time with comprehensive trend analysis and historical data.',
    'features.channel.title': 'Channel Analytics',
    'features.channel.desc': 'Visualize media distribution across different channels and platforms.',
    'features.sentiment.title': 'Sentiment Analysis',
    'features.sentiment.desc': 'AI-powered detection of positive, neutral, and negative mentions in real-time.',
    'features.sources.title': 'Source Links',
    'features.sources.desc': 'Access original articles instantly with direct links to all mentioned sources.',
    'features.reports.title': 'Automated Reports',
    'features.reports.desc': 'Generate weekly, monthly, and annual summaries automatically.',
    
    // Use Cases
    'useCases.title': 'Trusted by Analysts Across Industries',
    'useCases.ecommerce.title': 'E-commerce',
    'useCases.ecommerce.desc': 'Track brand visibility and campaign impact across all marketing channels and media outlets.',
    'useCases.financial.title': 'Financial Sector',
    'useCases.financial.desc': 'Analyze public sentiment and market positioning with real-time financial media monitoring.',
    
    // CTA
    'cta.title': 'Get powerful media insights – instantly.',
    'cta.subtitle': 'Join leading organizations using AI-powered media monitoring',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    
    // Footer
    'footer.rights': '© 2025 Media Monitoring AI. All rights reserved.',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.security': 'Security',
  },
  ka: {
    // Navigation
    'nav.features': 'ფუნქციები',
    'nav.useCases': 'გამოყენება',
    'nav.contact': 'კონტაქტი',
    'nav.bookDemo': 'დემოს ჩვენება',
    
    // Hero
    'hero.title': 'გადააქციე მედია ხმაური ანალიტიკურ შედეგებად',
    'hero.subtitle': 'ავტომატიზირებული მედია მონიტორინგი და ანალიტიკა რეალურ დროში',
    'hero.poweredBy': 'AI-ზე დაფუძნებული ანალიტიკა მედია ინტელექტის გუნდებისთვის.',
    'hero.cta.demo': 'დემოს ჩვენება',
    'hero.cta.contact': 'დაგვიკავშირდით',
    
    // Problem/Solution
    'problem.title': 'გაიგე შენი მედია გარემო მყისიერად',
    'problem.text': 'ორგანიზაციებს უჭირთ ონლაინ ახალი ამბების, პრინტის და სოციალური კონტენტის მონიტორინგი. ხელით მონიტორინგი დროში ძვირია და არასრული.',
    'solution.automated': 'ავტომატიზირებული მედია მონაცემების შეგროვება',
    'solution.ai': 'AI-ზე დაფუძნებული სენტიმენტისა და ტრენდების ანალიზი',
    'solution.alerts': 'რეალურ დროში შეტყობინებები და შეჯამებები',
    
    // Features
    'features.title': 'ძლიერი ფუნქციები მედია ინტელექტისთვის',
    'features.subtitle': 'ყველაფერი რაც გჭირდება თქვენი მედია არსებობის მონიტორინგისთვის, ანალიზისთვის და გაგებისთვის',
    'features.sov.title': 'ხმის წილი',
    'features.sov.desc': 'გაზომე მედია გაშუქების არხებით და თვალი ადევნე ბრენდის ხილვადობას ყველა პლატფორმაზე.',
    'features.benchmark.title': 'ბენჩმარკ ტრენდები',
    'features.benchmark.desc': 'შეადარე შედეგები დროში ტრენდების ანალიზით და ისტორიული მონაცემებით.',
    'features.channel.title': 'არხის ანალიტიკა',
    'features.channel.desc': 'ვიზუალიზაცია მედია განაწილების სხვადასხვა არხებსა და პლატფორმებზე.',
    'features.sentiment.title': 'სენტიმენტის ანალიზი',
    'features.sentiment.desc': 'AI-ზე დაფუძნებული დადებითი, ნეიტრალური და უარყოფითი ხსენებების გამოვლენა რეალურ დროში.',
    'features.sources.title': 'წყაროს ბმულები',
    'features.sources.desc': 'მყისიერი წვდომა ორიგინალ სტატიებზე ყველა ხსენებული წყაროს პირდაპირი ბმულებით.',
    'features.reports.title': 'ავტომატური რეპორტები',
    'features.reports.desc': 'შექმენი კვირეული, თვიური და წლიური შეჯამებები ავტომატურად.',
    
    // Use Cases
    'useCases.title': 'სანდო ანალიტიკოსებისთვის სხვადასხვა ინდუსტრიებში',
    'useCases.ecommerce.title': 'ელ-კომერცია',
    'useCases.ecommerce.desc': 'თვალი ადევნე ბრენდის ხილვადობას და კამპანიის გავლენას ყველა მარკეტინგულ არხსა და მედია საშუალებაზე.',
    'useCases.financial.title': 'ფინანსური სექტორი',
    'useCases.financial.desc': 'გააანალიზე საზოგადოების განწყობა და ბაზრის პოზიციონირება რეალურ დროში ფინანსური მედია მონიტორინგით.',
    
    // CTA
    'cta.title': 'მიიღე ძლიერი მედია ანალიტიკა – მყისიერად.',
    'cta.subtitle': 'შეუერთდი წამყვან ორგანიზაციებს რომლებიც იყენებენ AI-ზე დაფუძნებულ მედია მონიტორინგს',
    
    // Contact
    'contact.title': 'დაგვიკავშირდით',
    'contact.subtitle': 'გაქვთ კითხვები? ჩვენ მოხარული ვიქნებით მოვისმინოთ თქვენი აზრი.',
    'contact.name': 'სახელი',
    'contact.email': 'ელ-ფოსტა',
    'contact.message': 'შეტყობინება',
    'contact.send': 'გაგზავნა',
    'contact.info': 'საკონტაქტო ინფორმაცია',
    
    // Footer
    'footer.rights': '© 2025 Media Monitoring AI. ყველა უფლება დაცულია.',
    'footer.company': 'კომპანია',
    'footer.about': 'ჩვენ შესახებ',
    'footer.careers': 'კარიერა',
    'footer.blog': 'ბლოგი',
    'footer.product': 'პროდუქტი',
    'footer.features': 'ფუნქციები',
    'footer.pricing': 'ფასები',
    'footer.security': 'უსაფრთხოება',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
