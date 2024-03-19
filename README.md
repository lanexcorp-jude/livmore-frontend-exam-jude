# ReactJS Exam Project App

This project is intended for exam purposes.

## Project Details

This web application is powered by the following technologies:

1. [Next.js](https://nextjs.org/) project using an App Router model bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
2. [Hasura](https://hasura.io/) for GraphQL API service
3. [Ant Design](https://ant.design/) for beautiful ReactJS component designs

## Project Setup

1. Copy the environment variables.
2. Install the necessary packages:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Usage

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hasura Setup and Usage

Hasura was set up via cloud configuration using [Neon Serverless PostgreSQL](https://neon.tech/) as its database.

This project used `Apollo Client` to be used to fetch, cache, and modify application data using GraphQL.

The Apollo client is created using `NextSSRApolloClient` to fit in NextJS.

```
function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:8000/"
    headers: {
      "x-hasura-admin-secret": "<YOUR_SECRET>",
    },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}
```

Queries / Mutations are created in GraphQL:

```
export const GET_ITEMS = gql`
  query getItems {
    items {
      id
      room_status
      capacity
      created_at
      location
      name
      occupy_category
      occupy_from
      occupy_to
      price
      updated_at
    }
  }
`;
```

Then it is called by the hooks provided by Apollo. Since it is made in `NextJS` with `Server Side Rendering (SSR)` features, Queries can be made directly before it the DOM is rendered

```
import { GET_ITEMS } from "./utilities/queries/queries";

export default function Home() {
  const { data, loading } = useQuery(GET_ITEMS);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {data.items.map((item, index) => {
          return <RoomTile {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
```
