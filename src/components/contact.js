import React from 'react'
import '../home.css';
import Image from "../assets/melinkedin.jpg";

export const Contact = () => {
  return (
    <section>
                    <div class="row">
                      <div class="col">
                        <h2>About me:</h2>
                       
                          <p>My name is Ryan Thompson.&nbsp;</p>
                          <p>I teach physics and math at a highschool in York Region. And I also have a degree in electrical engineering.&nbsp;</p>
                          <p>For the last 3 years, I have been teaching myself pentesting, and getting to know the world of <strong>cyber security</strong>.&nbsp;&nbsp;</p>
                          <p>Since then I&rsquo;ve become a successful bug-bounty hunter! I&rsquo;ve also assisted Canadian charities to strengthen their digital infrastructure.&nbsp;</p>
                          <p>Although much of my time is spent learning about pentesting, I&rsquo;m curious about <strong>ALL things cyber</strong>. I&rsquo;m eager to transition into a full-time role in any area of info sec.&nbsp;</p>
                          <p>I&rsquo;ve explored governance by applying the C2M2 framework&hellip;.&nbsp;</p>
                          <p>I&rsquo;ve built my own packet sniffer in python. I also made a machine learning tool trained to detect if web requests are malicious or not.&nbsp;</p>
                          <p>I have presented at and attended conferences&hellip;&nbsp;</p>
                          <p>And I have worked with senior cyber professionals to tackle interesting and relevant case studies.</p>
                          <p>It&rsquo;s my understanding the industry NEEDS individuals who can communicate complex ideas in simple ways. That&rsquo;s exactly what I&rsquo;ve done as a science communicator and educator for the past 17 years.&nbsp;</p>
                          <p>I can bring leadership qualities to any role in cyber security, along with a track record of adapting on the fly to the needs of various stakeholders. You want soft skills? I&rsquo;ve got soft skills.</p>
                          <p>I&rsquo;m a life-long tech tinkerer who has been coding since the Commodore 64 era. I&rsquo;ve made Lego animation with my kids. And I&rsquo;ve released educational games to the Apple store.&nbsp;</p>
                          <p>All this to say, I know you&rsquo;ll find I&rsquo;m a quick study with any technology!&nbsp;&nbsp;</p>
                          <p><strong>Cyber security needs out-of-the box thinkers like me who bring a little something different to the industry.</strong></p>
                          <p>&nbsp;Thank you for reading!</p>
                        </div>
                      <div class="col">
                        <p>&nbsp;</p>
                        
                        <p><img alt="badge" src={Image}></img></p>
                        <p><a href="mailto:ryan.thompson.cyber@gmail.com">ryan.thompson.cyber@gmail.com</a><img src="source" alt="" /></p>
                      </div>
                    </div>
                  </section>
  )
}
