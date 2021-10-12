<template>
  <div class="about section">
    <h1>Executive Committee</h1>
    <div class="profile-section">
      <executive-card v-for="profile in executives" :key="profile.name" :name="profile.name" :title="profile.title" :imageName="profile.imageName" :short="profile.short" :bio="profile.bio" />
    </div>
    <h1>Board of Advisors</h1>
    <div class="profile-section">
      <advisor-card v-for="profile in advisors" :key="profile.name" :name="profile.name" :title="profile.title" :imageName="profile.imageName" :bio="profile.bio" />
    </div>
    <!--<h1>Partners &#38; Sponsors</h1>-->
  </div>
</template>

<style scoped>
.profile-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>

<script>
import ExecutiveCard from '@/components/ExecutiveCard.vue'
import AdvisorCard from '@/components/AdvisorCard.vue'

export default {
  name: 'App',
  components: {
    ExecutiveCard, AdvisorCard
  },
  data: function () {
     return {
      executives: [
        {
          name: 'Wendel Smith',
          title: 'Co-Founder, President',
          imageName: 'wendel-smith.png',
          short: `<p class="first">Wendel Smith is an entrepreneur with over 20 years of business experience. 
            He has started and run several successful businesses and currently serves as the owner 
            and CEO of a thriving automotive support company. Despite his flair for business...</p>`,
          bio: `<p class="first">Wendel Smith is an entrepreneur with over 20 years of business experience. 
            He has started and run several successful businesses and currently serves as the owner 
            and CEO of a thriving automotive support company. Despite his flair for business, 
            Wendel’s first passion is the healing arts, with special emphasis on the mind-body connection. 
            A naturally gifted empathic healer, he studied massage therapy with a heavy focus on 
            Dr. John Upledger’s Craniosacral therapy. He ran a massage therapy school and an alternative 
            health clinic that helped everyone from infants to the elderly with physical issues and emotional blocks. 
            Many past clients still call on him for these services and refer friends and family to his care.</p>
            <p>Sought after for his business acumen, team building skills, and compassionate leadership, 
            Wendel has been asked to manage, develop, and run several other businesses ranging from nonprofits, 
            an industry trade association, direct sales marketing teams, and three different alternative energy companies.</p> 
            <p>He has served in multiple capacities throughout the years in many different companies in a broad range of industries, 
            but the cause dearest to him has been working with youth in Utah State Foster Care. 
            Wendel and his wife have fostered fourteen children, adopted four of them 
            and are well-known advocates and mentors in the foster-to-adopt program. 
            He and his wife served on the board of the Adoption Exchange from 2001 – 2011, 
            assisting in fundraising for foster/adoption placements in the western United States. 
            They also recently began consulting with the leadership of the Utah State Transition to 
            Adult Living program to help youth ageing out of the foster care system develop life skills 
            for a brighter future.</p>
            <p class="last">Wendel co-founded ReBoot because he saw the destructive power of addiction 
            among members of his own family first-hand. Through several painful experiences, including failed 
            rehab programs and substandard therapy, Wendel has gained tremendous insight into what does 
            and does not work in rehabilitation and recovery. His passion, his focus, and his whole heart 
            are now centered on the ReBoot program and its ability to make a powerful change not only in 
            the United States but around the globe.</p>`,
          active: false
        },
        {
          name: 'Brenden Borrowman',
          title: 'Co-Founder, Vice President',
          imageName: 'brenden-borrowman.png',
          short: `<p class="first">Brenden Borrowman, the youngest OSUT graduate since the Vietnam War, 
            a proud military veteran and entrepreneur, joined the Army at the age of 17. 
            Serving as a 19D Cavalry Scout for 5 years, he deployed to Afghanistan in support 
            of Operation...</p>`,
          bio: `<p class="first">Brenden Borrowman, the youngest OSUT graduate since the Vietnam War, 
            a proud military veteran and entrepreneur, joined the Army at the age of 17. 
            Serving as a 19D Cavalry Scout for 5 years, he deployed to Afghanistan in support 
            of Operation Enduring Freedom with the 4/4 Cavalry in 2011.</p>
            <p>After suffering devastating injuries from being shot and blown up, 
            Brenden reentered civilian life in 2013 as a single father of two children under 3 years old. 
            In building and selling his first two businesses he dove into entrepreneurship head-first. 
            Recently recovered from his wounds he received life-changing news that would eventually 
            lead him down the path to co-founding ReBoot.</p>
            <p>In 2015 Brenden was diagnosed with Primary Polycythemia Vera, a type of red blood cell cancer. 
            As a way to give back after recovering from his physical and emotional injuries, 
            he started the You Are Not Alone Mission that assists suicidal veterans. During that same year, 
            he became acquainted with the anti-poaching cause and joined a nonprofit organization that 
            fought to save endangered animals in Africa. In his words, “the epidemic facing these animals 
            is a world crisis that is not being addressed on any solvable level. I want to look back 
            and say I made a difference before it was too late, instead of having a chance to help and not taking it.”</p>
            <p>As if that was not enough, in 2017 Brenden was yet again diagnosed with cancer, Acute Myeloid Leukemia, 
            a type of cancer of the blood and bone marrow with excess immature white blood cells. 
            Although the opportunity to give up presented itself time and time again, he was 
            determined to make a lasting positive impact not only on our world but more importantly on his children.</p>
            <p class="last">To say Brenden experienced some tragedies and difficulties in his youth would be an understatement. 
            Coming from a dysfunctional home, he struggled with addictions of his own
            and proudly credits the military for saving him from a life of disappointment. 
            As a co-founder of ReBoot, Brenden has been inspired to develop this program 
            from his transforming life experience with the hopes of changing the lives of others.</p>`,
          active: false
        },
        {
          name: 'Jeff Conley',
          title: 'Chief Financial Officer',
          imageName: 'jeff-conley.png',
          short: `<p class="first">Jeff Conley is the CFO of ReBoot. He is passionate about helping others achieve their potential 
            and is excited and grateful to be a part of the great team at ReBoot, 
            an organization dedicated to helping young men and women be their best...</p>`,
          bio: `<p class="first">Jeff Conley is the CFO of ReBoot. He is passionate about helping others achieve their potential 
            and is excited and grateful to be a part of the great team at ReBoot, 
            an organization dedicated to helping young men and women be their best.</p>
            <p>Jeff is a CPA and comes to ReBoot with over 15 years of experience in finance and accounting. 
            He’s worked with companies large and small and has experience in financial analysis, budgeting, 
            forecasting, planning, taxes, M&A, process improvement, operations, and accounting. 
            His roles have included analyst, manager, controller, VP and CFO. He’s worked for Sears, 
            Flying J, OrangeSoda, Deluxe Corp and Winder Farms. He has an MBA and bachelor’s degree 
            from Brigham Young University.</p>
            <p class="last">When he is not at work he loves spending time with his wife and five children. 
            He love the mountains and is grateful to live in a community surrounded by them. 
            He enjoys running, hiking, biking and BYU football.</p>`,
          active: false
        },
        {
          name: 'Summer Thatcher',
          title: 'Chief Marketing Officer',
          imageName: 'summer-thatcher.png',
          short: `<p class="first last">Summer Thatcher is an award-winning US Navy Combat Cameraman, 
            winning Military Videographer of the Year for 2007. After eight years of military service 
            and deployments to the middle East, Summer labored years to regain mental 
            and...</p>`,
          bio: `<p class="first last">Summer Thatcher is an award-winning US Navy Combat Cameraman, 
            winning Military Videographer of the Year for 2007. After eight years of military service 
            and deployments to the middle East, Summer labored years to regain mental 
            and emotional power over traumas experienced in her unique “line of duty.” 
            Throughout her professional years, Summer has also worked in photography, graphic design, 
            social media strategy, and social media analysis, as well as completing a 
            Masters Degree in Entertainment Business from Full Sail University. 
            Coupled with diverse experience in the media field as a producer, instructor, and advisor, 
            Summer’s combat experience and mental health advocacy goals makes her an appropriate fit as 
            Chief Marketing Officer for the ReBoot mission.</p>`,
          active: false
        },
        {
          name: 'Matthew Hall',
          title: 'Chief Legal Officer',
          imageName: 'matthew-hall.png',
          short: `<p class="first">Matthew Hall is a corporate attorney with a decade of experience guiding 
            companies through all stages of growth. As General Counsel of a $1.4B software company, 
            he led the company through five rounds of venture financing raising over $300M in capital 
            and has worked on over $2B in commercial transactions`,
          bio: `<p class="first">Matthew Hall is a corporate attorney with a decade of experience guiding 
            companies through all stages of growth. As General Counsel of a $1.4B software company, 
            he led the company through five rounds of venture financing raising over $300M in capital 
            and has worked on over $2B in commercial transactions. Additionally, 
            he has worked on cases before the Utah Supreme Court involving addiction recovery centers 
            and reasonable accommodation requests under the Fair Housing Act.</p>
            <p class="last">Matthew has been active in community addiction recovery groups for over three years 
            and holds service positions in a number of them.</p>`,
          active: false
        },
        {
          name: 'DJ Simpson',
          title: 'Chief Technology Officer',
          imageName: 'dj-simpson.png',
          short: `<p class="first">DJ Simpson is grateful for the opportunity to join this amazing team and cause as 
            Chief Technology Officer. He recieved his BS of Computer Science from Brigham Young University - Provo.</p>`,
          bio: `<p class="first">DJ Simpson is grateful for the opportunity to join this amazing team and cause as 
            Chief Technology Officer. He recieved his BS of Computer Science from Brigham Young University - Provo.</p>`,
          active: false
        }
      ],
      advisors: [
        {
          'name': 'Bob Kittell',
          'title': 'Chairman',
          'imageName': 'bob-kittell.png',
          'bio': `<p class="first">Bob Kittell is a world-renowned speaker and coach who has spoken for the last 30 years 
            at events featuring former U.S. Presidents Gerald Ford, George H.W. Bush, Bill Clinton, 
            and George W. Bush as well as former First Ladies Barbara Bush and Laura Bush, 
            and former world leaders Mikhail Gorbachev and Margaret Thatcher. As a speaker, 
            Bob works with students, corporate leaders, and employees, engaging them with humor, 
            energy, and inspiration. Bob has spoken to audiences in over 150 cities nationally and internationally. 
            His message of hope helps people find success in their business and personal lives. 
            His approach motivates people to take immediate action and rise to a compelling vision 
            with a crystal-clear game plan for successful living.</p>
            <p class="last">After speaking to over 5 million people during his career, Bob has taken 
            special interest in the plight of young people in today’s society. Using techniques 
            and processes that helped him overcome his own struggles, Bob has developed a system 
            to educate and transform youth to move past their struggles and limitations. 
            Bob joined the Board of Advisors because he saw how unique and powerful the ReBoot program 
            is in changing lives and healing youth.</p>`
        },
        {
          'name': 'Kim Brown',
          'title': 'Advisor',
          'imageName': 'kim-brown.png',
          'bio': `<p class="first">Kim Brown brings more than 30 years of experience in marketing and media, 
            with an extensive background in sales, strategic planning, public relations, 
            social/digital/mobile marketing, creative production, and media placement. 
            She has deep experience assisting clients in starting and growing their businesses, 
            including several startups, where her creativity shines. Kim has built an automobile empire, 
            a dynamic advertising firm, and a nationally-recognized laboratory.</p>
            <p>Kim has a great passion for philanthropy because she loves improving the lives of people 
            around her and the community as a whole. She has served on the Utah Valley University Foundation Board 
            assisting in fundraising efforts for the University as well as local school districts. 
            She has also served as a member of the Business Development Corporation of Provo helping 
            new businesses with marketing strategies.</p>
            <p class="last">ReBoot is a cause that is close to Kim’s heart. She has experienced the pain 
            of having children suffering from addiction. They have been through rehabilitation programs 
            that simply did not work. Kim understands all too well the need for a program that leads to 
            lasting change and now serves on ReBoot’s Advisory Board to lend her expertise to bringing 
            this program to thousands of families who are in desperate need of help, hope, and, 
            more importantly, results.</p>`
        },
        {
          'name': 'Marcello Surjopolos',
          'title': 'Advisor',
          'imageName': 'marcello-surjopolos.png',
          'bio': `<p class="first">Marcello Surjopolos is an entrepreneur who has started and run dozens of companies. 
            He was appointed under the Governor of Utah to be the Director of Entrepreneur Development for the state. 
            He is also an emergency preparedness and survival expert and speaks on main stages at some of the 
            largest conferences on that subject. Marcello led one of the largest youth camp programs in the world 
            (with over 55,000 youth per year) and helped hire, train, and motivate hundreds of counselors while teaching 
            and leading the youth himself.</p>
            <p class="last">Marcello understands the difficulties youth face today, including abuse, addiction, 
            anxiety, depression, and suicide. Coming from challenging circumstances as a young man himself, 
            he believes in the human ability to change and overcome, no matter how great the opposition. 
            And because he has experienced the trials and triumphs that life offers, he has a keen desire 
            to help others who struggle without the knowledge and power to free themselves from bondage.</p>`
        },
        {
          'name': 'Amberlee Smith',
          'title': 'Advisor',
          'imageName': 'amberlee-smith.png',
          'bio': `<p class="first last">Amberlee Smith began as an Early Childhood Education major 
          and is now in an accelerated Masters Program in Psychology, focused on Clinical and Mental Health. 
          During her break in her education, she and her husband have fostered fourteen children and youth in State care 
          and adopted their four children from among those that they fostered. From 2001 to 2011, Amberlee 
          and her husband served on the Adoption Exchange board. She was integral in shifting 
          the fundraising process at The Adoption Exchange from a cost-heavy program to being 
          nearly 100% profitable through creating supportive relationships that shouldered all of the 
          costs of event venues, entertainment and catering – another successful venture in her life. 
          Amberlee has experience with youth treatment centers and brings an understanding of current treatment programs 
          and their need for evolution. She has also been an advocate for Foster Care for many years, 
          teaching part of the foster-to-adopt program to prospective foster parents going through their certification process. 
          Her broad experience in Foster Care, childhood education and psychology make her a invaluable advisor.</p>`
        },
        {
          'name': 'Mercedes Evans',
          'title': 'Advisor',
          'imageName': 'mercedes-evans.png',
          'bio': `<p class="first">A highly experienced and tenacious Project Manager, Mercedes has 
          streamlined organizational processes for companies like MX, Jarvis Ventures, Groupon, and eBay. 
          As a creative and skilled executive, she excels at systemizing communication, optimizing workflows, 
          and increasing efficiency of a company’s overall processes and progress. However, being a 
          daughter of a Special Forces veteran, her life experiences make her more than an organizational expert. 
          A former SF Commander, Mercedes’ father engrained in her abilities to handle all obstacles life would have to offer, 
          including being a single mother for four years. With no financial support, Mercedes rose steadily in her career, 
          courageously exemplifying self-reliance and independence to her children.</p>
          <p class="last">Growing up in Germany, she watched her cousin struggle with drug addiction 
          and the strain it put on his family as they invested thousands into therapy and rehabilitation 
          – never seeing any long-term results. This and losing her uncle when she was seventeen to an overdose 
          has taught her how to be genuinely empathetic with those in the throws of mental health crises. 
          Being a part of a loving and close-knit family, she understands the depths of its effects 
          and strives to infuse this understanding in all her contributions to the ReBoot mission. 
          Miss Evans’ heart and soul, as well as logically-minded work ethic and military-like commitment, 
          is sure to propel ReBoot to its fullest potential.</p>`
        },
        {
          'name': 'Alina Fong, PhD',
          'title': 'Co-Founder, Cognitive FX',
          'imageName': 'alina-fong.png',
          'bio': `<p class="first">During her academic career under the mentorship of Dr. Erin Bigler and Dr. Mark Allen, 
            Dr. Alina Fong received the national American Psychological Association Clinical Neuropsychology Division 
            40 Graduate Student Research Award in 2004 for her research on “Cortical Sources of the N400 
            and ‘The N400 Effect.” Dr. Fong’s interest in brain mapping soon turned to functional MRI, 
            and since then, her research efforts have been focused on the clinical applications of fMRI.</p>
            <p>In tandem with Dr. Allen, she has published numerous articles combining neuropsychology and neuroimaging, 
            along with deriving normative data for various populations, including concussion, eating disorders, 
            and moderate to severe brain injury. She was able to complete an internship at 
            the Veteran’s Affairs Salt Lake City Healthcare System and worked extensively with 
            OIF and OEF veterans with both traumatic brain injury and post-traumatic stress disorder.</p>
            <p>She proudly serves on the Board and is the Conference Committee Director of the Brain Injury Alliance of Utah, 
            is a member of Public Policy Committee of the United States Brain Injury Alliance, 
            and serves on the Professional Advisory Board of PINK Concussions.</p>
            <p class="last">In addition to her continuing research activities, Dr. Fong is currently 
            the Director of Cognitive FX, the premiere concussion treatment center that utilizes functional 
            NeuroCognitive Imaging technology. She is also currently a Clinical Neuropsychologist at 
            Intermountain HealthCare in Utah for 13 years, and has helped build the Sports Medicine and 
            Concussion Clinic practices in Utah Valley.</p>`
        }
      ]
    }
  }
}
</script>
