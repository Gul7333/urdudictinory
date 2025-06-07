// pages/about.js
import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
     

      <article className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto" dir='ltr'>
          {/* English Content */}
          <div className="mb-16">
            <header>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Urdu Zaban Dictionary</h1>
            
            </header>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Urdu Zaban Dictionary is the most comprehensive online resource for Urdu and English language learners, 
                translators, and enthusiasts. Our mission is to preserve and promote the beautiful Urdu language while 
                making it accessible to everyone worldwide.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Features</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>200,000+ words and phrases in both Urdu and English</li>
                <li>Detailed meanings with multiple definitions</li>
                <li>Synonyms and antonyms for vocabulary building</li>
                <li>Usage examples in sentences</li>
                <li>Roman Urdu transliteration for pronunciation help</li>
                <li>Historical word origins and etymology</li>
                <li>Daily word highlights and language tips</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our History</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2023, Urdu Zaban Dictionary began as a passion project by language scholars and tech 
                enthusiasts who wanted to create a modern, accessible Urdu dictionary. Today, we serve millions of 
                users monthly from all over the world.
              </p>
            </div>
          </div>
          
          {/* Urdu Content */}
          <div className="mb-16" dir="rtl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">اردو زبان ڈکشنری کے بارے میں</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                اردو زبان ڈکشنری اردو اور انگریزی زبان سیکھنے والوں، مترجمین اور شوقین افراد کے لیے سب سے جامع آن لائن ذریعہ ہے۔
                ہمارا مشن خوبصورت اردو زبان کو محفوظ کرنا اور فروغ دینا ہے جبکہ اسے دنیا بھر میں سب کے لیے قابل رسائی بنانا ہے۔
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">ہماری خصوصیات</h2>
              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li>اردو اور انگریزی میں 200,000+ الفاظ اور فقرے</li>
                <li>متعدد تعریفوں کے ساتھ تفصیلی معانی</li>
                <li>الفاظ کے ذخیرہ کے لیے مترادفات اور متضادات</li>
                <li>جملوں میں استعمال کی مثالیں</li>
                <li>تلفظ کی مدد کے لیے رومن اردو تحریر</li>
                <li>الفاظ کی تاریخی اصل اور اشتقاقیات</li>
                <li>یومیہ نمایاں الفاظ اور زبان کے نکات</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">ہماری تاریخ</h2>
              <p className="text-gray-700 mb-4">
                2023 میں قائم ہونے والی اردو زبان ڈکشنری کا آغاز زبان کے علماء اور ٹیکنالوجی کے شوقین افراد کے ایک جذبے کے منصوبے کے طور پر ہوا
                جو ایک جدید، قابل رسائی اردو ڈکشنری بنانا چاہتے تھے۔ آج، ہم دنیا بھر سے لاکھوں صارفین کو ماہانہ خدمت فراہم کرتے ہیں۔
              </p>
            </div>
          </div>
          
          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Team / ہماری ٹیم</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-medium">Dr. Ahmed Khan</h3>
                <p className="text-gray-600">Linguistics Expert / ماہر لسانیات</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-medium">Sarah Mahmood</h3>
                <p className="text-gray-600">Content Director / مواد ڈائریکٹر</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-medium">Ali Raza</h3>
                <p className="text-gray-600">Tech Lead / ٹیک لیڈ</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start Exploring Today / آج ہی دریافت شروع کریں</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join millions of users who rely on Urdu Zaban Dictionary for accurate translations and language learning.
              <br className="hidden md:block" />
              لاکھوں صارفین میں شامل ہوں جو درست تراجم اور زبان سیکھنے کے لیے اردو زبان ڈکشنری پر بھروسہ کرتے ہیں۔
            </p>
            <Link href={"/"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition">
              Search Dictionary /  ڈکشنری میں تلاش کریں 
            </button>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutPage;


export const metadata = {
    title: 'About page | Urdu Zaban Dictionary',
    description: ' Urdu Zaban Dictionary is the most comprehensive online resource for Urdu and English language learners, translators, and enthusiasts. Our mission is to preserve and promote the beautiful Urdu language while  making it accessible to everyone worldwide.',
    keywords: ['About page', 'About urdu zaban', 'Urdu zaban dictionary privacy'],
   
 
    
  };