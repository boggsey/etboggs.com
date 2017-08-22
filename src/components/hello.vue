<template>
  <div class="hello">
    
    <section class="hello-wrapper">
      
      <p class="primary-message">
        <img src="static/logo-transparent.png" class="logo">
        <span>I'm a <strong>web developer</strong>,
        <strong>marine corps veteran</strong> &amp; <strong>non-profit cofounder</strong> from <strong>cincinnati</strong> who is dedicated to social good.</span>
      </p>
    </section>

    <section id="work">
      
      <div class="work-wrapper">
        <h2>Current Focus</h2>

        <div class="work-row-wrapper">
          <div class="work-list">
            <div class="work-item" v-for="item in data.workItems">
                <h3>{{ item.title }}</h3>
                <p class="position">{{ item.position }}</p>
                <p class="description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section id="clients">
      <h2>Recent Work</h2>

      <div class="client-examples">
        
        <div class="client-example" v-for="item in data.clientItems" 
        v-on:click.native="myFilter">
            <div class="client-image">
              <div class="client-image-wrapper">
                <img :src="item.image">
              </div>
              <div class="learn-more">
                <h3 class="client-name">{{ item.client }}</h3>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div class="client-info">
              <h4>{{ item.workType }}</h4>
              <p>{{ item.description }}</p>
              <p class="tags">{{ item.tags }}</p>
            </div>
        </div>
        
      </div>


    </section>

    <section id="contact">
        <h2>Contact</h2>

        <div class="social">
          <p>eric@mlemedia.com</p>
          <a class="social-link github" href="https://github.com/boggsey">GitHub</a>
          <a class="social-link twitter" href="https://twitter.com/ETBoggs">Twitter</a>
          <a class="social-link linkedin" href="https://www.linkedin.com/in/etboggs">LinkedIn</a>
        </div>
    </section>

  </div>
</template>

<script>
import data from '../assets/data/data.json'
export default {
  name: 'hello',
  data () {
    return {
      data,
      isActive: false
    }
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../variables.scss";

.logo {
  display: none;
  position: absolute;
  top: -60px;
  left: 50%;
  width: 100px;
  transform: translate(-50%, -50%);
}

.hello-wrapper {
  background-size: cover;
  background-position: center right;
  background-image: url(/static/eric-cincinnati.jpg);
}

.primary-message {
  width: 80%;
  margin: 0 auto;
  font-size: 2em;
  padding-left: 20px;
  text-align: center;
  position: relative;

  span {
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 4px;
  }
}

#clients {
  position: relative;
  flex-flow: row wrap;
  text-align: center;
  position: relative;
  top: -5vh;

  h2 {
    margin: 0;
  }

  .agency-list {
    width: 100%;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.25em;
      color: $grey-dark;
      display: inline-block;
      padding: 5px 10px;
      margin: 0 10px;
    }   
  }

  .client-examples {
    display: flex;
    flex-flow: row wrap;

    margin: 0 auto;
    width: 80%;
  }

  .client-example {
    width: 50%;
    margin: 0;
    text-align: left;

    .client-image {
      position: relative;
    }

    .client-image-wrapper {
      position: relative;

      &:after {
        content: " ";
        z-index: 10;
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(239, 239, 239, 0.8);
        z-index: 100;
      }
    }

    .learn-more {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;                       
      transform: translate(-50%, -50%);
      margin: 0;
      padding: 0;
      z-index: 200;
      color: $grey-dark;
      text-align: center;

      .client-name {
        padding: 0;
        margin: 0 0 10px 0;
        text-shadow: 0 0 10px white;
      }

      a {
        border-top: 1px dotted $grey-dark;
        display: block;
        color: inherit;
        text-decoration: none;
        padding-top: 5px;
        text-shadow: 0 0 10px white;
      }
    }

    @at-root &:hover {
      .learn-more {
        display: block;
      }
    }

    .client-info {
      display: none;
      margin: 0;
    }

    img {
      width: 100%;
    }
  }
}

#work {
  position: relative;
  top: -10vh;
  background: $grey-light url(/static/bgnoise_lg.png);
  clip-path: polygon(0 0, 1600px 5%, 1600px 95%, 0 100%);

  .work-wrapper {
    width: 60%;
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
  }

  .work-row-wrapper {
    width: 100%;
  }

  .work-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  h2 {
    text-align: center;
  }
}

.work-item {
  width: 100%;
  padding: 20px;
  border-bottom: 1px dotted $grey-dark;

  @media screen and (max-width: $break-medium) {
    width: 100%;
  }

  h3 {
    padding: 0 0 5px 0;
    margin: 0;
    font-size: 125%;
  }

  .position {
    margin-top: 10px;
    color: darken($black, 70%);
    font: 110%/60%;
    line-height: 1em;
    margin: 0;
  }

  .description {
    margin-bottom: 0;
    font: 110%/200%;
  }
}

#contact {
  background: $grey-light;
  flex-flow: column;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 10%);

  h2 {
    text-align: center;
  }

  .social {
    text-align: center;
    text-transform: uppercase;

    .social-link {
      font-weight: 700;
      text-decoration: none;
      padding: 0 5px;
      color: #000;
    }
  }  
}
</style>
