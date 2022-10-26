
const createTeam = team => {

    const createManager = manager => {
        return `
    <div class="card team-card" style="width: 18rem;">
        <img class="card-img-top" src= ${manager.getGender()} alt="Card image cap">
        <div class ="card-header bg-danger text-white">
        <h2 class ="card-title text-center">${manager.getName()}</h2>
        <h4 class ="card-title text-center">${manager.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class = "list-group-item">ID: ${manager.getId()}</li>
                <li class = "list-group-item">Email:${manager.getEmail()}</li>
            </ul> 
        </div>
      </div>
        `;
    };

    const createEngineer = engineer => {
        return `
    <div class="card team-card" style="width: 18rem;">
        <img class="card-img-top" src=${engineer.getGender()} alt="Card image cap">
        <div class ="card-header bg-danger text-white">
        <h2 class ="card-title text-center">${engineer.getName()}</h2>
        <h4 class ="card-title text-center">${engineer.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class = "list-group-item">ID: ${engineer.getRole()}</li>
                <li class = "list-group-item">Email: <a href = ${engineer.getEmail()}</a></li>
                <li class = "list-group-item">GitHub:<a href = ${engineer.getGithub()}</a></li>
            </ul> 
        </div>
    </div>
        `
    };

    const createIntern = intern => {
        return `
    <div class="card team-card" style="width: 18rem;">
        <img class="card-img-top" src=${intern.getGender()} alt="Card image cap">
        <div class ="card-header bg-danger text-white">
        <h2 class ="card-title text-center">${intern.getName()}</h2>
        <h4 class ="card-title text-center">${intern.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class = "list-group-item">ID: ${intern.getRole()}</li>
                <li class = "list-group-item">Email: <a href = ${intern.getEmail()}</a></li>
                <li class = "list-group-item">School:${intern.getSchool()}</li>
            </ul> 
        </div>
    </div>
        `
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        );
    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team-Profiles</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous"/>
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"/>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="row">
        <div class="col-12 jumbotron team-heading bg-warning">
          <h1 class="text-center display-4">Team Profiles</h1>
          <p class="text-center lead ">Great things in business are never done by one person. They’re done by a team of people.”  -Steve Jobs</p>
        </div>
      </div>

      <div class ="container">
        <div class ="row">
            <div class ='row team-row col-12 d-flex justify-content-around'>
                ${createTeam(team)}
        </div>
    </div>
</div>
</body>
</html>

    `;
};