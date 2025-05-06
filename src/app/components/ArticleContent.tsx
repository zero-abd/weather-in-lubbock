import React from 'react';
import { WiStrongWind, WiSnow, WiDaySunny, WiRain } from 'react-icons/wi';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

export default function ArticleContent() {
  return (
    <article className="py-12 max-w-4xl mx-auto px-4">
      <div className="article-content">
        <div>
          <p className="leading-relaxed mb-8">
            It&apos;s a beautiful spring morning in Lubbock. The sun is shining, birds are chirping, and Texas Tech students are enjoying a pleasant 75-degree day on campus. By noon, the sky has turned an ominous shade of brown, and those same students are now racing across campus like contestants in a post-apocalyptic game show, desperately trying to avoid being sandblasted into oblivion.
          </p>
          
          <p>
            Welcome to Texas Tech University, where the only thing more unpredictable than your freshman roommate is the weather. Lubbock&apos;s climate has developed a notorious reputation for its wild swings and extreme conditions—from haboobs (dust storms that can reduce visibility to zero) to flash floods, and everything in between.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
            <WiStrongWind className="text-red-600 mr-2 text-3xl" />
            Student Perspectives: The Wind and Dust Challenge
          </h2>
          
          <p>
            If there&apos;s one constant in Lubbock&apos;s weather, it&apos;s the wind. With average wind speeds that would make Chicago jealous, the &quot;windy city&quot; title might need to be reconsidered. Dr. Karin Ardon-Dryer, atmospheric science professor at Texas Tech, confirms that these conditions create the perfect storm for dust events.
          </p>
          
          <p>
            According to our survey results, 76% of students now carry dust masks during peak season, with many describing it as an &quot;essential&quot; rather than just a precaution. Wind-related events topped students&apos; list of weather concerns, with dust storms being the most dreaded phenomenon.
          </p>
          
          <p>
            For students, this means developing an entirely new set of survival skills. Junior engineering major, Carlos Martinez, has developed what he jokingly calls the &quot;Lubbock Lean&quot;—a walking technique that involves tilting at a 45-degree angle to counteract the wind while crossing Memorial Circle.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
            <WiSnow className="text-blue-500 mr-2 text-3xl" />
            Coping with Unpredictability: Student Strategies
          </h2>
          
          <p>
            While most university students across America pack away their winter clothes by March, Texas Tech students know better. April 2025 brought a rare winter storm with snow accumulation across the South Plains and Panhandle region, catching many off guard.
          </p>
          
          <p>
            Our survey found that 65% of students report carrying multiple outfit options daily. This adaptability extends to technology as well, with 88% relying on weather apps and 91% turning on weather alerts to stay prepared for sudden changes.
          </p>

          <div id="interviews" className="bg-gray-100 p-6 rounded-lg my-8 text-center">
            <h3 className="font-bold text-xl mb-3">&quot;Lubbock has taught me that checking the weather app is a necessity.&quot;</h3>
            <p className="italic">— Alif, Junior Accounting Major</p>
          </div>
          
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Texas Tech Students on Lubbock Weather</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/zi3YMutl0SI"
                title="Texas Tech Students Talk About Lubbock Weather"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-2 italic">Texas Tech students share their experiences and feelings about the unpredictable Lubbock weather.</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
            <WiDaySunny className="text-yellow-500 mr-2 text-3xl" />
            Finding the Silver Lining
          </h2>
          
          <p>
            Despite all the complaints that Lubbock weather is unpredictable, students are quick to point out that Lubbock does deliver spectacular weather when it decides to behave. With over 260 sunny days per year and mild winters (punctuated by the occasional freak snowstorm), there&apos;s plenty to appreciate.
          </p>
          
          <p>
            &quot;Those perfect fall days on campus make it all worthwhile. The sky gets this incredible blue that seems to go on forever, and the sunset turns everything this gorgeous shade of gold. It makes you forget all about those irritating windy days,&quot; says senior computer science major, Nemo.
          </p>
          
          <p>
            This sentiment is reflected in our survey data, with fall being the overwhelming favorite season among students (53%).
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center">
            <WiRain className="text-blue-700 mr-2 text-3xl" />
            Practical Takeaways: The Weather Survival Guide
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Essential Checklist for Lubbock Weather</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span><strong>Layering Strategy:</strong> Dress in removable layers that can adapt to 30+ degree temperature swings in a single day</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span><strong>Car Kit:</strong> Keep a small emergency kit in your vehicle with water, a dust mask, and a windbreaker</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span><strong>Multiple Weather Apps:</strong> Cross-reference forecasts from different sources for better accuracy</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span><strong>Mental Mindset:</strong> Embrace flexibility and develop a sense of humor about sudden weather changes</span>
              </li>
              <li className="flex items-start">
                <FaExclamationTriangle className="text-amber-500 mt-1 mr-2" />
                <span><strong>Safety Resources:</strong> Sign up for <a href="https://www.ttu.edu/techalert/" className="text-red-600 hover:underline">TechAlert</a> and save <a href="https://www.depts.ttu.edu/parking/InformationFor/MobilitySolutions/RaiderRide.php" className="text-red-600 hover:underline">Raider Ride</a> in your contacts</span>
              </li>
            </ul>
          </div>
          
          <p>
            While students at other universities might complain about walking to class in light rain, Texas Tech students develop a certain hardiness that sets them apart. The stores just outside campus sell more weather-related gear than most other retailers, and students have turned weather preparedness into both an art and a science.
          </p>
          
          <p>
            &quot;Honestly, dealing with Lubbock&apos;s weather has prepared me for life better than some of my classes,&quot; laughs senior communications major, Rodriguez. &quot;You learn adaptability, planning ahead, and how to make the best of unpredictable situations. Plus, you develop a really great set of weather-related excuses for professors when you miss class.&quot;
          </p>
          
          <p>
            As graduation approaches each spring, seniors reminisce about their weather war stories—the time the entire marching band had to chase their sheet music across Jones AT&T Stadium, or when a sudden downpour flooded the Campus and everyone had to help each other get to class.
          </p>
          
          <p>
            Love it or hate it, Lubbock&apos;s unpredictable weather has become an integral part of the Texas Tech experience. As the saying goes among alumni: &quot;You haven&apos;t truly attended Texas Tech until you&apos;ve faced all four seasons happening on your walk across campus.&quot;
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="font-bold text-xl mb-3 flex items-center">
              <FaInfoCircle className="text-blue-600 mr-2" />
              About This Project
            </h3>
            <p className="mb-2">
              &quot;Dust to Downpour&quot; combines survey data from Texas Tech students with in-depth interviews to provide both breadth and personal narratives about coping with Lubbock&apos;s unique weather challenges.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
} 