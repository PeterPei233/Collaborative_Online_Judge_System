# 1.OverView 

- Implemented a web-based collaborative code editor which supports multiple user editing simultaneously (ACE, Socket.io, Redis);
- Designed and developed a single-page web application for coding problems (Angular2, Express, Node.js, MongoDB);
- Built a user-code executor service which can build and execute user’s code (Docker, Flask);
- Refactored and Improved system throughput by decoupling services using RESTful API and loading balancing by Nginx (REST AP)

### Project Structure 

![img](https://github.com/PeterPei666/Collaborative_Online_Judge_System/blob/master/img/structure.png)

### Project WorkFlow 
![img](https://github.com/PeterPei666/Collaborative_Online_Judge_System/blob/master/img/workflow.png)

# 2.Front End
### 2.1 Tools

- Angular 

![img](https://github.com/PeterPei666/Collaborative_Online_Judge_System/blob/master/img/angular.png)

- Bootstrap
- npm, node.js

### 2.2 Components 
Simplified version of leetcode 

- problem-lists
- problem-description
- problem-creation
- nav-bar: searching problem


![img](https://github.com/PeterPei666/Collaborative_Online_Judge_System/blob/master/img/homepage.png)

# 3. Back End

### 3.1 Tools:
- RESTful API: user can GET and POST problems from server using RESTful API
- Express
- socket.io: supporting collaborarive coding
- ACE: embeded editor components
- MongoDB: mLab as our Database
- Redis: Store and restore socket sessions 
- Flask: Executor service, physically isolate the normal node server and user-code execution
- docker: container where we test codes (We didn't really compile codes, we just send message back to client after we receive codes)
- nginx: workload balance(didn't implement this part for we don't have many users)


### 3.2 Demo


