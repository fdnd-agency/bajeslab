<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- HULL logo -->

  <h3 align="center">Healthy urban living lab</h3>

  <p align="center">
    <!-- intro stukje -->
    <br />
    <!-- Live site 
    <a href=" "><strong>Live site »</strong></a>
    -->
    <br />
    <br />
    <!-- Dev site 
    <a href=" ">Dev site</a>
    -->
    &middot;
    <a href="https://github.com/orgs/fdnd-agency/projects/75">Project Board</a>
    &middot;
    <a href="https://github.com/fdnd-agency/bajeslab/issues/new?template=bug_report.yml">Report Bug</a>
    &middot;
    <a href="https://github.com/fdnd-agency/bajeslab/issues/new?template=feature_request.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
<!-- screenshots project -->
<!-- samenvatting project -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Svelte][Svelte.dev]][Svelte-url]
* [![Directus][Directus.io]][Directus-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/fdnd-agency/atlas4045.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file using `example.env` as a guide.
4. `PROTECTED_PASSWORD` will be the password required to see the site. This is to protect the preview branch
   ```env
   PROTECTED_PASSWORD = ""
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
6. Run local dev server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing
Want to contribute as someone outside of the FDND organisation? Follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

When contributing, make sure to follow the <a href="https://github.com/fdnd-agency/.github/wiki/Conventions"><strong>FDND Conventions »</strong></a>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TEAM MEMBERS -->
## Team

- Anna-Kyra Strik · <i>Developer</i> · <a href="https://github.com/Anna-Kyra"><strong>Github »</strong></a>
- Robin van der Heijden · <i>Developer</i> · <a href="https://github.com/Robin1224"><strong>Github »</strong></a> 
- Sarah Bouziane Bouziane · <i>Designer</i> · <a href="https://github.com/saarrxb"><strong>Github »</strong></a>
- Cassidy Starke · <i>Designer</i> · <a href="https://github.com/CassidyStarke"><strong>Github »</strong></a>


# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
