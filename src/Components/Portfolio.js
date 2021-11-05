import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} ><h2>{projects.title}</h2>
          <p className="info">{projects.category}</p>
          <p>{projects.description}</p>
          <img alt={projects.title} src={projectImage} />
          <div className="link-github">
            <a className="button" 
              href={projects.url} title={projects.title}>
               <i className="fa fa-github"></i>
            </a>
          </div>
            
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h3>Here are some projects I've worked on and some that I am currently working on.</h3>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
