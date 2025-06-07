// pages/privacy.js
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';



const PrivacyPolicy = () => {
  return (
    <>
     

      <article className="container mx-auto px-4 py-12 max-w-4xl" dir='ltr'>
        {/* English Version */}

        <section className="mb-16">
        <header>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        </header>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              At Urdu Zaban Dictionary, we take your privacy seriously. This policy explains what little data we collect 
              and how we use it to improve our service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data We Don't Collect</h2>
            <p className="text-gray-700 mb-4">
              We <strong>do not collect</strong> any of the following personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Your name or contact details</li>
              <li>Payment information (we don't process payments)</li>
              <li>Location data (beyond country-level from IP)</li>
              <li>Search history or dictionary lookups</li>
              <li>Any personally identifiable information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data We Do Collect</h2>
            <p className="text-gray-700 mb-2">
              The only data we collect is through Google Analytics for basic website metrics:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Approximate location (country-level)</li>
              <li>Device type (desktop/mobile)</li>
              <li>Browser information</li>
              <li>Pages visited (in aggregate, not individual paths)</li>
              <li>Site usage duration</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This data is <strong>completely anonymous</strong> and helps us understand how people use our dictionary 
              so we can improve it.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Google Analytics</h2>
            <p className="text-gray-700 mb-4">
              We use Google Analytics with these privacy-protecting measures:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>IP anonymization enabled</li>
              <li>No sharing of data with other Google services</li>
              <li>Data retention set to 14 months</li>
              <li>No User-ID tracking</li>
              <li>No advertising features enabled</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Opt-out of Google Analytics using browser extensions</li>
              <li>Request deletion of any accidental personal data</li>
              <li>Ask questions about our privacy practices</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-blue-800">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
                We may update this policy occasionally, but will never reduce your privacy protections.
              </p>
            </div>
          </div>
        </section>
        
        {/* Urdu Version */}
        <section className="mb-16" dir="rtl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">رازداری کی پالیسی</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              اردو زبان ڈکشنری پر، ہم آپ کی رازداری کو سنجیدگی سے لیتے ہیں۔ یہ پالیسی بیان کرتی ہے کہ ہم کتنا کم ڈیٹا جمع کرتے ہیں 
              اور ہم اسے اپنی سروس کو بہتر بنانے کے لیے کیسے استعمال کرتے ہیں۔
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">ڈیٹا جو ہم جمع نہیں کرتے</h2>
            <p className="text-gray-700 mb-4">
              ہم <strong>ذاتی معلومات جمع نہیں کرتے</strong> جیسے:
            </p>
            <ul className="list-disc pr-6 space-y-2 mb-6">
              <li>آپ کا نام یا رابطے کی تفصیلات</li>
              <li>ادائیگی کی معلومات (ہم ادائیگی پراسیس نہیں کرتے)</li>
              <li>مقام کا ڈیٹا (آئی پی سے ملک کی سطح تک)</li>
              <li>تلاش کی تاریخ یا ڈکشنری کے استعمال</li>
              <li>کوئی بھی ذاتی شناخت کرنے والی معلومات</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">ڈیٹا جو ہم جمع کرتے ہیں</h2>
            <p className="text-gray-700 mb-2">
              ہم صرف گوگل اینالیٹکس کے ذریعے بنیادی ویب سائٹ میٹرکس جمع کرتے ہیں:
            </p>
            <ul className="list-disc pr-6 space-y-2 mb-6">
              <li>مقام (ملک کی سطح)</li>
              <li>ڈیوائس کی قسم (ڈیسک ٹاپ/موبائل)</li>
              <li>براؤزر کی معلومات</li>
              <li>وزٹ کی گئی صفحات (اجتماعی طور پر، انفرادی راستے نہیں)</li>
              <li>سائٹ استعمال کی مدت</li>
            </ul>
            <p className="text-gray-700 mb-6">
              یہ ڈیٹا <strong>مکمل طور پر گمنام</strong> ہے اور ہمیں یہ سمجھنے میں مدد کرتا ہے کہ لوگ ہماری ڈکشنری کو 
              کیسے استعمال کرتے ہیں تاکہ ہم اسے بہتر بنا سکیں۔
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">گوگل اینالیٹکس</h2>
            <p className="text-gray-700 mb-4">
              ہم گوگل اینالیٹکس کو ان رازداری کے تحفظ کے اقدامات کے ساتھ استعمال کرتے ہیں:
            </p>
            <ul className="list-disc pr-6 space-y-2 mb-6">
              <li>آئی پی کو گمنام بنانا</li>
              <li>دیگر گوگل سروسز کے ساتھ ڈیٹا کا اشتراک نہیں</li>
              <li>ڈیٹا کو 14 ماہ تک رکھنا</li>
              <li>یوزر-آئی ڈی ٹریکنگ نہیں</li>
              <li>اشتہارات کی خصوصیات فعال نہیں</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">آپ کے حقوق</h2>
            <p className="text-gray-700 mb-4">
              آپ کو یہ حقوق حاصل ہیں:
            </p>
            <ul className="list-disc pr-6 space-y-2 mb-6">
              <li>براؤزر ایکسٹینشنز کا استعمال کرتے ہوئے گوگل اینالیٹکس سے آؤٹ ہونے کا</li>
              <li>کسی بھی اتفاقی ذاتی ڈیٹا کو حذف کرنے کی درخواست کرنے کا</li>
              <li>ہماری رازداری کی پالیسی کے بارے میں سوالات پوچھنے کا</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-blue-800">
                <strong>آخری اپ ڈیٹ:</strong> {new Date().toLocaleDateString('ur-PK', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
                ہم اس پالیسی کو کبھی کبھار اپ ڈیٹ کر سکتے ہیں، لیکن آپ کے رازداری کے تحفظات کو کبھی کم نہیں کریں گے۔
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions About Privacy? / رازداری کے بارے میں سوالات؟</h2>
          <p className="text-gray-700 mb-6">
            Contact us at: <a href="mailto:privacy@urduzaban.pk" className="text-blue-600 hover:underline">privacy@urduzaban.pk</a>
          </p>
        </div>
        <Link href={"/"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition">
              Search Dictionary /  ڈکشنری میں تلاش کریں 
            </button>
            </Link>
      </article>
    </>
  );
};

export default PrivacyPolicy;









export const metadata = {
    title: 'Privacy Policy | Urdu Zaban Dictionary',
    description: 'We value your privacy. Urdu Zaban Dictionary collects no personal data except basic analytics through Google Analytics.',
    keywords: ['privacy policy', 'data collection', 'Urdu dictionary privacy'],
   
    openGraph: {
      title: 'Privacy Policy | Urdu Zaban Dictionary',
      description: 'Learn about our minimal data collection practices and privacy protections.',
      url: 'https://urduzaban.pk/privacy',
      siteName: 'Urdu Zaban Dictionary',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Privacy Policy | Urdu Zaban Dictionary',
      description: 'We collect minimal data - only what we need through Google Analytics.',
    },
    
  };