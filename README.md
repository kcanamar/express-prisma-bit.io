# Example of Prisma.io connecting with Bit.io


### Quick Start

#### STEP 1
Clone down this repo and make sure that you add a `.env` file to the root of the project.
In the `.env` add you connection string from your `bit.io` database.

```
postgresql://USERNAME:API_KEY@db.bit.io:5432/DATABASE.NAME
```

*Important Note* - the DATABASE NAME will be populated with a `/` change this to a `.`
#### STEP 2
In your teminal run the following commands
```bash
npm i
```
Followed by 

```bash
npx prisma db push
```
_This command will populate you database with a table based off of the schema defined here._

Now lets turn the sever on by running command
```bash
npm run dev
```

*Important Note* - I have `nodemon` globally installed on my machine, if you do not run the following command.
```bash
npm i --save-dev nodemon
```
_this command will install `nodemon` to your `devDependencies` in `package.json`_

### Built from Prisma Documentation found [here](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-node-postgres)