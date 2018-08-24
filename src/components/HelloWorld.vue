<template>
  <div class="hello">
    <h1>asmsuechan</h1>
    <div><p>I like computer technologies.</p></div>
    <div>
      <ul>
        <li><p><a href='https://github.com/asmsuechan'>GitHub</a></p></li>
        <li><p><a href='https://www.linkedin.com/in/ryota-suenaga-658749128'>LinkedIn</a></p></li>
        <li><p><a href='https://twitter.com/suenaga_ryota'>Twitter</a></p></li>
      </ul>
    </div>

    <hr>

    <h1>Education</h1>
    <span>Yame-gakuin junior-high school, 2008-2011</span><br>
    <span>Yame-gakuin high school, 2011-2014</span><br>
    <span>Meiji University IMS Network Design, 2014-2019</span><br>
    <hr>

    <h1>Skills</h1>
    <div>
      <div>
        <strong>Languages</strong><br>
        <span>Ruby / JavaScript / Golang / Regex / Japanese / English / Chinense</span>
      </div>
      <div>
        <strong>Frameworks</strong><br>
        <span>Ruby on Rails / jQuery / Vue.js / React / react-native / electron</span>
      </div>
      <div>
        <strong>Clouds</strong><br>
        <span>AWS / Alibaba Cloud / Heroku</span>
      </div>
      <div>
        <strong>Others</strong><br>
        <span>Serverless / JWT / REST / GraphQL</span>
      </div>
    </div>
    <hr>

    <h1>Projects</h1>
    <div>
      <h3>Boostnote</h3>
      <b>Developer</b>
      <span>2017/1 - 2018/1</span>
      <div>
        <span>I was one of the committers of <a href='https://github.com/BoostIO/Boostnote'>Boostnote</a> which is a note-taking application for programmers.</span>
        <br>
        <span>[Technologies] Electron, React, travis-ci, GitHub, Slack</span>
      </div>
    </div>
    <hr>

    <h1>Experiences</h1>
    <div>
      <h3>SUPINF</h3>
      <b>Backend/Frontend Developer</b>
      <span>2017/5 - 2018/5</span>
      <div>
        <span>I was in charge of Backend/Frontend of an SAP web application which is a business communication/task management tool.</span>
        <br>
        <span>[Technologies] Ruby on Rails, Vue.js, RSpec, vue-test-utils, swagger, JWT, REST, CircleCI, GitHub, Slack</span>
      </div>

      <h3>CrowdWorks</h3>
      <b>Backend Developer Internship</b>
      <span>2016/5 - 2017/3</span>
      <div>
        <span>I was in charge of Backend development. The main project I was in charge of was implementation of Messanger-like desktop notification by Serviceworker.</span>
        <br>
        <span>[Technologies] Ruby on Rails, jQuery, Vue.js, RSpec, CircleCI, GitHub, Slack</span>
      </div>
    </div>
    <hr>

    <h1>Activities</h1>
    <div>
      <h3>Silicon Valley Workshop</h3>
      <span>2016/3 - 2016/3 (10 days)</span>
      <div>
        <span>I participated in <a href="http://techlabpaak.com/siliconvalleyworkshop2018">Silicon Valley Workshop</a> held by Recruit.</span>
      </div>
    </div>
    <hr>

    <h1>About This Page</h1>
    <div>
      <div>
        <span>This page runs on CloudFront and S3 and be written in Vue.js. TravisCI deploys to S3 automatically when any commits found on <a href="https://github.com/asmsuechan/asmsuechan.com">GitHub respository</a>.</span>
      </div>
    </div>
    <hr>

    <div class="footer">
      <span>Copyright (c) 2018 asmsuechan All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer {
  margin-top: 50px;
  height: 50px;
}
hr {
  width: 20%;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
