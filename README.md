<<<<<<< HEAD
# firebase admin server

A Node.js backend project with user accounts management using firebase admin and web socket functionalities using Socket.io

The main technical aspects of which are:

- A project structure that fits well for new API projects that uses **Firebase Authentication** and **Firestore**
- Access Control: Restricting routes access with custom claims and checking nuances
- Reject a request outside the controller easily by throwing `new HttpResponseError(status, codeString, message)`
- Logs: **winston** module is preconfigured to write `.log` files

=======
# [Declutter Firebase Backend](./README.md) &middot; [![GitHub license]](./LICENSE) ![Test Action]

<!-- Table of Contents -->

- [Installation](#installation)
    - [For development](#for-development)
    - [For production](#for-production)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Installation

The first step will be to clone the repo

```shell
git clone https://github.com/samordera/declutter-firebase-backend.git
```

### For development

The requirements are:

* [Python] and [Poetry]

1. Install the dependencies
   ```shell
   poetry install
   ```

### For production

Using Docker is generally recommended (but not strictly required) because it abstracts away some additional set up work.

The requirements for Docker are:

* [Docker CE]
* [Docker Compose]
    * `pip install docker-compose`
    * This is only a required step for linux. Docker comes bundled with docker-compose on Mac OS and Windows.

## Environment Variables

To run this project, you will need to add the following environment variables.

| Variable              | Description               | Default    |
|-----------------------|---------------------------|------------|
| API_NAME              | The name of the API       | "FastAPI"  |
| API_ENDPOINT          | The endpoint of the API   | "/api/v1"  |
| API_HOST              | The API host              | "0.0.0.0"  |
| API_PORT              | The API port              | 8080       |
| FIREBASE_PROJECT_ID   | The Firebase project ID   | * Required |
| FIREBASE_PRIVATE_KEY  | The Firebase private key  | * Required |
| FIREBASE_CLIENT_EMAIL | The Firebase client email | * Required |
| DEBUG                 | Toggles debug mode        | False      |

## Usage

Now you are done! You can run the project using Docker

```shell
docker-compose up
```

Or start the API manually with

```shell
poetry run task start
```

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<!-- Packages Links -->

[docker ce]: https://docs.docker.com/install/
[docker compose]: https://docs.docker.com/compose/install/
[poetry]: https://python-poetry.org/docs/
[python]: https://www.python.org/downloads/


<!-- Shields.io links -->

[gitHub license]: https://img.shields.io/badge/license-MIT-blue.svg
[test action]: https://github.com/samordera/declutter-firebase-backend/actions/workflows/test.yaml/badge.svg
>>>>>>> 0a08e49eee2cb016264e17d1652a2ef1278b713a
