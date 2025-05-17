import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">关于</h3>
            <p className="text-gray-600 dark:text-gray-400">
            ⚠️⚠️⚠️ 本网站内容为AI也是生成。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">联系</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            如果您有兴趣合作，请随时联系。
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, href: 'https://github.com/CasterWx', label: 'Github' },
                { icon: <Twitter size={20} />, href: 'https://x.com/RimaseToori', label: 'Twitter' },
                { icon: <Mail size={20} />, href: 'mailto:antzuhl1998@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} AntzUhl.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;