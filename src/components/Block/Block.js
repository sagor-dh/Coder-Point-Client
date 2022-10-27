import React from 'react'
import Card from 'react-bootstrap/Card';

function Block() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <h1 className='text-center mb-4'>Block</h1>
                <div className="col-lg-6 mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>What is cors?</Card.Title>
                            <Card.Text>
                                <b>Cross-origin resource sharing (CORS) </b> is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy. However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6 mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title> Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                            <Card.Text>
                                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <i>alternative of firebase</i> MongoDB has become one of the most wanted databases in the world because it makes it easy for developers to store, manage, and retrieve data when creating applications with most programming languages.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6 mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>How does the private route work?</Card.Title>
                            <Card.Text>
                                Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-6 mb-3'>
                    <Card>
                        <Card.Body>
                            <Card.Title>What is Node? How does Node work?</Card.Title>
                            <Card.Text>
                                Node JS is a JavaScript runtime environment. Both browser and Node JS run on V8 JavaScript engine. Node JS uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node JS applications uses single threaded event loop architecture to handle concurrent clients. Actually its' main event loop is single threaded but most of the I/O works on separate threads, because the I/O APIs in Node JS are asynchronous/non-blocking by design, in order to accommodate the main event loop. Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time. When 100 people connect at once, rather than having different threads, Node will loop over those connections and fire off any events your code should know about. If a connection is new it will tell you .If a connection has sent you data, it will tell you .If the connection isn’t doing anything ,it will skip over it rather than taking up precision CPU time on it. Everything in Node is based on responding to these events. So we can see the result, the CPU stay focused on that one process and doesn’t have a bunch of threads for attention.There is no buffering in Node.JS application it simply output the data in chunks.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>




        </div>
    )
}

export default Block