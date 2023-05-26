import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')


    return (
      <div className="space-y-6 my-6 md:my-12">
        <div className="space-y-2 text-lg md:text-xl">
          <h2 className="text-xl md:text-3xl my-4">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            An access token and a refresh token are commonly used in
            authentication and authorization systems.
          </p>
          <p>
            <span className="gradient-bg p-1 rounded-md">Access Token</span> :
            An access token is a credential that is issued by an authentication
            server upon successful authentication. It is a short-lived token
            that grants access to specific resources or services on behalf of
            the authenticated user. Access tokens are typically used to
            authenticate API requests. When a client makes a request to an API,
            it includes the access token in the request headers or as a
            parameter to prove its identity and gain access to the requested
            resource. Access token could be store on memory, localStorage,
            HTTP-only cookies.
          </p>
          <p>
            <span className="gradient-bg p-1 rounded-md">Refresh Token</span> :
            A refresh token is a long-lived token that is also issued by the
            authentication server during the initial authentication process. Its
            purpose is to obtain a new access token when the current access
            token expires. While access tokens have a short lifespan (usually
            minutes or hours), refresh tokens have a longer lifespan (days or
            weeks). When the access token expires, the client can use the
            refresh token to request a new access token without
            re-authenticating the user. Refresh token could be stored in
            HTTP-only cookies.
          </p>
        </div>
        <div className="space-y-2 text-lg md:text-xl">
          <h2 className="text-xl md:text-3xl my-4">
            Compare SQL and NoSQL databases?
          </h2>
          <p>
            <span className="gradient-bg p-1 rounded-md">NoSQL</span> : NoSQL
            databases employ various data models, such as key-value, document,
            columnar, or graph models. They offer more flexibility in handling
            unstructured or semi-structured data. These databases are designed
            for horizontal scalability. They offer a flexible schema, allowing
            for dynamic and schema-less data.
          </p>
          <p>
            <span className="gradient-bg p-1 rounded-md">SQL</span> : SQL
            databases follow a structured, tabular data model known as the
            relational model. Data is organized into tables with predefined
            schemas, consisting of rows and columns. Relationships between
            tables are established using primary and foreign keys. These
            databases traditionally scale vertically, which means scaling by
            increasing the hardware resources of a single server. However, some
            SQL databases also support horizontal scalability through sharding
            or replication techniques. They enforce a rigid schema, where the
            structure of the data is defined before inserting data. Any changes
            to the schema require altering the table structure, which can be
            complex and may lead to downtime during migrations.
          </p>
        </div>
        <div className="space-y-2 text-lg md:text-xl">
          <h2 className="text-xl md:text-3xl my-4">
            What is express js? What is Nest JS?
          </h2>
          <p>
            <span className="gradient-bg p-1 rounded-md">Express JS</span> :
            Express.js is a minimalistic and flexible web framework for Node.js.
            It provides a simple and straightforward API for building web
            applications and APIs. Express.js focuses on being unopinionated and
            lightweight, allowing developers to have more control and
            flexibility over the application structure and middleware. It
            provides features like routing, request/response handling,
            middleware support, and template engine integration. Express.js is
            widely used and has a large ecosystem of plugins and middleware that
            can be leveraged to extend its functionality.
          </p>
          <p>
            <span className="gradient-bg p-1 rounded-md">Nest JS</span> :
            Nest.js is a progressive, opinionated framework for building
            scalable and maintainable server-side applications. It is built on
            top of Express.js and adds an additional layer of structure and
            abstraction using TypeScript decorators and dependency injection.
            Nest.js follows an architectural pattern inspired by Angular, known
            as the module-controller-service pattern. It provides a modular
            approach for organizing code, with modules encapsulating related
            functionality, controllers handling request/response, and services
            encapsulating business logic. Nest.js also offers features like
            dependency injection, built-in support for WebSocket communication,
            GraphQL integration, and a powerful command-line interface (CLI) for
            scaffolding and generating code.
          </p>
        </div>
        <div className="space-y-2 text-lg md:text-xl">
          <h2 className="text-xl md:text-3xl my-2">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p>
            In MongoDB, the aggregate method is used to perform advanced data
            processing and analysis on the data stored in a collection. It
            allows you to perform complex computations, transformations, and
            aggregations on documents using a pipeline-based approach. The
            aggregation pipeline consists of multiple stages, each performing a
            specific operation on the documents. Specify the collection on which
            you want to perform the aggregation. The aggregate method takes the
            name of the collection as its first parameter. Construct the
            aggregation pipeline, which consists of one or more stages. Each
            stage applies a specific operation to the documents in the
            collection and passes the result to the next stage. Each stage in
            the pipeline performs a specific operation on the documents.Once the
            pipeline is constructed, the aggregate method executes the
            aggregation by applying each stage in the pipeline to the documents
            in the collection. The result is returned as a cursor, which can be
            iterated to access the aggregated data.
          </p>
        </div>
      </div>
    );
};

export default Blog;