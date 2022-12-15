import React from 'react'
import '../home.css';

export const Home = () => {
  return (
    <div>
<section>
                    <div class="row">
                      <div class="col">
                        <h2>How this site was built:</h2>
                        
                        <p>This webpage is hosted on AWS and utlizes Amplify. The codebase is kept on github and there is a real-time connection so that changes in <a href="https://github.com/sidejackthenativity/RTC-Website">Github</a>, connect what is happening on Amplify.</p>
                        <p>I have also used IAM best practices to set up my account on AWS. There are many user groups (administrators, developers, public-user) and each have different policies attached to each.</p>
                        <p><strong>Administrators:</strong></p>
                        <ul>
                          <li>Policy: AdministratorAccess</li>
                          <li>Users: admin-ryan</li>
                        </ul>
                        <p><strong>Developers:</strong></p>
                        <ul>
                          <li>Policy: PowerUserAccess<br />Users: dev-ryan</li>
                        </ul>
                        <p><strong>Public-user with&nbsp;</strong></p>
                        </div>
                      <div class="col">
                        
                      </div>
                    </div>
                  </section>
    </div>
  )
}
