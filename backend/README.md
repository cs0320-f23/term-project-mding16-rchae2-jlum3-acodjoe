# src.server.main.Server-mding16-louiseweng
# Project Details:

## Project Name: Server

### Project Description:
This a project to build an API for local file parsing, loading and searching
and broadband api requests.

### Team Members (cslogin) and Contributions:
Michelle Ding (mding16)
Louise Weng (lweng1)

Michelle and Louise both worked all csv handlers and servers. The work was split evenly and largely
worked on together.

### Time Spent: 22 hours

### Design:
Our design for server is that we have a Server class that handles the routing and handler classes for each
endpoint that handles the logic for that endpoint. We manage a datasource folder for using datasource for handler
usage. We implement a general datasource and specific ascdatasource for different endpoints. 

### Errors/Bugs:
No bugs.

### Testing:
Our testing framework is comprised of both unit and integration tests.
For integration testing, we've segmented it into various categories covering `loadcsv`, `viewcsv`, `searchcsv`, and "broadband"
These tests work together with the server to test for the accuracy of the returned messages and values.

### Build:
To run the program run the Server class, and open browser with "localhost:3232/" followed by an
endpoint and parameters. For example, "localhost:3232/loadcsv?file=<file>" would be a valid request. 
Any other additional information will be followed with "&"

To use the broadband API, request is formed as: "localhost:3232/broadband?state=<State>&county=<County>".

### Repo: https://github.com/cs0320-f23/server-mding16-louiseweng.git
