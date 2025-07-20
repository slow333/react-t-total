import { useLocation, Link } from "react-router-dom";

function SpringNav() {
  const location = useLocation();
  const compare = (path) =>
  location.hash.includes(path) ? " aside__current" : "";

  return (
    <div>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-lg font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/spring-intro">Spring Intro</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#spring-about"
            className={`aside__a-text${compare("#spring-about")}`} >
            About Spring</a>
          <a href="#spring-common-needs"
            className={`aside__a-text${compare("#spring-common-needs")}`} >
            common-needs</a>
          <a href="#spring-ide-setting"
            className={`aside__a-text${compare("#spring-ide-setting")}`} >
            IDE setting </a>
          <a href="#spring-project-design"
            className={`aside__a-text${compare("#spring-project-design")}`} >
            Project design </a>
          <a href="#spring-project-planning"
            className={`aside__a-text${compare("#spring-project-planning")}`} >
            Project planning </a>
          <a href="#spring-oop-design"
            className={`aside__a-text${compare("#spring-oop-design")}`} >
            OOP design </a>
          <a href="#spring-tdd"
            className={`aside__a-text${compare("#spring-tdd")}`} >
            TDD Dev </a>
          <a href="#spring-oas"
            className={`aside__a-text${compare("#spring-oas")}`} >
            OAS </a>
        </div>
      </details>
      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/spring-implement">Implement</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#spring-basic-crud"
            className={`aside__a-text${compare("#spring-basic-crud")}`} >
            Spring CRUD</a>
          <a href="#spring-artifact-assignment"
            className={`aside__a-text${compare("#spring-artifact-assignment")}`} >
            Artifact assignment</a>
          <a href="#spring-user-crud"
            className={`aside__a-text${compare("#spring-user-crud")}`} >
            User CRUD</a>
          <a href="#spring-paging-sorting"
            className={`aside__a-text${compare("#spring-paging-sorting")}`} >
            Paging, Sorting</a>
          <a href="#spring-spec"
            className={`aside__a-text${compare("#spring-spec")}`} >
            Spring Specification</a>
        </div>
      </details>

      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/spring-security">Spring Security</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#spring-security-intro"
            className={`aside__a-text${compare("#spring-security-intro")}`} >
            Spring Security Intro</a>
          <a href="#spring-http-basic-auth"
            className={`aside__a-text${compare("#spring-http-basic-auth")}`} >
            http basic authentication</a>
          <a href="#spring-jwt"
            className={`aside__a-text${compare("#spring-jwt")}`} >
            Spring Jwt</a>
          <a href="#spring-exception-controller-advice"
            className={`aside__a-text${compare("#spring-exception-controller-advice")}`} >
            Exception ControllerAdvice</a>
          <a href="#spring-security-test"
            className={`aside__a-text${compare("#spring-security-test")}`} >
            Spring Security Test</a>
          <a href="#spring-access-controll"
            className={`aside__a-text${compare("#spring-access-controll")}`} >
            Spring Access Controll</a>
          <a href="#spring-password-change-redis"
            className={`aside__a-text${compare("#spring-password-change-redis")}`} >
            Spring Security Password Change Redis</a>
          <a href="#spring-cors"
            className={`aside__a-text${compare("#spring-cors")}`} >
            Spring Cors</a>
        </div>
      </details>

        <div className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary mb-3 ml-5" >
          <Link to="/spring-deploy">Cloud Deploy</Link>
        </div>

      <details className="open:bg-slate-100 open:ring-3 open:ring-black/5
           accordian__details mb-3" >
        <summary className="text-xl font-semibold select-none 
          cursor-pointer hover:text-teal-900 details__summary" >
          <Link to="/spring-observing-api">Observing, AI API</Link>
        </summary>
        <div className="bg-slate-200 ps-4 py-4 details__div" >
          <a href="#spring-observing"
            className={`aside__a-text${compare("#spring-observing")}`} >
            Spring observing</a>
          <a href="#spring-ai-api"
            className={`aside__a-text${compare("#spring-ai-api")}`} >
            AI API</a>
        </div>
      </details>
    </div>
  )
}

export default SpringNav
